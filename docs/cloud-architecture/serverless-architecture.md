---
layout: default
title: 'Serverless Architecture'
parent: Cloud architecture
nav_order: 3
modifiedDate: 22-Aug-2019
comments: true
---

## Evolution of Serverless

Physical --> Virtualization --> Cloud -->Containers -- > Serverless

See more on the evolution of Computing explained [here](https://www.ca.com/us/modern-software-factory/content/the-evolution-of-serverless-computing.html)

Core ideas while building Serverless applications
Time, Memory, Code size, Code, Pragmatics, Design Principles

### How lambda functions work

A container is spawned for the function to execute whenever a request is raised for the first time and the dependencies will be resolved. This process is called Cold Start. Global level things will happen only on Cold start. Other levels of code will be executed on all the time, the function is been invoked, those called Warm start.
Read about this and Cold Start and FireCracker, which runs lambda

### Code Size

Cold starts are directly propotional to the deployment package size
Never have unnecessary code/dependencies, it will increase the cold start

### Lambda Layers

Lambda layes help in reusing codes
    - a zip archive that contains libraries/dependencies
    - Pull in additional code and content
    - A function can use up to 5 layers at a time
    - Helpful in reducing the code dependencies

### Code

Lambda functions shouldnt be a big monolith Lambda. Instead it should cal multiple nano-Services. This how it should be designed as in SRP

#### So how to manage those much lambda functions

Use Step Functions, its a code orchestration. Its like a flow chart.

*Google theburningmonk.com for 'just how expensive is the full aws sdk'*

### Time

We need to wary of time, because we need to respond to client fast and process fast so charge will be less.

    Run a stats for the lambda function taht calculates 1000 time all the prime numbers less than 1000000 with multiple processing memories. Its not about the memory we use, but the time of processing which affects the cost. Most cases the cost change will be negligible, Do some experiment on this. 

### Memory


Google alexcasalboni aws lambda power tuning.

### Design Principles

Amazon API Gateway --> Lambda function --> Amazon RDS. Will this Scale..NO?
The reason being RDS, because of limited number of concurrent Connections.
    One Solution is to move RDS to DynamoDb.But if we cant move data.
    Use amazon Kinesis.

    Use Cloud native Design to make full use of Serverless architecture, not just lambda. 

#### Design for failures and duplicates

A sample app.
    Start -> FaceDetection -> CheckFaceDuplicate -> AddFacetoIndex ->Thumbnail

### Pragmatics

Serverless is easy to code, but harder to design.
        - Concurrency
        - Latency caused by VPC
        - Database Constraints

    How to reduce cold start issue, try keep it warm. Use Cloudwatch rule
    Valuate ColdStart performance issues before fix it
    Violate SRP, if needed
    State management is against the design, but you might eventually have to maintain states
        Sometimes in case of coldstarts we may need to maintain states
    Design your application with Serverless in mind

### References

<a href="http://microservices.io/patterns/microservices.html">Microservices.io</a>
<a href="https://cloud.google.com/appengine/docs/standard/python/designing-microservice-api">Google Compute</a>
