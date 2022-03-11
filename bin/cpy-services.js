#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = require("aws-cdk-lib");
const pipeline_stack_1 = require("../lib/pipeline-stack");
const app = new cdk.App();
new pipeline_stack_1.CpyServicesPipelineStack(app, 'cpy-services-dev', {
    branch: 'dev',
    prefix: 'cpy-services',
    env: {
        account: '991510437442',
        region: 'us-east-2'
    }
});
new pipeline_stack_1.CpyServicesPipelineStack(app, 'cpy-services-stage', {
    branch: 'stage',
    prefix: 'cpy-services',
    env: {
        account: '991510437442',
        region: 'us-east-2'
    }
});
new pipeline_stack_1.CpyServicesPipelineStack(app, 'cpy-services-prod', {
    branch: 'main',
    prefix: 'cpy-services',
    env: {
        account: '991510437442',
        region: 'us-east-2'
    }
});
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3B5LXNlcnZpY2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3B5LXNlcnZpY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLG1DQUFtQztBQUNuQywwREFBaUU7QUFFakUsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFMUIsSUFBSSx5Q0FBd0IsQ0FBQyxHQUFHLEVBQUUsa0JBQWtCLEVBQUU7SUFDcEQsTUFBTSxFQUFFLEtBQUs7SUFDYixNQUFNLEVBQUUsY0FBYztJQUN0QixHQUFHLEVBQUU7UUFDSCxPQUFPLEVBQUUsY0FBYztRQUN2QixNQUFNLEVBQUUsV0FBVztLQUNwQjtDQUNGLENBQUMsQ0FBQztBQUVILElBQUkseUNBQXdCLENBQUMsR0FBRyxFQUFFLG9CQUFvQixFQUFFO0lBQ3RELE1BQU0sRUFBRSxPQUFPO0lBQ2YsTUFBTSxFQUFFLGNBQWM7SUFDdEIsR0FBRyxFQUFFO1FBQ0gsT0FBTyxFQUFFLGNBQWM7UUFDdkIsTUFBTSxFQUFFLFdBQVc7S0FDcEI7Q0FDRixDQUFDLENBQUM7QUFFSCxJQUFJLHlDQUF3QixDQUFDLEdBQUcsRUFBRSxtQkFBbUIsRUFBRTtJQUNyRCxNQUFNLEVBQUUsTUFBTTtJQUNkLE1BQU0sRUFBRSxjQUFjO0lBQ3RCLEdBQUcsRUFBRTtRQUNILE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLE1BQU0sRUFBRSxXQUFXO0tBQ3BCO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuaW1wb3J0ICogYXMgY2RrIGZyb20gJ2F3cy1jZGstbGliJztcbmltcG9ydCB7IENweVNlcnZpY2VzUGlwZWxpbmVTdGFjayB9IGZyb20gJy4uL2xpYi9waXBlbGluZS1zdGFjayc7XG5cbmNvbnN0IGFwcCA9IG5ldyBjZGsuQXBwKCk7XG5cbm5ldyBDcHlTZXJ2aWNlc1BpcGVsaW5lU3RhY2soYXBwLCAnY3B5LXNlcnZpY2VzLWRldicsIHtcbiAgYnJhbmNoOiAnZGV2JyxcbiAgcHJlZml4OiAnY3B5LXNlcnZpY2VzJyxcbiAgZW52OiB7XG4gICAgYWNjb3VudDogJzk5MTUxMDQzNzQ0MicsXG4gICAgcmVnaW9uOiAndXMtZWFzdC0yJ1xuICB9XG59KTtcblxubmV3IENweVNlcnZpY2VzUGlwZWxpbmVTdGFjayhhcHAsICdjcHktc2VydmljZXMtc3RhZ2UnLCB7XG4gIGJyYW5jaDogJ3N0YWdlJyxcbiAgcHJlZml4OiAnY3B5LXNlcnZpY2VzJyxcbiAgZW52OiB7XG4gICAgYWNjb3VudDogJzk5MTUxMDQzNzQ0MicsXG4gICAgcmVnaW9uOiAndXMtZWFzdC0yJ1xuICB9XG59KTtcblxubmV3IENweVNlcnZpY2VzUGlwZWxpbmVTdGFjayhhcHAsICdjcHktc2VydmljZXMtcHJvZCcsIHtcbiAgYnJhbmNoOiAnbWFpbicsXG4gIHByZWZpeDogJ2NweS1zZXJ2aWNlcycsXG4gIGVudjoge1xuICAgIGFjY291bnQ6ICc5OTE1MTA0Mzc0NDInLFxuICAgIHJlZ2lvbjogJ3VzLWVhc3QtMidcbiAgfVxufSk7XG5cbmFwcC5zeW50aCgpOyJdfQ==