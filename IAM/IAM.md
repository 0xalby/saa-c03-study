# IAM - Identity & Access Management

IAM is a Global Service

### Users

- Users are people within your account/organization
- Users can be grouped via [Groups](#groups)

### Groups

- Groups are collections of [Users](#users)
- Groups only contain users, not other groups

### Roles

- Roles are simmilar to [Users](#users), but instead are used by AWS Services
- Common Roles
  - EC2 Instance Roles
  - Lambda Function Roles
  - Roles for CloudFormation

#### Groups and Users can be applied [IAM Policies](./IAM%20Policy.md)

### Security

- [Security Tools](./IAM%20Security%20Tools.md)
- [MFA](./IAM%20MFA.md)
- [Password Policy](./IAM%20Password%20Policy.md)

### Best Practices

- Never use root accounts after setup
- 1 physical user = 1 AWS [User](#users)
- Assign [Users](#users) to [Groups](#groups) and assign permissions to [Groups](#groups)
- Create a strong [Password Policy](./IAM%20Password%20Policy.md)
- Use [MFA](./IAM%20MFA.md)
- Create and use [Roles](#roles) for giving permissions to AWS Services
- Use [Access Keys](../Access%20AWS/Access%20Methods.md#access20%keys) for programmatic access
- Audit permissions of your account using [IAM Credentials Report](./IAM%20Security%20Tools.md) & [IAM Access Advisor](./IAM%20Security%20Tools.md)
- Never share IAM users & Access Keys
