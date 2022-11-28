const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
/*/ e2e: {
  setupNodeEvents(on, config) {
    on('file:preprocessor', cucumber())
  },
      specPattern: 'cypress/integration/*.feature',
      
    },
  
});*/

e2e: {
  // We've imported your old cypress plugins here.
  // You may want to clean this up later by importing these.
  setupNodeEvents(on, config) {
    return require('./cypress/plugins/index.js')(on, config)
  },
  baseUrl: 'https://www.amazon.in',
  specPattern: 'cypress/integration/*.feature',
  supportFile: 'cypress/support/index.js',
},
});