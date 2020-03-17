import * as cdk from '@aws-cdk/core';
import * as path from 'path';
import * as lambda from '../lib';

class TestStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string) {
    super(scope, id);

    const handler = new lambda.Function(this, 'MyLambda', {
      code: lambda.Code.fromAsset(path.join(__dirname, 'handler.zip')),
      handler: 'index.main',
      runtime: lambda.Runtime.PYTHON_3_6
    });

    handler.addAlias('latest');
  }
}

const app = new cdk.App();

new TestStack(app, 'lambda-test-asset-hash');

app.synth();
