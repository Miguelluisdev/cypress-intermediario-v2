const { defineConfig } = require("cypress");

module.exports = defineConfig({
  fixturesFolder: false,
  video: false,
  e2e: {
    baseUrl: "http://localhost",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
