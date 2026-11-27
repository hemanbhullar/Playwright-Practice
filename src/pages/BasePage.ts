import type { Page } from '@playwright/test';

export const APP_BASE_URL = 'https://www.scriptedqa.com/';

export class BasePage {
  constructor(readonly page: Page) {}

  async navigate(path = '/'): Promise<void> {
    await this.page.goto(new URL(path, APP_BASE_URL).toString());
  }
}
