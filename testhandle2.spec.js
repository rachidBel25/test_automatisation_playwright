import { test,expect, chromium, devices } from '@playwright/test';



test('Star ouvre GitHub (navigation fiable)', async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.pause();
  await page.goto('https://playwright.dev/');

//   await page.locator('.gh-btn').click({ force: true });
  
  // GitHub peut s'ouvrir dans le même onglet
//   await page.waitForURL('https://github.com/microsoft/playwright');
  
// le titre de la page principale pas celui de nouvel onglet:
//   await expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");
const [githubPage] = await Promise.all([
  context.waitForEvent('page'),
  page.locator('.gh-btn').click({ force: true }),
]);

await githubPage.waitForLoadState('domcontentloaded');

await githubPage.screenshot({ path: 'github.png' });
await expect(githubPage).toHaveTitle(/GitHub.*microsoft\/playwright/);



// utiliser le Regex
// await expect(page).toHaveTitle(/Fast and reliable /);
await page.screenshot({path:'redrictionPageGitHuib.png'});
//  GitHub - microsoft/playwright: Playwright is a framework for Web Testing and Automation. It allows testing Chromium, Firefox and WebKit with a single API.
  await browser.close();
  console.log('LE TEST EST BIEN PASSES');
  
});


