import { test } from '@playwright/test';
import { LoginPage } from '../src/pages/login.page';
import { ProductsPage } from '../src/pages/products.page';
import { invalidUser, validUser } from '../src/test-data/users';
import { personalInfo } from '../src/test-data/data-payment';


test.describe('Pruebas de login y flujo de compra', () => {

  let login: LoginPage;
  let product: ProductsPage;

  test.beforeEach(async ({ page }) => {
    login = new LoginPage(page);
    product = new ProductsPage(page);

    await login.goToPage();
  });

  test(`Dado que el usuario locked_out_user ingresa a www.saucedemo.com 
        Y realiza el login
        Entonces en el sistema se visualiza el mensaje 'Epic sadface: Sorry, this user has been locked out'`,

    async () => {
      await login.withCredentials(invalidUser.user, invalidUser.pass);
      await login.validateMessageError();
    }

  );

  test(`Dado que el usuario standar_user ingresa a www.saucedemo.com 
        Cuando selecciona el producto Sauce Labs Backpack
        Y realiza clic en el boton añadir al carrito
        Y realiza el flujo de la compra
        Entonces visualiza el mensaje Thank you for your order`,

    async () => {
      await login.withCredentials(validUser.user, validUser.pass);
      await product.addToCart();
      await product.goToCart();
      await product.payment(
        personalInfo.firstName,
        personalInfo.lastName,
        personalInfo.zipCode
      );
      await product.validatePaymentSuccess();
    }
  );

});


