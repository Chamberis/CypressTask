export class BasePage {

    static viewPort() {
        cy.viewport(1920, 1080)
    }

    static acceptCookies() {
    cy.get("#onetrust-accept-btn-handler").click()
    }

    static type(selector,text) {
        cy.get(selector).type(text)
    }

    static click(selector) {
        cy.get(selector).click()
    }

    static visitPage(url) {
        cy.visit(url)
    }
    static hasText(MESSAGE, text) {
        cy.wait(2000)
        cy.get(MESSAGE).first().should("have.text", text)
    }



}