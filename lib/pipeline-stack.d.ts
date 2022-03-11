import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
export interface CustomStackProps extends cdk.StackProps {
    branch: string;
    prefix: string;
}
export declare class CpyServicesPipelineStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: CustomStackProps);
}
