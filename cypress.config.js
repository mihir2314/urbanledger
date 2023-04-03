const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false ,
  defaultCommandTimeout: 10000,
  includeShadowDom:true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      this.specPattern
    },
    specPattern:'cypress/integration/examples/*.js'
  },
});
