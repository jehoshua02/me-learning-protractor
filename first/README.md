# My First Protractor Test

I followed the instructions on the [protractor doc home page](http://www.protractortest.org/).

Well ... mostly.

I avoided installing protractor globally by installing locally and using npm
scripts:

```
npm install --save-dev protractor
```

__package.json__

```
"scripts": {
  "test": "protractor conf.js"
},
```

The test wasn't working for me originally. It was just hanging forever, so I
removed the `seleniumAddress` and skip the `webdriver` commands:

__conf.js__

```
exports.config = {
  specs: ['todo-spec.js']
};
```

With this setup, I simply run:

```
npm test
```

And all is well.
