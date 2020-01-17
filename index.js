const RandExp = require('randexp');

module.exports.templateTags = [{
  name: 'RandomData',
  displayName: 'RandExp',
  description: 'A random data generator wrapper plugin for Insomnia using http://fent.github.io/randexp.js/',
  args: [
    {
      displayName: 'Regex',
      description: 'A Regex pattern to match',
      type: 'string',
      validate: v => (v ? '' : 'Required'),
    }
  ],
  async run(context, regex) {
    if (regex.length == 0) {
      return 'Regex is required';
    }
    
    return new RandExp(regex).gen();
  }
}];