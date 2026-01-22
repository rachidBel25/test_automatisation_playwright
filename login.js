exports.LoginPage = class LoginPage{

    constructor(page){
        this.page = page
        this.email_textbox = page.locator('#customer_email');
        this.password_textbox = page.locator('#customer_password');
        this.login_button = page.getByRole('button', { name :'submit'});
    }
    async gotoLoginPage(){
        await this.page.goto('https://sauce-demo.myshopify.com/account/login', {waitUntil : 'networkidle', timeout : 40000});
    }
    async login(email, password){
        await this.email_textbox.fill(email)
        await this.password_textbox.fill(password)
        await this.login_button.click()

    };

};