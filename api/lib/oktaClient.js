const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
  orgUrl: 'https://dev-217893.okta.com',
  token: '00yvgzvZcdpM3mM67WBkGxC0pfiCtrzS4PDQXvuo6J'
});

module.exports = client;