const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false ,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      this.specPattern
    },
    specPattern:'cypress/integration/examples/*.js'
  },
});
