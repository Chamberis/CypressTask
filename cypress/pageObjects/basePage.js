const PRODUCTS_NAME = ".productdescriptionbrand"
const PRICE = ".CurrencySizeLarge"
const PRODUCT_PRICES = ".s-smalltext"
const DISCOUNTED_PRICES =  "span.CurrencySizeLarge"



export class BasePage {

    static acceptCookies() {
    cy.get("#onetrust-accept-btn-handler").click()
    }

    static visitPage(url) {
        cy.visit(url)
    }
    static hasText(selector, text) {
        cy.wait(2000)
        cy.get(selector).first().should("have.text", text)
    }



}