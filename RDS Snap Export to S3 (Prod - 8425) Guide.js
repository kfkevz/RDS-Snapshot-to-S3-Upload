###For RDS Snapshot Export to S3 Automation (Prod-8425)###
##DB Identifier:
--prod-wallet-sporty-aurora-mysql-cluster | Role: Regional Cluster
   AWS KMS Key: eb5a0640-f610-4104-be14-af6ab1734dab
   ARN: arn:aws:rds:ap-northeast-1:842527893291:cluster:prod-wallet-sporty-aurora-mysql-cluster
   
--prod-wallet-sporty-aurora-mysql-db1 	  | Role: Writer Instance
   AWS KMS Key: eb5a0640-f610-4104-be14-af6ab1734dab
   ARN: arn:aws:rds:ap-northeast-1:842527893291:db:prod-wallet-sporty-aurora-mysql-db1
   
--prod-wallet-sporty-aurora-mysql-db2 	  | Role: Reader Instance
   AWS KMS Key: eb5a0640-f610-4104-be14-af6ab1734dab
   ARN: arn:aws:rds:ap-northeast-1:842527893291:db:prod-wallet-sporty-aurora-mysql-db2
   
##RDS Snapshots Details:
DB Instance or Cluster: prod-wallet-sporty-aurora-mysql-cluster
Snapshot Sample: rds:prod-wallet-sporty-aurora-mysql-cluster-2024-01-30-02-08

##S3 Bucket Details:
s3://exported-snapshot-prodwallet-db
Folder: Uploads

##IAM Role Details:
IAM Role Name = DBALambdaRole
ARN = arn:aws:iam::842527893291:role/DBALambdaRole
JSON Code = (Refer to the IAM Role Policies file)

##KMS Keys Details:
RDS Default KMS = arn:aws:kms:ap-northeast-1:842527893291:key/eb5a0640-f610-4104-be14-af6ab1734dab
Custom KMS = arn:aws:kms:ap-northeast-1:842527893291:key/c3bb4741-98c9-4f50-aa32-b6032c28b35f

##Lambda Function: 
Function Name = RDStoS3-Lambda
Code = (Refer to the lambda function code file)
Function ARN = arn:aws:lambda:ap-northeast-1:677489692920:function:RDStoS3Upload2


##AWS User Account Details:
Account ID: 842527893291
IAM User: kevin


##Procedures##

--Create an S3 Bucket for the RDS snapshot destination.
--Create IAM Role with the following policies (refer to the file for the JSON).
--(Optional)Create custom KMS Key, add the IAM Role as key user and key administrator.
--Create Lambda function and supply with needed information refer to the file for the code)
--Create Cloudwatch event rule, define schedule pattern using cron, select lambda function as target type then select your created function.
--Add the Cloudwatch rule you created on the Lambda function trigger then run a test.
