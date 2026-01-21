import { test, expect, chromium } from "@playwright/test";

test("creation de context", async ({}) => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.pause();
  await page.goto('https://playwright.dev/')
 
  // le lien doit avoir targer="_blank"
  const [pagePromise] = await Promise.all([
    context.waitForEvent('page'),
    page.locator('.gh-count').click()
  ]);
  await pagePromise.waitForLoadState('domcontentloaded');
    
});
