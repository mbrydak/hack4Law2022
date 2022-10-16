# module "rds" {
#   source  = "terraform-aws-modules/rds/aws"
#   version = "5.1.0"

#   identifier = "hack4lawdb"

#   allocated_storage = 5

#   engine               = "postgres"
#   family               = "postgres14"
#   major_engine_version = "14"
#   engine_version       = "14.1"
#   instance_class       = "db.t3.small"
#   db_name              = var.db_name
#   username             = var.db_user
#   password             = var.db_password
#   port                 = 5432
#   deletion_protection  = false
#   apply_immediately    = true
#   multi_az             = true

#   subnet_ids           = module.hack4law_vpc.database_subnets
#   db_subnet_group_name = module.hack4law_vpc.database_subnet_group_name

#   create_random_password = false

#   vpc_security_group_ids = [aws_security_group.database_sg.id]

#   skip_final_snapshot = true
# }

