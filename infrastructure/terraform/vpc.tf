module "hack4law_vpc" {
  source           = "terraform-aws-modules/vpc/aws"
  version          = "3.14.2"
  name             = "hack4law-vpc"
  cidr             = var.vpc_cidr_block
  azs              = var.aws_availability_zones
  private_subnets  = var.private_subnet_cidr_blocks
  public_subnets   = var.public_subnet_cidr_blocks
  database_subnets = var.db_subnet_cidr_blocks

  enable_nat_gateway            = true
  enable_dns_support            = true
  enable_dns_hostnames          = true
  create_database_subnet_group  = true
  single_nat_gateway            = false
  create_igw                    = true
  manage_default_security_group = true
  map_public_ip_on_launch       = true
  tags = {
    "kubernetes.io/cluster/${local.cluster_name}" = "shared"
  }
  private_subnet_tags = {
    "kubernetes.io/cluster/${local.cluster_name}" = "shared"
    "kubernetes.io/role/internal-elb"             = 1
  }
  public_subnet_tags = {
    "kubernetes.io/cluster/${local.cluster_name}" = "shared"
    "kubernetes.io/role/elb"                      = 1
  }
}

