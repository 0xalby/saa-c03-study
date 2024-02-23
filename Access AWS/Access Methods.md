# AWS Access Methods

- **AWS Management Console**
  - Protected by password + MFA (See [IAM](../IAM/IAM.md), [MFA](../IAM/IAM%20MFA.md))
- **AWS Command Line Interface (CLI)**
  - Protcted by access keys
- **AWS Software Development Kit (SDK)**
  - For code: protected by access keys

### Access Keys

- Access keys are generated through the AWS Console
- Users manage their own access keys

### AWS CLI

- Enables you to access AWS services using command line
- Each AWS command starts with `aws`
- Direct access to the public APIs of AWS services
- Develop scripts to manage resources
- Built using AWS SDK for **Python**

- You can use [AWS CloudShell](./AWS%20CloudShell.md) to use the cli virtually
  
### AWS SDK

- Language-specific APIs (set of libraries)
- Enables you to access and manage AWS services programatically
- Embedded within application
  
  