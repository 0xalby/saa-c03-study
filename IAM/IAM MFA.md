# Multi Factor Authentication - MFA

MFA = Password you know + security device you own

You should always protect Root accounts and IAM users

Users have access to YOUR account, and can possibly change configuration or delete resources in your account.
  
### MFA device options in AWS
+ Virtual MFA Device
  + Google Authenticator (mobile only)
  + Authy (multi-device)
+ Universal 2nd Factor (U2F) Security Key
  + YubuKey by Yubico (3rd party)
+ Hardware Key Fob MFA Device
  + Provided by Gemalto (3rd party)
+ Hardware Key Fob MFA Device for AWS GovCloud (US)
  + Provided by SurePassId (3rd party)