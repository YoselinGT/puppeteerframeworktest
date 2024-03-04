import BasePage from "./BasePage";

export default class loginPage extends BasePage {
    constructor() {
        super();
        this.titleLoginPage = '#titleMainPage';
        this.inputUser = '#username'
        this.inputPassword = '#password'
        this.submitButton = '#frm > button'
        this.titleMainPage = '#wrapper > div.normalheader > div > div > h2'
    }

    async visit() {
        await page.goto('http://localhost/portal/index.php');
        //await page.waitForXPath(this.titleMainPage);
        await page.waitForSelector(this.titleLoginPage);
        const url = await this.getUrl()
        console.log(url)
    }

    async login(usuario,password){
        //await page.waitForSelector(this.inputUser)
        try {
            await this.type(this.inputUser,usuario)
            await this.type(this.inputPassword,password)
            await this.click(this.submitButton)
        } catch (e){
            throw new Error(`En el login `+e.errorMessage)
        }

    }

    async validateLogin() {
        await page.waitForSelector(this.titleMainPage)
    }
}