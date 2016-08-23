var environment = process.env.ENVIRONMENT || 'development',
  bgHost;

switch (environment) {
case 'staging':
  bgHost = 'https://193.67.163.48/';
  break;
case 'development':
  bgHost = 'http://172.29.23.116:4502/';
  break;
default:
  bgHost = 'https://www.britishgas.co.uk';
}

module.exports = {
  environment,
  bgHost
};
