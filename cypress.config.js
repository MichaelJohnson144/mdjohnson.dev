const { defineConfig } = require('cypress');

const cypressConfig = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
});

module.exports = cypressConfig;
