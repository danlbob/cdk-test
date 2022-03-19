#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = require("aws-cdk-lib");
const pipeline_stack_1 = require("../lib/pipeline-stack");
const app = new cdk.App();
new pipeline_stack_1.CpyServicesPipelineStack(app, 'cpy-services-dan', {
    branch: 'dan',
    prefix: 'cpy-services',
    env: {
        account: '413427971471',
        region: 'us-west-2',
    },
});
new pipeline_stack_1.CpyServicesPipelineStack(app, 'cpy-services-stage', {
    branch: 'stage',
    prefix: 'cpy-services',
    env: {
        account: '413427971471',
        region: 'us-west-2',
    },
});
new pipeline_stack_1.CpyServicesPipelineStack(app, 'cpy-services-prod', {
    branch: 'main',
    prefix: 'cpy-services',
    env: {
        account: '413427971471',
        region: 'us-west-2',
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3B5LXNlcnZpY2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3B5LXNlcnZpY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLG1DQUFrQztBQUNsQywwREFBZ0U7QUFFaEUsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUE7QUFFekIsSUFBSSx5Q0FBd0IsQ0FBQyxHQUFHLEVBQUUsa0JBQWtCLEVBQUU7SUFDcEQsTUFBTSxFQUFFLEtBQUs7SUFDYixNQUFNLEVBQUUsY0FBYztJQUN0QixHQUFHLEVBQUU7UUFDSCxPQUFPLEVBQUUsY0FBYztRQUN2QixNQUFNLEVBQUUsV0FBVztLQUNwQjtDQUNGLENBQUMsQ0FBQTtBQUVGLElBQUkseUNBQXdCLENBQUMsR0FBRyxFQUFFLG9CQUFvQixFQUFFO0lBQ3RELE1BQU0sRUFBRSxPQUFPO0lBQ2YsTUFBTSxFQUFFLGNBQWM7SUFDdEIsR0FBRyxFQUFFO1FBQ0gsT0FBTyxFQUFFLGNBQWM7UUFDdkIsTUFBTSxFQUFFLFdBQVc7S0FDcEI7Q0FDRixDQUFDLENBQUE7QUFFRixJQUFJLHlDQUF3QixDQUFDLEdBQUcsRUFBRSxtQkFBbUIsRUFBRTtJQUNyRCxNQUFNLEVBQUUsTUFBTTtJQUNkLE1BQU0sRUFBRSxjQUFjO0lBQ3RCLEdBQUcsRUFBRTtRQUNILE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLE1BQU0sRUFBRSxXQUFXO0tBQ3BCO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuaW1wb3J0ICogYXMgY2RrIGZyb20gJ2F3cy1jZGstbGliJ1xuaW1wb3J0IHsgQ3B5U2VydmljZXNQaXBlbGluZVN0YWNrIH0gZnJvbSAnLi4vbGliL3BpcGVsaW5lLXN0YWNrJ1xuXG5jb25zdCBhcHAgPSBuZXcgY2RrLkFwcCgpXG5cbm5ldyBDcHlTZXJ2aWNlc1BpcGVsaW5lU3RhY2soYXBwLCAnY3B5LXNlcnZpY2VzLWRhbicsIHtcbiAgYnJhbmNoOiAnZGFuJyxcbiAgcHJlZml4OiAnY3B5LXNlcnZpY2VzJyxcbiAgZW52OiB7XG4gICAgYWNjb3VudDogJzQxMzQyNzk3MTQ3MScsXG4gICAgcmVnaW9uOiAndXMtd2VzdC0yJyxcbiAgfSxcbn0pXG5cbm5ldyBDcHlTZXJ2aWNlc1BpcGVsaW5lU3RhY2soYXBwLCAnY3B5LXNlcnZpY2VzLXN0YWdlJywge1xuICBicmFuY2g6ICdzdGFnZScsXG4gIHByZWZpeDogJ2NweS1zZXJ2aWNlcycsXG4gIGVudjoge1xuICAgIGFjY291bnQ6ICc0MTM0Mjc5NzE0NzEnLFxuICAgIHJlZ2lvbjogJ3VzLXdlc3QtMicsXG4gIH0sXG59KVxuXG5uZXcgQ3B5U2VydmljZXNQaXBlbGluZVN0YWNrKGFwcCwgJ2NweS1zZXJ2aWNlcy1wcm9kJywge1xuICBicmFuY2g6ICdtYWluJyxcbiAgcHJlZml4OiAnY3B5LXNlcnZpY2VzJyxcbiAgZW52OiB7XG4gICAgYWNjb3VudDogJzQxMzQyNzk3MTQ3MScsXG4gICAgcmVnaW9uOiAndXMtd2VzdC0yJyxcbiAgfSxcbn0pXG5cbiJdfQ==