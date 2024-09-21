# Create a GKE cluster with the cheapest configuration
resource "google_container_cluster" "primary" {
    name = "draftbash-cluster"
    location = var.zone
    initial_node_count = 3
    node_config {
        machine_type = "g1-small"
        disk_size_gb = 32
    }
}

# Get the current authenticated Google account credentials
data "google_client_config" "default" {}

# Define the Kubernetes deployment (no changes needed from your previous config)
resource "kubernetes_deployment" "draftbash_deployment" {
  metadata {
    name = "draftbash-deployment"
    labels = {
      "app"  = "draftbash-app"
      "type" = "backend"
    }
  }

  spec {
    replicas = 1
    selector {
      match_labels = {
        "app"  = "draftbash-app"
        "type" = "backend"
      }
    }
    template {
      metadata {
        labels = {
          "app"  = "draftbash-app"
          "type" = "backend"
        }
      }

      spec {
        container {
          name  = "draftbash-container"
          image = var.container_image
          port {
            container_port = 80
          }
        }
      }
    }
  }
}

# Reserve a static IP address for the load balancer (no changes needed)
resource "google_compute_address" "loadbalancer_ip" {
  name   = "draftbash-loadbalancer-ip"
  region = var.region
}

# Create a Kubernetes service with a LoadBalancer (no changes needed)
resource "kubernetes_service" "draftbash_service" {
  metadata {
    name = "draftbash-loadbalancer-service"
    labels = {
      "app"  = "draftbash-app"
      "type" = "backend"
    }
  }

  spec {
    selector = {
      "app"  = "draftbash-app"
      "type" = "backend"
    }

    port {
      port        = 80
      target_port = 80
    }

    type = "LoadBalancer"

    load_balancer_ip = google_compute_address.loadbalancer_ip.address
  }
}