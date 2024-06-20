const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'mocha-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'mochawesome, mocha-junit-reporter',
    mochawesomeReporterOptions: {
      reportDir: 'cypress/reports/html',
      overwrite: false,
      html: true,
      json: false
    }
  },
  e2e: {
    baseUrl: 'http://157.245.199.194:8080/',
    setupNodeEvents(on, config) {

      require('cypress-terminal-report/src/installLogsPrinter')(on);
    },
  },

});
