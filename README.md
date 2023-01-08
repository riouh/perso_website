Welcome on the repo of my website-resume!

This repo also serves as a backbone for building any static website with an automatic deployment on AWS, using S3, Cloudfront and Route 53. It uses the following technologies:
- The SvelteJS framework
- Typescript
- ESLint and Prettier for formatting and checking
- Bootstrap 5
- Terraform to automate the deployment on AWS
- GitHub Actions to automate the CI and CD flows

## Development
Have the following installed on your machine:
- Git
- NodeJS 16, along with NPM
- Terraform (1.1.9 at time of writing) & AWS CLIs (2.7.25 at time of writing) to provision the infrastructure on AWS

To develop:
- Clone the repo:`git clone git@github.com:riouh/perso_website.git`
- Install the dependencies: `cd front && npm ci --include=dev`
- Launch the development server: `npm run dev`

## Deployment
You first need to provision the infrastructure:
- You need an AWS account, where you would create an admin user and a githubActions user, with AmazonS3FullAccess and CloudFrontFullAccess authorizations
- Add the following lines in ~/.aws/config
`
[profile perso]
region=us-east-1
output=json
`
-Add the following lines in ~/.aws/credentials
`
[perso]
aws_access_key_id=<ACCESS KEY ID OF ADMIN USER>
aws_secret_access_key=<SECRET ACCESS KEY OF ADMIN USER>
`
- Run the following:
`
cd deploy
export AWS_PROFILE=<your-aws-profile>  # named "perso" above
terraform init
terraform apply
`

Then, any changes you make will be applied automatically thnks to the CI/CD pipeline in the GitHub Action.
- Create a repo on GitHub where you will push your code. Add 4 secrets for GitHub Actions:
    - AWS_ACCESS_KEY_ID: access key of the githubActions user you created in AWS console 
    - AWS_SECRET_ACCESS_KEY: secret access key of the githubActions user you created in AWS console
    - S3_BUCKET_NAME: Name of the AWS S3 bucket that has been created
    - CLOUDFRONT_DISTRIB_ID: ID of the created AWS CloudFront distribution
Any git push on the "main" branch will trigger the CI/CD pipeline.
