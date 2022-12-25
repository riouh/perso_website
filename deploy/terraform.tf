variable "aws_region" {
  type = string
}

variable "domain_name" {
  type = string
}

provider "aws" {
  region = var.aws_region
}

module "website" {
  source = "./static-site"
  domain_name = var.domain_name
}