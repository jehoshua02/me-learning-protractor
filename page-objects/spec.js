var AngularHomepage = require('./pages/AngularHomepage');

describe('angularjs homepage', function() {
  it('should greet the named user', function() {
    var page = new AngularHomepage;
    page.get();
    page.setName('Julie');
    expect(page.getGreeting()).toEqual('Hello Julie!');
  });
});
