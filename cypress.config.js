const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/html',
    overwrite: false,
    html: true,
    json: false,
    reportFilename: 'index'
  },
  e2e: {
    baseUrl: 'http://157.245.199.194:8080/',
    setupNodeEvents(on, config) {

      // implement node event listeners here
    },
  },

});
