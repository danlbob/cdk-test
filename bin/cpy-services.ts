#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib'
import { CpyServicesPipelineStack } from '../lib/pipeline-stack'

const app = new cdk.App()

new CpyServicesPipelineStack(app, 'cpy-services-dan', {
  branch: 'dan',
  prefix: 'cpy-services',
  env: {
    account: '413427971471',
    region: 'us-west-2',
  },
})

new CpyServicesPipelineStack(app, 'cpy-services-stage', {
  branch: 'stage',
  prefix: 'cpy-services',
  env: {
    account: '413427971471',
    region: 'us-west-2',
  },
})

new CpyServicesPipelineStack(app, 'cpy-services-prod', {
  branch: 'main',
  prefix: 'cpy-services',
  env: {
    account: '413427971471',
    region: 'us-west-2',
  },
})

