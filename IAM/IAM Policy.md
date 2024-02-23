# IAM Policy

IAM policy is a json object which outlines rules for [Users](../IAM.md#users) or [Groups](../IAM.md#groups)

Example of an IAM Policy with type definitions

```ts
interface IAMPolicy {
  /**
   * Version - Policy language version - always 2012-10-17
  */
  Version: string;
  /**
   * Id - Optional Id of the policy
  */
  Id?: string;
  /**
   * Statement - List of rules to be applied
  */
  Statement: {
    /**
     * Sid - Optional Id for a statement
    */
    Sid?: string;
    /**
     * Effect - Weather the statement Allows or Denies Access
    */
    Effect: "Allow" | "Deny";
    /**
     * Principal - Account/User/Role this statement applies to
    */
    Principal: {
      //Commonly "AWS": ["{account_id}"]
      [key: string]: string[];
    };
    /**
     * Actions - List of actions the statement will Allow or Deny
    */
    Action: string[];
    /**
     * Resource - List of resources this statement applies to
    */
    Resource: string[];
  }[];
}

const ExamplePolicy: IAMPolicy = {
  Version: "2012-10-17",
  Id: "Some-Policy",
  Statement: [
    {
      Sid: "1",
      Effect: "Allow",
      Principal: {
        AWS: ["arn:aws:iam::123131213132:root"],
      },
      Action: [
        "s3:GetObject",
        "s3:PutObject",
      ],
      Resource: ["arn:aws:s3:::examplebucket/*"],
    },
  ]
}
```
