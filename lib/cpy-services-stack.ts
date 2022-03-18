import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigw from 'aws-cdk-lib/aws-apigateway';
import * as sm from 'aws-cdk-lib/aws-secretsmanager';

export class CpyServicesStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const apiKey = sm.Secret.fromSecretNameV2(this, 'ZenotiApiKey', `zenoti-${props?.stackName}-key`)
    const zenotiUrl = sm.Secret.fromSecretNameV2(this, 'ZenotiBaseURL', `zenoti-${props?.stackName}-url`)

    const verifyGiftCardBalance = new lambda.Function(this, 'VerifyGiftCardHandler', {
      environment: {
        apiKey: apiKey.toString(),
        zenotiUrl: zenotiUrl.toString()
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