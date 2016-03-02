var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
global.expect = chai.expect;

// conf.js
exports.config = {
  framework: 'mocha',
  specs: ['spec.js']
}
