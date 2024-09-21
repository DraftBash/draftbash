variable "gcp_project" {
  description = "The GCP project ID"
default = "draftbash-435005"
}

variable "zone" {
  description = "The GCP zone to deploy the cluster to"
  default = "us-central1-a"
}

variable "region" {
  description = "The GCP region to deploy the cluster to"
  default = "us-central1"
}

variable "container_image" {
  description = "The container image to deploy"
  default = "us-central1-docker.pkg.dev/draftbash-435005/draftbash-repo/draftbash-app:latest"
}