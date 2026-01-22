import {test, expect} from'@playwright/test';
import{LoginPage} from '../pages/login';
import { url } from 'node:inspector';

test ('test pom', async({page})=> {
    const login = new LoginPage(page);
    await page.pause();

    await login.gotoLoginPage();
    await login.login('tomsmith', 'supersecretpassword');

});