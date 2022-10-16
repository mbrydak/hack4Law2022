# module "hack4law-ASG" {
#   source  = "terraform-aws-modules/autoscaling/aws"
#   version = "6.5.1"

#   name = "hack4law-ASG"

#   # AutoScalingGroup attributes
#   min_size            = 1
#   max_size            = 4
#   desired_capacity    = 2
#   vpc_zone_identifier = module.hack4law_vpc.private_subnets

#   # launch configuration attributes
#   launch_template_name        = "hack4law-asg-launch-template"
#   launch_template_description = "hack4law-asg launch template"
#   update_default_version      = true

#   image_id          = data.aws_ami.amazonlinux2.id
#   instance_type     = "t3.micro"
#   ebs_optimized     = true
#   enable_monitoring = true
#   target_group_arns = module.hack4law_alb.target_group_arns

#   instance_refresh = {
#     strategy = "Rolling"
#   }

#   user_data = base64encode(templatefile("${path.module}/user_data.tpl", {
#     git_repo = var.git_repo,
#   }))

#   security_groups = [module.webserver_http_80_security_group.security_group_id]

#   create_iam_instance_profile = false

#   iam_instance_profile_name = module.asg_ssm_role.iam_instance_profile_name

#   depends_on = [
#     module.rds
#   ]
# }

# module "asg_ssm_role" {
#   source  = "terraform-aws-modules/iam/aws//modules/iam-assumable-role"
#   version = "5.2.0"

#   trusted_role_services   = ["ec2.amazonaws.com"]
#   create_role             = true
#   create_instance_profile = true
#   role_name               = "asg_ssm_role"
#   role_requires_mfa       = false
#   custom_role_policy_arns = [
#     "arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore"
#   ]
# }
