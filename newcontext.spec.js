import { test, expect, chromium} from '@playwright/test';
// test.describe('gourpe de test', ()=>{
//   test.beforeEach('avant le test', async({page})=>{
//       await page.goto('https://playwright.dev/');

//   });

test('enregistrment context.storagrState', async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    // verifiaction de titre
    await expect(page).toHaveTitle(/OrangeHRM/);
    // authentification
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', {name :' Login '}).click();

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await expect(page).toHaveURL(/dashboard/);
    await context.storageState({path : 'auth.json'});
  
});

test('utilisation context.storagrState', async () => {
   
    const browser = await chromium.launch();
    const context = await browser.newContext({
        storageState : 'auth.json'
    });
    const page = await context.newPage();

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    // verifiaction de titre
    await expect(page).toHaveTitle(/OrangeHRM/);
    // verification de la presence d un nouveau URL et daschboard
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await expect(page).toHaveURL(/dashboard/);

  
});




// test('get started link', async ({ page }) => {
  

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
// });


// npx playwright test tests/example.spec.js --project=chromium --headed