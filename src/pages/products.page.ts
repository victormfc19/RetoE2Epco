import { expect, Page } from "@playwright/test";
import { ProductsLocator } from "../locators/products.locator";

export class ProductsPage {
    private readonly selectors: ProductsLocator;

    constructor(page: Page){
        this.selectors = new ProductsLocator(page);
    }

    async addToCart(){
        await this.selectors.btn_addToCart.click();
    }

    async goToCart(){
        await this.selectors.btn_cartContainer.click();
    }

    async payment(firstName: string, lastName: string, zipCode: string){
        await this.selectors.btn_checkout.click();
        await this.selectors.input_firstName.fill(firstName);
        await this.selectors.input_lastName.fill(lastName);
        await this.selectors.input_zipCode.fill(zipCode);
        await this.selectors.btn_continue.click();
        await this.selectors.btn_finish.click();
    }

    async validatePaymentSuccess(){
        await expect(this.selectors.txt_orderSuccess).toBeVisible();
    }
}