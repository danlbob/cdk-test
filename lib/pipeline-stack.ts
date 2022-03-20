import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'
import { CpyServicesPipelineStage } from './pipeline-stage'
import {
  CodePipeline,
  CodePipelineSource,
  CodeBuildStep,
} from 'aws-cdk-lib/pipelines'

export interface CustomStackProps extends cdk.StackProps {
  branch: string
  prefix: string
}

export class CpyServicesPipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: CustomStackProps) {
    super(scope, id, props)

    const pipeline = new CodePipeline(this, 'Pipeline', {
      pipelineName: `${props?.prefix}-Pipeline-${props?.branch}`,
      synth: new CodeBuildStep('SynthStep', {
        input: CodePipelineSource.connection(
          'CorePower-Yoga/cpy-services',
          `${props?.branch}`,
          {
            connectionArn:
              'arn:aws:codestar-connections:us-west-2:413427971471:connection/aae79136-1bf8-433e-b879-67b59ada1551',
          }
        ),
        installCommands: ['npm install -g aws-cdk'],
        commands: ['npm ci', 'npm run build', 'npx cdk synth'],
      }),
    })

    const deploy = new CpyServicesPipelineStage(this, `Deploy-${props?.branch}`)
    pipeline.addStage(deploy)
  }
}

