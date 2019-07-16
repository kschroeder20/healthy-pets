const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
  orgUrl: 'https://dev-353941.okta.com',
  token: '00LDslHc3Bzb4qg01R48xpNmSNeIYsuQ1Thp2MSp4M'
});

module.exports = client;