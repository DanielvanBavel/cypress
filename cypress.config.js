const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'muqxfs',

  e2e: {
    setupNodeEvents(on, config) {
    },
    specPattern: 'cypress/e2e/*/*.js'
  },
});
