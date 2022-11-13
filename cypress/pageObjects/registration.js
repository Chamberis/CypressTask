const FIRST_NAME_FIELD = "#Registration_FirstName"
const LAST_NAME_FIELD = "#Registration_LastName"
const EMAIL_FIELD = "#Registration_EmailAddress"
const PASSWORD_FIELD = "#txtPassword"
const CONFIRM_PASSWORD_FIELD = "#Registration_ConfirmPassword"
const REGISTRATION_BUTTON = "#RegistrationSubmit"
const SIGN_IN_RIBBON = "#divAccount"
const SIGN_OUT_TEXT = ".logoutTxt"


export class Registration{


    static userRegistration(name, lastName, email, password){
        cy.get(FIRST_NAME_FIELD).type(name)
        cy.get(LAST_NAME_FIELD).type(lastName)
        cy.get(EMAIL_FIELD).type(email)
        cy.get(PASSWORD_FIELD).type(password)
        cy.get(CONFIRM_PASSWORD_FIELD).type(password)
        cy.get(REGISTRATION_BUTTON).click()
    }

    static verifyingUserRegistration() {
        cy.get(SIGN_IN_RIBBON).trigger('mouseover')
        cy.get(SIGN_OUT_TEXT).last().contains('Sign out')
    }
}