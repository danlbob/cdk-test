"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CpyServicesPipelineStack = void 0;
const cdk = require("aws-cdk-lib");
const pipelines_1 = require("aws-cdk-lib/pipelines");
class CpyServicesPipelineStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        new pipelines_1.CodePipeline(this, 'Pipeline', {
            pipelineName: `${props === null || props === void 0 ? void 0 : props.prefix}-Pipeline-${props === null || props === void 0 ? void 0 : props.branch}`,
            synth: new pipelines_1.CodeBuildStep('SynthStep', {
                input: pipelines_1.CodePipelineSource.gitHub('CorePower-Yoga/cpy-services', `${props === null || props === void 0 ? void 0 : props.branch}`),
                installCommands: [
                    'npm install -g aws-cdk'
                ],
                commands: ['npm ci', 'npm run build', 'npx cdk synth']
            })
        });
    }
}
exports.CpyServicesPipelineStack = CpyServicesPipelineStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlwZWxpbmUtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwaXBlbGluZS1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBbUM7QUFFbkMscURBQXdGO0FBT3hGLE1BQWEsd0JBQXlCLFNBQVEsR0FBRyxDQUFDLEtBQUs7SUFDckQsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxLQUF3QjtRQUNoRSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUV2QixJQUFJLHdCQUFZLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRTtZQUNqQyxZQUFZLEVBQUUsR0FBRyxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsTUFBTSxhQUFhLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxNQUFNLEVBQUU7WUFDMUQsS0FBSyxFQUFFLElBQUkseUJBQWEsQ0FBQyxXQUFXLEVBQUU7Z0JBQ3BDLEtBQUssRUFBRSw4QkFBa0IsQ0FBQyxNQUFNLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsTUFBTSxFQUFFLENBQUM7Z0JBQ25GLGVBQWUsRUFBRTtvQkFDZix3QkFBd0I7aUJBQ3pCO2dCQUNELFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxlQUFlLEVBQUUsZUFBZSxDQUFDO2FBQ3ZELENBQUM7U0FDSCxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUFmRCw0REFlQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tICdhd3MtY2RrLWxpYic7XG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCB7IENvZGVQaXBlbGluZSwgQ29kZVBpcGVsaW5lU291cmNlLCBDb2RlQnVpbGRTdGVwIH0gZnJvbSAnYXdzLWNkay1saWIvcGlwZWxpbmVzJztcblxuZXhwb3J0IGludGVyZmFjZSBDdXN0b21TdGFja1Byb3BzIGV4dGVuZHMgY2RrLlN0YWNrUHJvcHMge1xuICBicmFuY2g6IHN0cmluZyxcbiAgcHJlZml4OiBzdHJpbmdcbn1cblxuZXhwb3J0IGNsYXNzIENweVNlcnZpY2VzUGlwZWxpbmVTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogQ3VzdG9tU3RhY2tQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpXG5cbiAgICBuZXcgQ29kZVBpcGVsaW5lKHRoaXMsICdQaXBlbGluZScsIHtcbiAgICAgIHBpcGVsaW5lTmFtZTogYCR7cHJvcHM/LnByZWZpeH0tUGlwZWxpbmUtJHtwcm9wcz8uYnJhbmNofWAsXG4gICAgICBzeW50aDogbmV3IENvZGVCdWlsZFN0ZXAoJ1N5bnRoU3RlcCcsIHtcbiAgICAgICAgaW5wdXQ6IENvZGVQaXBlbGluZVNvdXJjZS5naXRIdWIoJ0NvcmVQb3dlci1Zb2dhL2NweS1zZXJ2aWNlcycsIGAke3Byb3BzPy5icmFuY2h9YCksXG4gICAgICAgIGluc3RhbGxDb21tYW5kczogW1xuICAgICAgICAgICducG0gaW5zdGFsbCAtZyBhd3MtY2RrJ1xuICAgICAgICBdLFxuICAgICAgICBjb21tYW5kczogWyducG0gY2knLCAnbnBtIHJ1biBidWlsZCcsICducHggY2RrIHN5bnRoJ11cbiAgICAgIH0pXG4gICAgfSk7XG4gIH1cbn0iXX0=