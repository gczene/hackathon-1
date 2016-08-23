var environment = process.env.ENVIRONMENT || 'development',
  bgHost,
  backHost;

switch (environment) {
case 'staging':
  backHost = 'https://www.britishgas.co.uk/';
  bgHost = 'https://193.67.163.48/';
  break;
case 'development':
  backHost = 'http://172.29.23.116:4502/';
  bgHost = 'http://172.29.23.116:4502/';
  break;
default:
  backHost = 'https://www.britishgas.co.uk/';
  bgHost = 'https://www.britishgas.co.uk/';
}

module.exports = {
  backHost,
  environment,
  bgHost
};
