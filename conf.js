exports.config = {
  directConnect: true,

  capabilities: {
    'browserName': 'chrome'
  },

  specs: ['login-spec.js'],

  jasmineNodeOpts: {
    showColors: true
  }
};