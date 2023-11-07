# AWS CI/CD Pipeline for Web Application with Elastic Beanstalk

This repository contains the source code and configuration for a simple web application and a Continuous Integration / Continuous Deployment (CI/CD) pipeline using AWS services, including AWS CodePipeline, AWS CodeBuild, and AWS Elastic Beanstalk.

## Table of Contents

- [Overview](#overview)
- [Requirements](#requirements)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
- [Pipeline Stages](#pipeline-stages)
- [Automated Testing](Testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Output](#reference)

## Overview

The primary goal of this project is to set up a CI/CD pipeline that automates the build, test, and deployment of a simple web application to AWS Elastic Beanstalk whenever changes are pushed to the repository. Below are the key components of the project:

- **Web Application**: A simple web application that is hosted on AWS Elastic Beanstalk.

- **CI/CD Pipeline**: The CI/CD pipeline is defined using AWS CodePipeline and includes the following stages:
  - **Source**: Pulls the code from the repository.
  - **Build**: Builds the application using AWS CodeBuild.
  - **Deploy**: Deploy the application to Elastic Beanstalk using CodePipeline to Elastic Beanstalk integration.

## Requirements

To set up and use this CI/CD pipeline, you need the following requirements:

- An AWS account with the necessary permissions.
- An AWS Elastic Beanstalk environment for hosting the web application.
- A GitHub repository to host the source code.
- An AWS CodeBuild project for building the application.

## Getting Started

### Prerequisites

Before you start, ensure you have the following prerequisites:

- AWS account credentials configured on your local machine.
- AWS CLI and AWS Elastic Beanstalk CLI (EB CLI) installed.
- GitHub repository with your web application code.

### Setup

1. **Create a GitHub Repository**: Create a new repository for your web application on GitHub.

2. **Configure AWS Services**:
   - Set up an AWS Elastic Beanstalk environment to host your application.
   - Create an AWS CodeBuild project for building your application.

3. **Create AWS CodePipeline**:
   - Set up an AWS CodePipeline that defines the source, build, and deploy stages.

4. **Configure Automatic Trigger**:
   - Configure the pipeline to be triggered automatically whenever there is a change to the code in your GitHub repository.

5. **Deploy the Pipeline**:
   - Deploy the configured pipeline in AWS.

## Pipeline Stages

The CI/CD pipeline is composed of the following stages:

- **Source Stage**:
  - This stage pulls the code from your GitHub repository whenever changes are pushed.

- **Build Stage**:
  - This stage builds the application using AWS CodeBuild, ensuring that your application is ready for deployment.

- **Deploy Stage**:
  - This stage deploys the application to the Elastic Beanstalk environment using CodePipeline's integration.

## Automated Testing 

You can add automated tests to your application and configure the pipeline to run these tests before deploying the application.

## Deployment

Your web application will be automatically built, tested (if configured), and deployed to AWS Elastic Beanstalk whenever changes are pushed to your GitHub repository.

## Contributing

We welcome contributions to this project. Please feel free to submit issues, feature requests, or pull requests.

## License

This project is licensed under the [MIT License](LICENSE).


## Output(For Reference)

### Configure the Environment for Elastic Beanstalk


## ![Screenshot from 2023-11-07 16-10-39](https://github.com/Achanandhi-M/WebApp-Automation-AWS/assets/110651321/e7cc7696-b963-4e7a-a77e-10c3f53a9f0f)


### Choose the platform and platform Branch based on your requirements, This project is based on Nodejs


## ![Screenshot from 2023-11-07 16-10-52](https://github.com/Achanandhi-M/WebApp-Automation-AWS/assets/110651321/a5309fdb-41fe-46bb-8e36-a38df72af414)


### Set up the Networking and Database 


## ![Screenshot from 2023-11-07 16-11-22](https://github.com/Achanandhi-M/WebApp-Automation-AWS/assets/110651321/947ff0aa-af22-4ae5-a991-7df9dd9b52b2)


## Configure Pipeline for CI/CD 

### Choose the pipeline Settings


![Screenshot from 2023-11-07 16-12-06](https://github.com/Achanandhi-M/WebApp-Automation-AWS/assets/110651321/db6e3371-a68e-4732-b7da-f9bc495663f2)


### Most importantly add source providers like(Github , BitBucket, Codecommit etc) 


![Screenshot from 2023-11-07 16-12-44](https://github.com/Achanandhi-M/WebApp-Automation-AWS/assets/110651321/cfc5c7bb-7d27-421a-80ae-a9af4c1d6615)


### Create a Build stage in the Codebuild Service console


![Screenshot from 2023-11-07 16-13-10](https://github.com/Achanandhi-M/WebApp-Automation-AWS/assets/110651321/a70c80ef-8323-48dd-b9d8-3fadb2c37d1a)


### Add Build Stage

![Screenshot from 2023-11-07 16-14-18](https://github.com/Achanandhi-M/WebApp-Automation-AWS/assets/110651321/5565ea28-bbc9-42c3-9282-e87b4df79799)


### Add deploy Stage

![Screenshot from 2023-11-07 16-14-36](https://github.com/Achanandhi-M/WebApp-Automation-AWS/assets/110651321/16bd02ea-cde0-44a5-9787-5afb0b2fd7bc)


### Finally Review the Changes and click Create


![Screenshot from 2023-11-07 16-14-45](https://github.com/Achanandhi-M/WebApp-Automation-AWS/assets/110651321/5b0bff2a-07bb-437b-943a-b347c6d72ec9)


## Logs


![Screenshot from 2023-11-07 16-33-31](https://github.com/Achanandhi-M/WebApp-Automation-AWS/assets/110651321/5083ec66-b05b-4bc1-9598-6c0e7fe362f9)


## Complete Flowchart

![Screenshot from 2023-11-07 16-44-35](https://github.com/Achanandhi-M/WebApp-Automation-AWS/assets/110651321/9c1b5b87-c9e6-4c87-94ac-45d8120e369a)


## ElaticBeanStalk Console

### Click the Domain link to access the web application


![Screenshot from 2023-11-07 17-01-55](https://github.com/Achanandhi-M/WebApp-Automation-AWS/assets/110651321/e5c196d0-956b-4da9-abc6-ebcff2491f14)



## Final output of the Web Application 


![Screenshot from 2023-11-07 16-44-20](https://github.com/Achanandhi-M/WebApp-Automation-AWS/assets/110651321/709678dc-4ca4-4428-9e35-f7b2e945b85e)
















---
Happy coding and automating your deployments with AWS! 😊
