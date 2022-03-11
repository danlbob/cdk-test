import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CodePipeline, CodePipelineSource, CodeBuildStep } from 'aws-cdk-lib/pipelines';

export interface CustomStackProps extends cdk.StackProps {
  branch: string,
  prefix: string
}

export class CpyServicesPipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: CustomStackProps) {
    super(scope, id, props)

    new CodePipeline(this, 'Pipeline', {
      pipelineName: `${props?.prefix}-Pipeline-${props?.branch}`,
      synth: new CodeBuildStep('SynthStep', {
        input: CodePipelineSource.gitHub('CorePower-Yoga/cpy-services', `${props?.branch}`),
        installCommands: [
          'npm install -g aws-cdk'
        ],
        commands: ['npm ci', 'npm run build', 'npx cdk synth']
      })
    });
  }
}