import { Locator, Page} from "@playwright/test";

export class LoginLocator {

    public readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

    get input_username(): Locator {
        return this.page.locator("id=user-name");
    }

    get intput_password(): Locator {
        return this.page.locator("id=password");
    }

    get btn_login(): Locator {
        return this.page.locator("id=login-button");
    }

    get msg_errorLogin(): Locator {
        return this.page.locator("//h3[text()='Epic sadface: Sorry, this user has been locked out.']");
    }
}