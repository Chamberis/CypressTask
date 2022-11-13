import { BasePage } from "../pageObjects/basePage";
import { Registration } from "../pageObjects/registration";
import { Login } from "../pageObjects/login";
import { ProductsPage } from "../pageObjects/productsPage";

describe("Registering and logging test cases", () => {
  before(() => {
    BasePage.viewPort();
  });

  //using my discord server because getting error when trying to run on Cypress Junior server
  after(() => {
    cy.request(
      "POST",
      "https://discord.com/api/webhooks/1041394789897216081/xJRhd2stEEz370wxbYXJbgHgOj4GbN6YsWevff72zYRO74TX88lgkabPZ80U98NQntLv",
      // "https://discord.com/api/webhooks/955086226547965952/WuaK1GMcRDVkOexPEz60OETIorJOvQeX4L1ftw7jDn_NuDM_g5J20FkMAcY_mMoUmXPr",
      {
        username: "KJ",
        content: "All tests completed.",
      }
    );
  });

  it("Registering a new user", () => {
    BasePage.visitPage("/registration");
    BasePage.acceptCookies();
    Registration.inputUserDetailsForRegistration("jimmy");
    Registration.clickOnRegistrationButton();
    Registration.verifyingUserRegistration();
  });

  it("Logging in with an existing user", () => {
    BasePage.visitPage("/login");
    BasePage.acceptCookies();
    Login.inputUserDetailsForLogin();
    Login.clickOnLoginButton();
    Login.verifyUserLogin();
  });

  it("Trying to log in with invalid login details", () => {
    BasePage.visitPage("/login");
    BasePage.acceptCookies();
    Login.userLogin("jimmy@horse.com", "3435435rts5a5545a");
    Login.verifyErrorMessage("This email address or password is incorrect");
  });

  it("Filling form for forgot password", () => {
    BasePage.visitPage("/login/forgottenpassword");
    BasePage.acceptCookies();
    Login.newPasswordForm("jimmy@horse.com");
    Login.verifySuccessMessage(
      "If the email address entered was correct, you should receive a new email shortly with a link to reset your password."
    );
  });

  it("Sorting shown products - By Brand - A to Z", () => {
    BasePage.visitPage("/mens/footwear/trainers");
    BasePage.acceptCookies();
    ProductsPage.checkBrandASC();
    ProductsPage.verifyFirstWord("adidas");
  });

  it("Select only Nike brand", () => {
    BasePage.visitPage("/mens/footwear/trainers");
    BasePage.acceptCookies();
    ProductsPage.checkOnlyNikeBrand();
  });

  // it("Checking if sales is applied to all shown products", () => {
  //   BasePage.visitPage("/sale/mens-sale-top-picks");
  //   BasePage.acceptCookies();
  //   cy.wait(1000);
  //   ProductsPage.compareTwoValues();
  // });
});
