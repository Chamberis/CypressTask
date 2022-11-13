export class Registration{

    static userRegistration(name, lastName, email, password){
        cy.get("#Registration_FirstName").type(name)
        cy.get("#Registration_LastName").type(lastName)
        cy.get("#Registration_EmailAddress").type(email)
        cy.get("#txtPassword").type(password)
        cy.get("#Registration_ConfirmPassword").type(password)
        cy.get("#RegistrationSubmit").click()
    }

    static verifyingUserLogin() {
        cy.get("#divAccount").trigger('mouseover')
        cy.get(".logoutTxt").last().contains('Sign out')
    }
}