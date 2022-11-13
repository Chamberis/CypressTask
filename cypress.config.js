const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'zid76c',
  e2e: {
    chromeWebSecurity: false,
    baseUrl: "https://lt.sportsdirect.com",
    watchForFileChanges: false,
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/results",
      html: false,
      overwrite: false,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
