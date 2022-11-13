import {BasePage} from "../pageObjects/basePage";
import {Registration} from "../pageObjects/registration";

describe('Registering and logging test cases', () => {

  before(()=> {
    cy.log("Starting all the test cases and doing something before all of them!")
  })


  it.only('Registering a new user', () => {
    BasePage.visitPage("/registration")
    BasePage.acceptCookies()
    Registration.userRegistration("Jimmy", "Horse", "jimmy@horse.com", "password123" )
    Registration.verifyingUserLogin()
  })

  it("Logging in with an existing user", () => {
    BasePage.visitPage("/registration")
    BasePage.acceptCookies()
    Registration.userRegistration("Jimmy", "Horse", "jimmy@horse.com", "password123" )
    Registration.verifyingUserLogin()
    cy.visit("/login")
    cy.get("#onetrust-accept-btn-handler").click()
    cy.get("#Login_EmailAddress").type("jimmy@horse.com")
    cy.get("#Login_Password").type("password123")
    cy.get("#LoginButton").click()
    cy.get("#divAccount").trigger('mouseover')
    cy.get(".logoutTxt").last().contains("Sign out")
  })

  it("Trying to log in with invalid login details", () => {
    cy.visit("/login")
    cy.get("#onetrust-accept-btn-handler").click()
    cy.get("#Login_EmailAddress").type("jimmy@horse.com")
    cy.get("#Login_Password").type("df4s54sdf54sd5f")
    cy.get("#LoginButton").click()
    cy.get(".field-validation-error").contains("This email address or password is incorrect")
  })

  it("Forgot your password", () => {
    cy.visit("/login/forgottenpassword")
    cy.get("#onetrust-accept-btn-handler").click()
    cy.get("#EmailAddress").type("jimmy@horse.com")
    cy.get("#EmailRequestSubmit").click()
    cy.get(".dnnFormSuccess").contains("If the email address entered was correct," +
        " you should receive a new email shortly with a link to reset your password.")
  })

  it("AZ", () => {
    cy.viewport(1920, 1080)
    cy.visit("/mens/footwear/trainers")
    cy.get("#onetrust-accept-btn-handler").click()
    //cy.get(".FilterCollapseImage ").first().click()
    cy.get("#MobSortOptions_brand_asc").check()
    BasePage.verifyFirstWord('adidas')
  })

  it("Sale", () => {
    cy.viewport(1920, 1080)
    cy.visit("sale/mens-sale-top-picks")
    cy.get("#onetrust-accept-btn-handler").click()
    cy.wait(1000)


    // let discountPrice = cy.get("span.CurrencySizeLarge").first();
    // console.log(discountPrice)
    BasePage.compareTwoValues()
  })


})
