define({
  loaderOptions: {
    packages: [ { name: 'myPackage', location: '.' } ]
  },

  suites: [ 'index' ],

  // A regular expression matching URLs to files that should not be included in code coverage analysis. Set to `true`
  // to completely disable code coverage.
  excludeInstrumentation: /^(?:tests|node_modules)\//
});