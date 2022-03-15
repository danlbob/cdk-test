import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigw from 'aws-cdk-lib/aws-apigateway';
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';

export class CpyServicesStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const verifyGiftCardBalance = new lambda.Function(this, 'VerifyGiftCardHandler', {
      environment: {
        apiKey: secretsmanager,
        zenotiUrl: secretsmanager
      },
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset('lambda'),
      handler: 'verifyGiftCardBalance.handler'
    })

    new apigw.LambdaRestApi(this, 'VerifyGiftCard', {
      handler: verifyGiftCardBalance
    })
  }
};