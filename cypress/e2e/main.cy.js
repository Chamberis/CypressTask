describe('Registering and logging test cases', () => {
  it('Registering a new user', () => {
    cy.visit("/registration")
    cy.get("#onetrust-accept-btn-handler").click()
    cy.get("#Registration_FirstName").type("Jimmy")
    cy.get("#Registration_LastName").type("Horse")
    cy.get("#Registration_EmailAddress").type("jimmy@horse.com")
    cy.get("#txtPassword").type("password123")
    cy.get("#Registration_ConfirmPassword").type("password123")
    cy.get("#RegistrationSubmit").click()
    cy.get("#divAccount").trigger('mouseover')
    cy.get(".logoutTxt").last().contains('Sign out')
  })

  it("Logging in with an existing user", () =>{
    cy.visit("/login")
    cy.get("#onetrust-accept-btn-handler").click()
    cy.get("#Login_EmailAddress").type("jimmy@horse.com")
    cy.get("#Login_Password").type("password123")
    cy.get("#LoginButton").click()
    cy.get("#divAccount").trigger('mouseover')
    cy.get(".logoutTxt").last().contains("Sign out")
  })

  it("Trying to log in with invalid login details", () =>{
    cy.visit("/login")
    cy.get("#onetrust-accept-btn-handler").click()
    cy.get("#Login_EmailAddress").type("jimmy@horse.com")
    cy.get("#Login_Password").type("df4s54sdf54sd5f")
    cy.get("#LoginButton").click()
    cy.get(".field-validation-error").last().contains("This email address or password is incorrect")
  })

  it.only("Forgot your password", () =>{
    cy.visit("/login/forgottenpassword")
    cy.get("#onetrust-accept-btn-handler").click()
    cy.get("#EmailAddress").type("jimmy@horse.com")
    cy.get("#EmailRequestSubmit").click()
    cy.get(".dnnFormSuccess").last().contains("If the email address entered was correct," +
        " you should receive a new email shortly with a link to reset your password.")
  })
})