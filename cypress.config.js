const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    baseUrl: "https://lt.sportsdirect.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
