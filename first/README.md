# My First Protractor Test

I followed the instructions on the [protractor doc home page](http://www.protractortest.org/).

Well ... mostly.

Here's what's different:

__I installed locally instead of globally.__ This allows me to track the version
of protractor I am using per project. Good practice and I'm sticking to it.

```
npm install --save-dev protractor
```

__I skip the `webdriver-manager start` command and remove `seleniumAddress` from
my `conf.js` file.__ It wasn't working for me. A friend suggested removing it
and I found that protractor will spin up selenium server on it's own without
specifying it.

__conf.js__

```
exports.config = {
  specs: ['todo-spec.js']
};
```

__I use `postinstall` npm script to `webdriver-manager update`.__ This was still
necessary, but because I install locally, the binary is not on the path, and I
wanted to minimize the number of commands to init a project and run tests.
Locally installed binaries are loaded into the path when run as an npm script.

__I use `test` npm script to run `protractor`.__ Again, locally installed
binaries are available in npm scripts. npm scripts also have the potential of
creating a common task interface for all projects if everyone were to use them.
Good practice and I'm sticking to it.

__package.json__

```
"scripts": {
  "postinstall": "webdriver-manager update",
  "test": "protractor conf.js"
},
```

To run this test, clone the repo, cd to this directory and ...

```
npm install
npm test
```
