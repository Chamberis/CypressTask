export class Login{

    static userLogin(email, password) {
        cy.get("#Login_EmailAddress").type(email)
        cy.get("#Login_Password").type(password)
        cy.get("#LoginButton").click()
    }
}