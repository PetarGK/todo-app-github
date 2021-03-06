import * as cdk from '@aws-cdk/core';
import sns = require('@aws-cdk/aws-sns');

export class BackendStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    const topic = new sns.Topic(this, 'Topic', {
      displayName: 'Customer subscription topic'
    });    

    const topic2 = new sns.Topic(this, 'Topic2', {
      displayName: 'Customer subscription topic 2'
    });    
    
    const topic3 = new sns.Topic(this, 'Topic3', {
      displayName: 'Customer subscription topic 3'
    });       
  }
}
