terraform {
    required_version = ">= 0.12"
    backend "gcs" {
        bucket  = "draftbash-terraform-state"
        prefix  = "terraform/state"
    }
}
provider "google" {
    project = var.project_id
    region = var.region
}
provider "kubernetes" {
  host                   = google_container_cluster.default.endpoint
  token                  = data.google_client_config.default.access_token
  cluster_ca_certificate = base64decode(google_container_cluster.default.master_auth[0].cluster_ca_certificate)
}