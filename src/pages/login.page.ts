import { Page, expect } from '@playwright/test';
import { LoginLocator } from "../locators/login.locator";

export class LoginPage {

    private readonly selectors: LoginLocator;

    constructor(page: Page){
        this.selectors = new LoginLocator(page);
    }

    async goToPage(){
        await this.selectors.page.goto('/');
    }

    async withCredentials(username: string, password: string){
        await this.selectors.input_username.fill(username);
        await this.selectors.intput_password.fill(password);
        await this.selectors.btn_login.click();
    }

    async validateMessageError(){
        await expect(this.selectors.msg_errorLogin).toBeVisible();
    }
}