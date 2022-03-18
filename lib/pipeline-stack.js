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
                input: pipelines_1.CodePipelineSource.gitHub('CorePower-Yoga/cpy-services', `${props === null || props === void 0 ? void 0 : props.branch}`),
                installCommands: [
                    'npm install -g aws-cdk'
                ],
                commands: ['npm ci', 'npm run build', 'npx cdk synth']
            })
        });
        const deploy = new pipeline_stage_1.CpyServicesPipelineStage(this, `Deploy-${props === null || props === void 0 ? void 0 : props.branch}`);
        const deployStage = pipeline.addStage(deploy);
    }
}
exports.CpyServicesPipelineStack = CpyServicesPipelineStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlwZWxpbmUtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwaXBlbGluZS1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBbUM7QUFFbkMscURBQTJEO0FBQzNELHFEQUF3RjtBQU94RixNQUFhLHdCQUF5QixTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBQ3JELFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsS0FBd0I7UUFDaEUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFFdkIsTUFBTSxRQUFRLEdBQUcsSUFBSSx3QkFBWSxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUU7WUFDbEQsWUFBWSxFQUFFLEdBQUcsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLE1BQU0sYUFBYSxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsTUFBTSxFQUFFO1lBQzFELEtBQUssRUFBRSxJQUFJLHlCQUFhLENBQUMsV0FBVyxFQUFFO2dCQUNwQyxLQUFLLEVBQUUsOEJBQWtCLENBQUMsTUFBTSxDQUFDLDZCQUE2QixFQUFFLEdBQUcsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLE1BQU0sRUFBRSxDQUFDO2dCQUNuRixlQUFlLEVBQUU7b0JBQ2Ysd0JBQXdCO2lCQUN6QjtnQkFDRCxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsZUFBZSxFQUFFLGVBQWUsQ0FBQzthQUN2RCxDQUFDO1NBQ0gsQ0FBQyxDQUFDO1FBRUgsTUFBTSxNQUFNLEdBQUcsSUFBSSx5Q0FBd0IsQ0FBQyxJQUFJLEVBQUUsVUFBVSxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQTtRQUM1RSxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQy9DLENBQUM7Q0FDRjtBQWxCRCw0REFrQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgeyBDcHlTZXJ2aWNlc1BpcGVsaW5lU3RhZ2UgfSBmcm9tICcuL3BpcGVsaW5lLXN0YWdlJ1xuaW1wb3J0IHsgQ29kZVBpcGVsaW5lLCBDb2RlUGlwZWxpbmVTb3VyY2UsIENvZGVCdWlsZFN0ZXAgfSBmcm9tICdhd3MtY2RrLWxpYi9waXBlbGluZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEN1c3RvbVN0YWNrUHJvcHMgZXh0ZW5kcyBjZGsuU3RhY2tQcm9wcyB7XG4gIGJyYW5jaDogc3RyaW5nLFxuICBwcmVmaXg6IHN0cmluZ1xufVxuXG5leHBvcnQgY2xhc3MgQ3B5U2VydmljZXNQaXBlbGluZVN0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBDdXN0b21TdGFja1Byb3BzKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcylcblxuICAgIGNvbnN0IHBpcGVsaW5lID0gbmV3IENvZGVQaXBlbGluZSh0aGlzLCAnUGlwZWxpbmUnLCB7XG4gICAgICBwaXBlbGluZU5hbWU6IGAke3Byb3BzPy5wcmVmaXh9LVBpcGVsaW5lLSR7cHJvcHM/LmJyYW5jaH1gLFxuICAgICAgc3ludGg6IG5ldyBDb2RlQnVpbGRTdGVwKCdTeW50aFN0ZXAnLCB7XG4gICAgICAgIGlucHV0OiBDb2RlUGlwZWxpbmVTb3VyY2UuZ2l0SHViKCdDb3JlUG93ZXItWW9nYS9jcHktc2VydmljZXMnLCBgJHtwcm9wcz8uYnJhbmNofWApLFxuICAgICAgICBpbnN0YWxsQ29tbWFuZHM6IFtcbiAgICAgICAgICAnbnBtIGluc3RhbGwgLWcgYXdzLWNkaydcbiAgICAgICAgXSxcbiAgICAgICAgY29tbWFuZHM6IFsnbnBtIGNpJywgJ25wbSBydW4gYnVpbGQnLCAnbnB4IGNkayBzeW50aCddXG4gICAgICB9KVxuICAgIH0pO1xuXG4gICAgY29uc3QgZGVwbG95ID0gbmV3IENweVNlcnZpY2VzUGlwZWxpbmVTdGFnZSh0aGlzLCBgRGVwbG95LSR7cHJvcHM/LmJyYW5jaH1gKVxuICAgIGNvbnN0IGRlcGxveVN0YWdlID0gcGlwZWxpbmUuYWRkU3RhZ2UoZGVwbG95KVxuICB9XG59Il19