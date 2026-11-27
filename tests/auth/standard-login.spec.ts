import { expect, test } from '../../src/fixtures/base';
import { LoginPage } from '../../src/pages/LoginPage';
import users = require('../data/users.json');

test('standard login @smoke @critical', async ({ basePage }) => {
  await basePage.navigate();
  const loginPage = new LoginPage(basePage.page);

  await expect(loginPage.usernameInput).toBeVisible();
  await expect(loginPage.passwordInput).toBeVisible();
  await expect(loginPage.signInButton).toBeVisible();

  await loginPage.signIn(users.standard.username, users.standard.password);

  await expect(basePage.page).toHaveURL(/\/home$/);
  await expect(
    basePage.page.getByRole('heading', { name: /Welcome back, Automation Engineer!/ }),
  ).toBeVisible();
  await expect(basePage.page.getByRole('button', { name: 'Sign Out' })).toBeVisible();
  await expect
    .poll(() => basePage.page.evaluate(() => localStorage.getItem('authToken')))
    .toBeTruthy();
  await expect
    .poll(() => basePage.page.evaluate(() => localStorage.getItem('keepLoggedIn')))
    .toBe('true');
});
