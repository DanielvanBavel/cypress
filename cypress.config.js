const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'muqxfs',

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here 
    },
    specPattern: 'cypress/e2e/*/*.js'
  },
});
