import { Locator, Page } from "@playwright/test";

export class ProductsLocator {
    public readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

    get btn_addToCart(): Locator {
        return this.page.locator("id=add-to-cart-sauce-labs-backpack");
    }

    get btn_cartContainer(): Locator {
        return this.page.locator("id=shopping_cart_container");
    }

    get btn_checkout(): Locator {
        return this.page.locator("id=checkout");
    }

    get input_firstName(): Locator {
        return this.page.locator("id=first-name");
    }

    get input_lastName(): Locator {
        return this.page.locator("id=last-name");
    }

    get input_zipCode(): Locator {
        return this.page.locator("id=postal-code");
    }

    get btn_continue(): Locator {
        return this.page.locator("id=continue");
    }

    get btn_finish(): Locator {
        return this.page.locator("id=finish");
    }

    get txt_orderSuccess(): Locator {
        return this.page.locator("//h2[text()='Thank you for your order!']");
    }
}