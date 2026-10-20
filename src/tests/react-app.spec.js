import { test, expect } from '@playwright/test';

test('My React website opens', async ({ page }) => {
  await page.goto('http://localhost:5173');

  await expect(page.locator('body')).toBeVisible();
});