terraform {
  backend "gcs" {
    bucket  = "draftbash-terraform-state"
    prefix  = "terraform/state"
  }
}

provider "google" {
  project = var.gcp_project
  region  = var.region
}

# Define the Kubernetes provider
provider "kubernetes" {
  host                   = google_container_cluster.primary.endpoint
  cluster_ca_certificate = base64decode(google_container_cluster.primary.master_auth.0.cluster_ca_certificate)
  token                  = data.google_client_config.default.access_token
}