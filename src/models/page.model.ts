import { Page } from '@playwright/test';

export class PageModel {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate(url: string) {
        await this.page.goto(url, { waitUntil: 'domcontentloaded' });
    }

    async getTitle(): Promise<string> {
        return await this.page.title();
    }

    async waitForPageLoad() {
        await this.page.waitForLoadState('domcontentloaded');
    }
}