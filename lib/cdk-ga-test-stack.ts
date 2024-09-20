import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export class CdkGaTestStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const demoFunction = new lambda.Function(this, 'demoFunction', {
      code: lambda.Code.fromAsset('handler'),
      handler: 'function.lambda_handler',
      runtime: lambda.Runtime.PYTHON_3_12
    })
  }
}
