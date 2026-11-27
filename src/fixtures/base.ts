import { expect, test as base } from '@playwright/test';
import { BasePage } from '../pages/BasePage';

type Fixtures = {
  basePage: BasePage;
};

export const test = base.extend<Fixtures>({
  basePage: async ({ page }, use) => {
    await use(new BasePage(page));
  },
});

export { expect };
