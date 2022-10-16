resource "kubernetes_namespace" "scraper_namespace" {
  metadata {
    labels = {
      app = "hack4law"
      env = "dev"
    }
    name = "blog-ns"
  }
}
