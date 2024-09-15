resource "kubernetes_deployment" "name" {
    metadata {
        name = "draftbash-deployment"
        labels = {
          "type" = "backend"
          "app" = "draftbash-app"
        }
    }
    spec {
        replicas = 1
        selector {
            match_labels = {
                "type" = "backend"
                "app" = "draftbash-app"
            }
        }
        template {
            metadata {
                name = "draftbash-pod"
                labels = {
                    "type" = "backend"
                    "app" = "draftbash-app"
                }
            }
            spec {
                container {
                    name = "draftbash-container"
                    image = var.container_image
                    port {
                        container_port = 80

                    }
                }
            }
        }
    }
}
resource "google_compute_address" "default" {
    name = "loadbalancer-ip"
    region = var.region
}

resource "kubernetes_service" "appservice" {
    metadata {
        name = "draftbash-loadbalancer-service"
        labels = {
            "type" = "backend"
            "app" = "draftbash-app"
        }
    }
    spec {
        type = "LoadBalancer"
        load_balancer_ip = google_compute_address.default.address
        port {
            port = 80
            target_port = 80
        }
        selector = {
            "type" = "backend"
            "app" = "draftbash-app"
        }
    }
}