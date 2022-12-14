variable "db_name" {
  type      = string
  sensitive = true
}

variable "db_user" {
  type      = string
  sensitive = true
}

variable "db_password" {
  type      = string
  sensitive = true
}

variable "vpc_cidr_block" {
  description = "value of vpc_cidr_block"
  type        = string
  default     = "10.0.0.0/16"
}

variable "public_subnet_cidr_blocks" {
  description = "value of public_subnet_cidr_blocks"
  type        = list(string)
  default = [
    "10.0.1.0/24",
    "10.0.2.0/24",
    "10.0.3.0/24",
  ]
}
variable "private_subnet_cidr_blocks" {
  description = "value of private_subnet_cidr_blocks"
  type        = list(string)
  default = [
    "10.0.10.0/24",
    "10.0.11.0/24",
    "10.0.12.0/24",
  ]
}
variable "db_subnet_cidr_blocks" {
  description = "value of db_subnet_cidr_blocks"
  type        = list(string)
  default = [
    "10.0.20.0/24",
    "10.0.21.0/24",
    "10.0.22.0/24"
  ]
}

variable "git_repo" {
  description = "value of git_repo"
  type        = string
  default     = "https://github.com/Cedrik240/hack4Law2022.git"
}

variable "aws_availability_zones" {
  description = "value of aws_availability_zones"
  type        = list(string)
  default     = ["eu-central-1a", "eu-central-1b", "eu-central-1c"]
}

variable "region" {
  type        = string
  default     = "eu-central-1"
  description = "description"
}

variable "ingress_ports" {
  type    = list(any)
  default = ["5432"]
}