"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CpyServicesStack = void 0;
const cdk = require("aws-cdk-lib");
const lambda = require("aws-cdk-lib/aws-lambda");
const apigw = require("aws-cdk-lib/aws-apigateway");
const sm = require("aws-cdk-lib/aws-secretsmanager");
class CpyServicesStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const apiKey = sm.Secret.fromSecretNameV2(this, 'ZenotiApiKey', `zenoti-${props === null || props === void 0 ? void 0 : props.stackName}-key`);
        const zenotiUrl = sm.Secret.fromSecretNameV2(this, 'ZenotiBaseURL', `zenoti-${props === null || props === void 0 ? void 0 : props.stackName}-url`);
        const verifyGiftCardBalance = new lambda.Function(this, 'VerifyGiftCardHandler', {
            environment: {
                apiKey: apiKey.toString(),
                zenotiUrl: zenotiUrl.toString()
            },
            runtime: lambda.Runtime.NODEJS_14_X,
            code: lambda.Code.fromAsset('lambda'),
            handler: 'verifyGiftCardBalance.handler'
        });
        new apigw.LambdaRestApi(this, 'VerifyGiftCard', {
            handler: verifyGiftCardBalance
        });
    }
}
exports.CpyServicesStack = CpyServicesStack;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3B5LXNlcnZpY2VzLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3B5LXNlcnZpY2VzLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1DQUFtQztBQUVuQyxpREFBaUQ7QUFDakQsb0RBQW9EO0FBQ3BELHFEQUFxRDtBQUVyRCxNQUFhLGdCQUFpQixTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBQzdDLFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsS0FBc0I7UUFDOUQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLFVBQVUsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLFNBQVMsTUFBTSxDQUFDLENBQUE7UUFDakcsTUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZUFBZSxFQUFFLFVBQVUsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLFNBQVMsTUFBTSxDQUFDLENBQUE7UUFFckcsTUFBTSxxQkFBcUIsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLHVCQUF1QixFQUFFO1lBQy9FLFdBQVcsRUFBRTtnQkFDWCxNQUFNLEVBQUUsTUFBTSxDQUFDLFFBQVEsRUFBRTtnQkFDekIsU0FBUyxFQUFFLFNBQVMsQ0FBQyxRQUFRLEVBQUU7YUFDaEM7WUFDRCxPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO1lBQ25DLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7WUFDckMsT0FBTyxFQUFFLCtCQUErQjtTQUN6QyxDQUFDLENBQUE7UUFFRixJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFO1lBQzlDLE9BQU8sRUFBRSxxQkFBcUI7U0FDL0IsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGO0FBckJELDRDQXFCQztBQUFBLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBsYW1iZGEgZnJvbSAnYXdzLWNkay1saWIvYXdzLWxhbWJkYSc7XG5pbXBvcnQgKiBhcyBhcGlndyBmcm9tICdhd3MtY2RrLWxpYi9hd3MtYXBpZ2F0ZXdheSc7XG5pbXBvcnQgKiBhcyBzbSBmcm9tICdhd3MtY2RrLWxpYi9hd3Mtc2VjcmV0c21hbmFnZXInO1xuXG5leHBvcnQgY2xhc3MgQ3B5U2VydmljZXNTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuICAgIGNvbnN0IGFwaUtleSA9IHNtLlNlY3JldC5mcm9tU2VjcmV0TmFtZVYyKHRoaXMsICdaZW5vdGlBcGlLZXknLCBgemVub3RpLSR7cHJvcHM/LnN0YWNrTmFtZX0ta2V5YClcbiAgICBjb25zdCB6ZW5vdGlVcmwgPSBzbS5TZWNyZXQuZnJvbVNlY3JldE5hbWVWMih0aGlzLCAnWmVub3RpQmFzZVVSTCcsIGB6ZW5vdGktJHtwcm9wcz8uc3RhY2tOYW1lfS11cmxgKVxuXG4gICAgY29uc3QgdmVyaWZ5R2lmdENhcmRCYWxhbmNlID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCAnVmVyaWZ5R2lmdENhcmRIYW5kbGVyJywge1xuICAgICAgZW52aXJvbm1lbnQ6IHtcbiAgICAgICAgYXBpS2V5OiBhcGlLZXkudG9TdHJpbmcoKSxcbiAgICAgICAgemVub3RpVXJsOiB6ZW5vdGlVcmwudG9TdHJpbmcoKVxuICAgICAgfSxcbiAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18xNF9YLFxuICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KCdsYW1iZGEnKSxcbiAgICAgIGhhbmRsZXI6ICd2ZXJpZnlHaWZ0Q2FyZEJhbGFuY2UuaGFuZGxlcidcbiAgICB9KVxuXG4gICAgbmV3IGFwaWd3LkxhbWJkYVJlc3RBcGkodGhpcywgJ1ZlcmlmeUdpZnRDYXJkJywge1xuICAgICAgaGFuZGxlcjogdmVyaWZ5R2lmdENhcmRCYWxhbmNlXG4gICAgfSlcbiAgfVxufTsiXX0=