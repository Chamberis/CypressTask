import {BasePage} from "./basePage";

const FIRST_NAME_FIELD = "#Registration_FirstName"
const LAST_NAME_FIELD = "#Registration_LastName"
const EMAIL_FIELD = "#Registration_EmailAddress"
const PASSWORD_FIELD = "#txtPassword"
const CONFIRM_PASSWORD_FIELD = "#Registration_ConfirmPassword"
const REGISTRATION_BUTTON = "#RegistrationSubmit"
const SIGN_IN_RIBBON = "#divAccount"
const SIGN_OUT_TEXT = ".logoutTxt"



export class Registration extends BasePage{

    static clickOnRegistrationButton() {
        this.click(REGISTRATION_BUTTON)
    }


    static verifyingUserRegistration() {
        cy.get(SIGN_IN_RIBBON).trigger('mouseover')
        cy.get(SIGN_OUT_TEXT).last().contains('Sign out')
    }


    static inputUserDetailsForRegistration(user) {
        cy.fixture("users").then(users => {
            let chosenUser = users[user]
            this.type(FIRST_NAME_FIELD,chosenUser.firstName)
            this.type(LAST_NAME_FIELD,chosenUser.lastName)
            this.type(EMAIL_FIELD,chosenUser.emailAddress)
            this.type(PASSWORD_FIELD,chosenUser.userPassword)
            this.type(CONFIRM_PASSWORD_FIELD,chosenUser.userPassword)
            })

        }
    }