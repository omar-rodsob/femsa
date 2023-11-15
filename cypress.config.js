const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'https://jobs.workable.com/view/ha1wKaXW21aoyyCBRWJYC4/remote-middle-qa-funcional-in-mexico-city-at-multiplica-talent'
  },
});
