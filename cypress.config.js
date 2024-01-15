const { defineConfig } = require("cypress");

//projectId: "o5vx7i"


module.exports = defineConfig({
  projectId: "vjmb8s",

  "video":true,
  e2e: {
   // baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
