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
- Terraform (1.1.9 at time of writing) to provision the infrastructure on AWS
- AWS CLIs (2.7.25 at time of writing) if you need to perform the CD steps manually 

To develop:
- Clone the repo:`git clone git@github.com:riouh/perso_website.git`
- Install the dependencies: `cd front && npm ci --include=dev`
- Launch the development server: `npm run dev`

## Deployment
The deployment contains 2 parts:
- Initial infrastructure provisioning on AWS
    - fg
    - 
- Continuous deployment when pushing new code


