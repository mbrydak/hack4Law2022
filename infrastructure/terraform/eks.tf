module "eks" {
  source  = "terraform-aws-modules/eks/aws"
  version = "18.26.6"

  cluster_name                    = local.cluster_name
  cluster_version                 = "1.22"
  cluster_endpoint_private_access = true
  cluster_endpoint_public_access  = true

  cluster_addons = {
    coredns = {
      resolve_conflicts = "OVERWRITE"
    }
    kube-proxy = {
      resolve_conflicts = "OVERWRITE"
    }
    vpc-cni = {
      resolve_conflicts = "OVERWRITE"
    }
  }

  vpc_id     = module.hack4law_vpc.vpc_id
  subnet_ids = module.hack4law_vpc.private_subnets

  cluster_security_group_additional_rules = {
    egress_nodes_ephemeral_ports_tcp = {
      description                = "To node 1025-65535"
      protocol                   = "tcp"
      from_port                  = 1025
      to_port                    = 65535
      type                       = "egress"
      source_node_security_group = true
    }
  }

  # create_cluster_primary_security_group_tags = true
  create_cluster_primary_security_group_tags = false

  node_security_group_additional_rules = {

    # ALB Ingress controller (webhook)
    ingress_allow_access_from_control_plane_alb = {
      type        = "ingress"
      description = "Control plane invoke ALB ingress webhook"
      protocol    = "tcp"
      from_port   = 9443
      to_port     = 9443
      cidr_blocks = ["0.0.0.0/0"]
    },

    # Allow all outbound
    egress_all = {
      description      = "Node all egress"
      protocol         = "-1"
      from_port        = 0
      to_port          = 0
      type             = "egress"
      cidr_blocks      = ["0.0.0.0/0"]
      ipv6_cidr_blocks = ["::/0"]
    }
  }

  node_security_group_tags = {
    "kubernetes.io/cluster/${local.cluster_name}" = "shared"
  }

  eks_managed_node_group_defaults = {
    ami_type = "AL2_x86_64"

    # attach_cluster_primary_security_group = true
    attach_cluster_primary_security_group = false

    # # Disabling and using externally provided security groups
    create_security_group = false
  }

  eks_managed_node_groups = {
    app = {
      name = "hack4law-app"

      instance_types = ["t3a.small"]

      min_size     = 1
      max_size     = 3
      desired_size = 2

      capacity_type = "SPOT"
      iam_role_additional_policies = [
        "arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore",
      ]
      pre_bootstrap_user_data = <<-EOT
      sudo yum update -y
      sudo yum install -y amazon-efs-utils
      EOT
    }
  }
}
