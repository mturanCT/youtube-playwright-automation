import { test, expect } from '@playwright/test';
import { GoogleSearchModel } from '../src/models/google-search.model';

test.describe('Google Search using MCP', () => {
    let googleSearch: GoogleSearchModel;

    test.beforeEach(async ({ page }) => {
        googleSearch = new GoogleSearchModel(page);
        await googleSearch.navigate('https://www.google.com');
    });

    test('should perform search and verify results', async () => {
        await googleSearch.performSearch('Playwright testing');
        const results = await googleSearch.getSearchResults();
        expect(results.length).toBeGreaterThan(0);
    });
});