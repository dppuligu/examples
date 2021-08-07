const { expect, matchTemplate, MatchStyle } = require('@aws-cdk/assert');
const cdk = require('@aws-cdk/core');
const Examples = require('../lib/examples-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Examples.ExamplesStack(app, 'MyTestStack');
    // THEN
    expect(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
