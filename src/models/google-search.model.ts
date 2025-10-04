// Example model for Google Search page
import { Page } from '@playwright/test';
import { PageModel } from './page.model';
import { Locator } from '@playwright/test';

export class GoogleSearchModel extends PageModel {
    readonly searchInput: Locator;
    readonly searchButton: Locator;

    constructor(page: Page) {
        super(page);
        this.searchInput = this.page.locator('textarea[name="q"]');
        this.searchButton = this.page.locator('input[value="Google Search"]');
    }

    async performSearch(searchTerm: string) {
        await this.searchInput.fill(searchTerm);
        await this.searchInput.press('Enter');
        await this.waitForPageLoad();
    }

    async getSearchResults(): Promise<Locator[]> {
        return await this.page.locator('div.g').all();
    }
}