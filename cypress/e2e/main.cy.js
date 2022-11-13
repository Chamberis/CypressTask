import {BasePage} from "../pageObjects/basePage";
import {Registration} from "../pageObjects/registration";
import {Login} from "../pageObjects/login";
import {ProductsPage} from "../pageObjects/productsPage";

describe('Registering and logging test cases', () => {

  before(()=> {
    BasePage.viewPort()
  })


  it.only('Registering a new user', () => {
    BasePage.visitPage("/registration")
    BasePage.acceptCookies()
    Registration.userRegistration("Jimmy", "Horse", "jimmy@horse.com", "password123" )
    Registration.verifyingUserRegistration()
  })

  it("Logging in with an existing user", () => {
    BasePage.visitPage("/login")
    BasePage.acceptCookies()
    Login.userLogin("jimmy@horse.com", "password123")
    Login.verifyUserLogin()
  })

  it("Trying to log in with invalid login details", () => {
    BasePage.visitPage("/login")
    BasePage.acceptCookies()
    Login.userLogin("jimmy@horse.com", "3435435rts5a5545a")
    Login.verifyErrorMessage("This email address or password is incorrect")
  })

  it("Forgot your password", () => {
    BasePage.visitPage("/login")
    BasePage.acceptCookies()
    Login.newPasswordForm("jimmy@horse.com")
    Login.verifySuccessMessage("If the email address entered was correct," +
        " you should receive a new email shortly with a link to reset your password.")
  })

  it("AZ", () => {
    BasePage.visitPage("/mens/footwear/trainers")
    BasePage.acceptCookies()
    ProductsPage.checkBrandASC()
    ProductsPage.verifyFirstWord('adidas')
  })

  it("Sale", () => {
    cy.visit("sale/mens-sale-top-picks")
    cy.get("#onetrust-accept-btn-handler").click()
    cy.wait(1000)


    // let discountPrice = cy.get("span.CurrencySizeLarge").first();
    // console.log(discountPrice)
    BasePage.compareTwoValues()
  })


})
