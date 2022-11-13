import {BasePage} from "./basePage";

const ERROR_MESSAGE = ".field-validation-error"
const SIGN_IN_RIBBON = "#divAccount"
const SIGN_OUT_TEXT = ".logoutTxt"
const LOGIN_EMAIL_FIELD = "#Login_EmailAddress"
const LOGIN_PASSWORD_FIELD = "#Login_Password"
const LOGIN_BUTTON = "#LoginButton"
const LOST_PASSWORD_EMAIL_FIELD = "#EmailAddress"
const LOST_PASSWORD_SUBMIT_BUTTON = "#EmailRequestSubmit"
const LOST_PASSWORD_SUCCESS_MESSAGE = ".dnnFormSuccess"

export class Login extends BasePage{

    static userLogin(email, password) {
        cy.get(LOGIN_EMAIL_FIELD).type(email)
        cy.get(LOGIN_PASSWORD_FIELD).type(password)
        cy.get(LOGIN_BUTTON).click()
    }

    static verifyUserLogin() {
        cy.get(SIGN_IN_RIBBON).trigger('mouseover')
        cy.get(SIGN_OUT_TEXT).last().contains('Sign out')
    }

    static verifyErrorMessage(error) {
        this.hasText(ERROR_MESSAGE,error)
    }

    static newPasswordForm(email){
        cy.get(LOST_PASSWORD_EMAIL_FIELD).type(email)
        cy.get(LOST_PASSWORD_SUBMIT_BUTTON).click()

    }

    static verifySuccessMessage(message) {
        this.hasText(LOST_PASSWORD_SUCCESS_MESSAGE,message)
    }
}