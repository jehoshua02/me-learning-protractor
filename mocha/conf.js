// conf.js
exports.config = {
  specs: ['spec.js'],
  framework: 'mocha',
  mochaOpts: {
    slow: 3000
  },
  onPrepare: function () {
    // configure chai for assertions
    var chai = require('chai');
    chai.use(require('chai-as-promised'));
    global.expect = chai.expect;
  }
}
