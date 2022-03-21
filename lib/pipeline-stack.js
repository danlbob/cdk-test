"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CpyServicesPipelineStack = void 0;
const cdk = require("aws-cdk-lib");
const pipeline_stage_1 = require("./pipeline-stage");
const pipelines_1 = require("aws-cdk-lib/pipelines");
class CpyServicesPipelineStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const pipeline = new pipelines_1.CodePipeline(this, 'Pipeline', {
            pipelineName: `${props === null || props === void 0 ? void 0 : props.prefix}-Pipeline-${props === null || props === void 0 ? void 0 : props.branch}`,
            synth: new pipelines_1.CodeBuildStep('SynthStep', {
                input: pipelines_1.CodePipelineSource.connection('danlbob/cdk-test', `${props === null || props === void 0 ? void 0 : props.branch}`, {
                    connectionArn: 'arn:aws:codestar-connections:us-west-2:413427971471:connection/adf0c093-49fb-4f16-845e-3511616c45e5',
                }),
                installCommands: ['npm install -g aws-cdk'],
                commands: ['npm ci', 'npm run build', 'npx cdk synth'],
            }),
        });
        const deploy = new pipeline_stage_1.CpyServicesPipelineStage(this, `Deploy-${props === null || props === void 0 ? void 0 : props.branch}`);
        pipeline.addStage(deploy);
    }
}
exports.CpyServicesPipelineStack = CpyServicesPipelineStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlwZWxpbmUtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwaXBlbGluZS1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBa0M7QUFFbEMscURBQTJEO0FBQzNELHFEQUk4QjtBQU85QixNQUFhLHdCQUF5QixTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBQ3JELFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsS0FBd0I7UUFDaEUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFFdkIsTUFBTSxRQUFRLEdBQUcsSUFBSSx3QkFBWSxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUU7WUFDbEQsWUFBWSxFQUFFLEdBQUcsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLE1BQU0sYUFBYSxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsTUFBTSxFQUFFO1lBQzFELEtBQUssRUFBRSxJQUFJLHlCQUFhLENBQUMsV0FBVyxFQUFFO2dCQUNwQyxLQUFLLEVBQUUsOEJBQWtCLENBQUMsVUFBVSxDQUNsQyxrQkFBa0IsRUFDbEIsR0FBRyxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsTUFBTSxFQUFFLEVBQ2xCO29CQUNFLGFBQWEsRUFDWCxxR0FBcUc7aUJBQ3hHLENBQ0Y7Z0JBQ0QsZUFBZSxFQUFFLENBQUMsd0JBQXdCLENBQUM7Z0JBQzNDLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxlQUFlLEVBQUUsZUFBZSxDQUFDO2FBQ3ZELENBQUM7U0FDSCxDQUFDLENBQUE7UUFFRixNQUFNLE1BQU0sR0FBRyxJQUFJLHlDQUF3QixDQUFDLElBQUksRUFBRSxVQUFVLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxNQUFNLEVBQUUsQ0FBQyxDQUFBO1FBQzVFLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDM0IsQ0FBQztDQUNGO0FBdkJELDREQXVCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tICdhd3MtY2RrLWxpYidcbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnXG5pbXBvcnQgeyBDcHlTZXJ2aWNlc1BpcGVsaW5lU3RhZ2UgfSBmcm9tICcuL3BpcGVsaW5lLXN0YWdlJ1xuaW1wb3J0IHtcbiAgQ29kZVBpcGVsaW5lLFxuICBDb2RlUGlwZWxpbmVTb3VyY2UsXG4gIENvZGVCdWlsZFN0ZXAsXG59IGZyb20gJ2F3cy1jZGstbGliL3BpcGVsaW5lcydcblxuZXhwb3J0IGludGVyZmFjZSBDdXN0b21TdGFja1Byb3BzIGV4dGVuZHMgY2RrLlN0YWNrUHJvcHMge1xuICBicmFuY2g6IHN0cmluZ1xuICBwcmVmaXg6IHN0cmluZ1xufVxuXG5leHBvcnQgY2xhc3MgQ3B5U2VydmljZXNQaXBlbGluZVN0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBDdXN0b21TdGFja1Byb3BzKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcylcblxuICAgIGNvbnN0IHBpcGVsaW5lID0gbmV3IENvZGVQaXBlbGluZSh0aGlzLCAnUGlwZWxpbmUnLCB7XG4gICAgICBwaXBlbGluZU5hbWU6IGAke3Byb3BzPy5wcmVmaXh9LVBpcGVsaW5lLSR7cHJvcHM/LmJyYW5jaH1gLFxuICAgICAgc3ludGg6IG5ldyBDb2RlQnVpbGRTdGVwKCdTeW50aFN0ZXAnLCB7XG4gICAgICAgIGlucHV0OiBDb2RlUGlwZWxpbmVTb3VyY2UuY29ubmVjdGlvbihcbiAgICAgICAgICAnZGFubGJvYi9jZGstdGVzdCcsXG4gICAgICAgICAgYCR7cHJvcHM/LmJyYW5jaH1gLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbm5lY3Rpb25Bcm46XG4gICAgICAgICAgICAgICdhcm46YXdzOmNvZGVzdGFyLWNvbm5lY3Rpb25zOnVzLXdlc3QtMjo0MTM0Mjc5NzE0NzE6Y29ubmVjdGlvbi9hZGYwYzA5My00OWZiLTRmMTYtODQ1ZS0zNTExNjE2YzQ1ZTUnLFxuICAgICAgICAgIH1cbiAgICAgICAgKSxcbiAgICAgICAgaW5zdGFsbENvbW1hbmRzOiBbJ25wbSBpbnN0YWxsIC1nIGF3cy1jZGsnXSxcbiAgICAgICAgY29tbWFuZHM6IFsnbnBtIGNpJywgJ25wbSBydW4gYnVpbGQnLCAnbnB4IGNkayBzeW50aCddLFxuICAgICAgfSksXG4gICAgfSlcblxuICAgIGNvbnN0IGRlcGxveSA9IG5ldyBDcHlTZXJ2aWNlc1BpcGVsaW5lU3RhZ2UodGhpcywgYERlcGxveS0ke3Byb3BzPy5icmFuY2h9YClcbiAgICBwaXBlbGluZS5hZGRTdGFnZShkZXBsb3kpXG4gIH1cbn1cblxuIl19