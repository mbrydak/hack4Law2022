module "hack4law_vpc" {
  source           = "terraform-aws-modules/vpc/aws"
  version          = "3.14.2"
  name             = "hack4law-vpc"
  cidr             = var.vpc_cidr_block
  azs              = var.aws_availability_zones
  private_subnets  = var.private_subnet_cidr_blocks
  public_subnets   = var.public_subnet_cidr_blocks
  database_subnets = var.db_subnet_cidr_blocks

  enable_nat_gateway           = true
  enable_dns_support           = true
  enable_dns_hostnames         = true
  create_database_subnet_group = true
  single_nat_gateway           = false
  create_igw                   = true
  database_subnet_tags = {
    "name" = "hack4law-db-subnet"
  }
  private_subnet_tags = {
    "name" = "hack4law-private-subnet"
  }
  public_subnet_tags = {
    "name" = "hack4law-public-subnet"
  }
  database_subnet_group_tags = {
    "name" = "hack4law-db-subnet-group"
  }
}
