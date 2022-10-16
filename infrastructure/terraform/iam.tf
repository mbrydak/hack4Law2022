module "irsa-aws-alb-ingress-controller" {
  source                        = "terraform-aws-modules/iam/aws//modules/iam-assumable-role-with-oidc"
  version                       = "~> 4"
  create_role                   = true
  role_name                     = "aws-alb-ingress-controller"
  provider_url                  = replace(module.eks.cluster_oidc_issuer_url, "https://", "")
  role_policy_arns              = [aws_iam_policy.aws-alb-ingress-controller.arn]
  oidc_fully_qualified_subjects = ["system:serviceaccount:kube-system:aws-load-balancer-controller"]
}

resource "aws_iam_policy" "aws-alb-ingress-controller" {
  name_prefix = "aws-alb-ingress-controller"
  description = "EKS aws-alb-ingress-controller policy within cluster"
  policy      = file("${path.module}/iam/AWSLoadBalancerControllerIAMPolicy.json")
  path        = "/"
}