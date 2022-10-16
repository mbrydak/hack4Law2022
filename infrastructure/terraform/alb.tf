# module "hack4law_alb" {
#   source  = "terraform-aws-modules/alb/aws"
#   version = "~> 6.0"

#   name = "hack4law-alb"

#   load_balancer_type = "application"

#   vpc_id          = module.hack4law_vpc.vpc_id
#   subnets         = module.hack4law_vpc.public_subnets
#   security_groups = [module.alb_http_80.security_group_id]

#   target_groups = [
#     {
#       name_prefix      = "app-"
#       backend_protocol = "HTTP"
#       backend_port     = 80
#       target_type      = "instance"
#     }
#   ]

#   http_tcp_listeners = [
#     {
#       port               = 80
#       protocol           = "HTTP"
#       target_group_index = 0
#     }
#   ]
#   tags = {
#     Environment = "Test"
#   }
# }
