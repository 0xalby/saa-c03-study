interface IAMPolicy {
    Version: string;
    Id?: string;
    Statement: {
        Sid?: string
        Effect: 'Allow' | 'Deny',
        Principal: {
            [key: string]: string[]
        },
        Action: string[]
        Resource: string[]
    }[]
}

const ExamplePolicy: IAMPolicy = {
    //Policy language version - always 2012-10-17
    Version: "2012-10-17",
    //Optional Id of the policy
    Id: "Some-Policy",
    Statement: [
        {
            //Sid - Optional identifier for the statement
            Sid: "1",
            //Effect - either: Allow or Deny
            Effect: "Allow",
            //principal: Account/User/Role the policy applies to
            Principal: {
                //I presume this is a list of ids?
                AWS: [ "arn:aws:iam::123131213132:root"]
            },
            //An array of actions the policy allows or denies
            Action: [
                //Users in this policy can get s3 objects
                "s3:GetObject",
                //User in this policy can put s3 objects
                "s3:PutObject"
            ],
            //An array of resources this policy applies to
            //For example, different s3 buckets, etc.
            Resource: [
                "arn:aws:s3:::examplebucket/*"
            ] 
        }
    ]
}