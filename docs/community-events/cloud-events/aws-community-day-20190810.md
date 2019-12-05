---
layout: default
title: 'AWS Community Day - Chennai'
parent: 'Cloud Events'
grand_parent: 'Community Events'
nav_order: 1
modifiedDate: 2019-08-10
---

# AWS Community Events - Chennai

The event is hosted by the AWS User group Chennai @ the Hilton on 09-Aug-2019 from 8:00 AM to 6:00 PM.
The event started on time with a keynote talk by Danilo Poccia. I was lucky enough to win a T-shirt for a quiz conducted by Chargebee on AWS concepts. The talk went on quite engaging

## Developing modern Applications using Event Driven Architecture

### Keynote speech by Danilo Poccia - Principal Evangelist - Serverless Amazon Web Services (@danilop)

"Complexity arises when the dependencies among the elements become important"
-Scott E.Page, John HMiller, Complex adaptive Systems

This is how the applications architecture changed over time.
From Monolithic Applications --> Services --> Microservices

A flow chart on how Amazon SQS works:
Millions of User requests--> FrontEnd <--> Metadata service <--> Amazon Dynamo DB <--> Load Manager <--> Back End Clusters <--> FrontEnd

A Quote from the book written on the 70's - Systemantics
A Complex system that works ...[Complete phrase]

Amazon s3 is intentionally built with a minimal featyre set. The focus is on simplicity. Now its built than more than 200 microservices, Every service is encapsulated inside and works based on the contract, so that its easier to change the internals.

So What is serverless?
    -   No infrastructure
    -   Pay for usage

How does serverless work?
Serverless is not just lambda functions, Its a fully managed service built on Storage, Databases, analytics, Machine learning. When an event is triggered, it calls a business logic basically called functions. Whatever we write as code is the business logic and Event is something that heppens, Events tells us a fact and is Immutable time series of actions.

Time is an important component here.

Should you focus on the current status or

Commands Vs Events
Command - Has an intent, Directed to a target, Personal communication
Event - Its a fact, For Others to observe, Broadcast one to many

Behaviour vs structure.
when u start modeling evnts, it forces you to thing about the behaviour of the systems. As opposed to thinking aboiut the strctureof the system. Greg Young, A Decade of DDD, CQRS

Event Driven architecture. we can duplicate events, if the events returns idempotent results.

How to simplify event processing.
    - Nested apps to simplify solving recurring problems. We can use existing servies to compose bigger services. Standard components can be plugged with custom modules with minimal lines of code.
    Learn more on Evnts Fork Pipelines. See sample on Github for AWS event driven architecture.

## Amazon Event Bridge
See image
Events are sent as JSON request, and then is processed by a rule

Common use cases for Event Bridge.
[See image]

## Creating Teams.

Team size & Communication paths
[see image]

Sepearable vs Complex Task
Some tasks can be shared, and some the team need to work together.
While splitting we need to assign to the right skilled person.


Ability as a collection of cognitive tools.
    - For exable Adam has 5 abilities, Betcy 4 and Carl 3. [See image]
    Hiring manager should hire people with varies skills, not with the skills he know. then he end up in less varied skills.

    How often is good to change teams. - The small world problem. We should create small teams with different perception.


Case study for server less architecture.
Capital one - Credit offers API serverless architecture [See image]

Best Practices for building Modern Applications [See Image]


## Unified Analytics with AWS
- Speech by Jay Palaniappan, Principle Solutions Architect. AWS Cloud & Big Data, Agilsum

### Analytics Today [See image]
#### Challenges
- Data Silos
- Duplication on Data
- Overhead

### Unified analytics
purpose is to collect and store data in a single place.
- unified dataset
- Centralized Security and Access Control
- Seamless Data Access to Platforms & tools

#### Unfied Analytics - Conceptual Architecture.

Data Sources
- Structured, unstructured and Streaming data
Data Integration
- Batch data loading and Streaming data loading
Unfied Analtics
Data Insights
Governance & Security

#### Unified Analytics - Physical Architecture. [See image]


#### Data Engineering
-S3
- Redshift/Spectrum
-Glue ETL/EMR
-Kinesis

#### Data Analytics
- Spectrum
- Athena [Serverless platform]
- Reporting Tools

#### Advance Analytics/Data Science
-EMR (sparkML)
-SageMaker
    - TensorFlow
    - MXNet

PartiQL - new Query Engine
- SQL and NoSQL
- Spectrum, s3 Select, QLDB

AWS Lake formation
- Managed data lake Experiecen
- Robust Security & ACL


### Security hardening of popular AWS Services
Generic Cloud Security
AWS Security Services
Shared Responsibilty model

The infrastructure changed to multi cloud and the security also changed

Early days of Cloud - Move Fast or Stay Secure.
Modern Day - Move fast and Stay Secure

How Secure is AWS
- Keeps Data Safe
- Meet Compliance Requuirements
- Less Cost
- Scale Quickly

### AWS Shared responsibility Model

[See image]


## Become Thanos of the Lambda Land - Srushith Repakula, Head of Engineering, KonfHub

Evolution of Serverless
Physical --> Virtualization --> Cloud -->Containers -- > Serverless

Core ideas while building Serverless applications
Time, Memory, Code size, Code, Pragmatics, Design Principles

### How lambda functions work?

    A container is spawned for the function to execute whenever a request rises nad the dependecnies being resolved. Its the cold Start. Global level things will happen only on Cold start. Other levels of code execute all the time the function is invoked, those called warm start
    Read about this and cold Start and FireCracker, which runs lambda

### Code Size

    - Cold starts are directly propotional to the deployment package size
    - Never have unnecessary code/dependencies, it will increase the cold start

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

    * Google theburningmonk.com for 'just how expensive is the full aws sdk'*

### Time
    We need to wary of time, because we need to respond to client fast and process fast so charge will be less.

    Run a stats for the lambda function taht calculates 1000 time all the prime numbers less than 1000000 with multiple processing memories. Its not about the memory we use, but the time of processing which affects the cost. Most cases the cost change will be negligible, Do some experiment on this.

### Memory
    Google alexcasalboni aws lambda power tuning

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


## From Notebook to Production with SageMaker

## Amazon ML Stack

### AI Services
Easily add intelligence to applications without machine learning skills,
    This layer is of application developer.
### ML Services
Build train and deploy machine learning models fast
    Use algorithm, sage maker comes under this
### ML Frameworks & Infrastructure
Flexability & choice
    Support different types of Deep Learning here.

## The machine learning process
Business Problem --> ML Problem framing --> Data Collection --> Data Integration --> Data Preparation & Cleaning --> Data Visualization & Analysis --> Feature Engineering --> Model Training & Parameter Tuning --> Model Evaluation --> Are Business goals Met? If yes Model Deployemnt and Get the Result, ie Predictions, Monitoring & Debugging and Retraining -- Go Back to Data collection, If not met go back to data collection.


## Sage Maker
    - Prebuilt notebooks for common problems - collect and prepare training data
    - Built-in, high performance algorithms - Choose and optimize your ML algorithm
    - One-click training on the highest performing infrastructure - Set-up and manage environments for training
    - Model Optimization - Train and tune ML Models, use hyper parameter optimizations
    - One click deployment - Deploy models in production
    - Fully managed with auto scaling for 75% less - Scale and manage the production environment

## 17 Built in Algorithms
    Linear Learner
    Factorization machines
    K-Nearest neighbours
    XGboost
    K-Means
    Principal component Analysis
    ...
