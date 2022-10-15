module "alb_http_80" {
  source  = "terraform-aws-modules/security-group/aws//modules/http-80"
  version = "4.9.0"

  name   = "alb_http_80"
  vpc_id = module.hack4law_vpc.vpc_id

  ingress_cidr_blocks = ["0.0.0.0/0"]
}

module "webserver_http_80_security_group" {
  source  = "terraform-aws-modules/security-group/aws//modules/http-80"
  version = "~> 4.0"

  name   = "webserver_http_80_security_group"
  vpc_id = module.hack4law_vpc.vpc_id

  ingress_cidr_blocks = [module.hack4law_vpc.vpc_cidr_block]

  ingress_with_source_security_group_id = [
    {
      rule                     = "http-80-tcp"
      source_security_group_id = module.alb_http_80.security_group_id
    }
  ]
}

module "rds_postgres_5432_security_group" {
  source  = "terraform-aws-modules/security-group/aws//modules/postgresql"
  version = "4.13.1"

  name                = "mysql_security_group"
  vpc_id              = module.hack4law_vpc.vpc_id
  ingress_cidr_blocks = [module.hack4law_vpc.vpc_cidr_block]

  ingress_with_source_security_group_id = [
    {
      rule                     = "postgresql-tcp"
      source_security_group_id = module.webserver_http_80_security_group.security_group_id
    }
  ]
}
