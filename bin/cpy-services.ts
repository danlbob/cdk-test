#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CpyServicesPipelineStack } from '../lib/pipeline-stack';

const app = new cdk.App();

new CpyServicesPipelineStack(app, 'cpy-services-dev', {
  branch: 'dev',
  prefix: 'cpy-services',
  env: {
    account: '991510437442',
    region: 'us-east-2'
  }
});

new CpyServicesPipelineStack(app, 'cpy-services-stage', {
  branch: 'stage',
  prefix: 'cpy-services',
  env: {
    account: '991510437442',
    region: 'us-east-2'
  }
});

new CpyServicesPipelineStack(app, 'cpy-services-prod', {
  branch: 'main',
  prefix: 'cpy-services',
  env: {
    account: '991510437442',
    region: 'us-east-2'
  }
});

app.synth();