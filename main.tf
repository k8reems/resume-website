# Configure the Azure Provider
terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~>3.0"
    }
  }
}

# Configure the Microsoft Azure Provider
provider "azurerm" {
  features {}
}

# Create a resource group
resource "azurerm_resource_group" "resume_rg" {
  name     = var.resource_group_name
  location = var.location

  tags = {
    Environment = var.environment
    Project     = "Resume Website"
  }
}

# Create a storage account
resource "azurerm_storage_account" "resume_storage" {
  name                     = var.storage_account_name
  resource_group_name      = azurerm_resource_group.resume_rg.name
  location                 = azurerm_resource_group.resume_rg.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
  account_kind             = "StorageV2"

  static_website {
    index_document     = "index.html"
    error_404_document = "404.html"
  }

  tags = {
    Environment = var.environment
    Project     = "Resume Website"
  }
}

# Optional: Create Azure CDN Profile
resource "azurerm_cdn_profile" "resume_cdn" {
  count               = var.enable_cdn ? 1 : 0
  name                = "${var.project_name}-cdn"
  location            = azurerm_resource_group.resume_rg.location
  resource_group_name = azurerm_resource_group.resume_rg.name
  sku                 = "Standard_Microsoft"

  tags = {
    Environment = var.environment
    Project     = "Resume Website"
  }
}

# Optional: Create CDN Endpoint
resource "azurerm_cdn_endpoint" "resume_cdn_endpoint" {
  count               = var.enable_cdn ? 1 : 0
  name                = "${var.project_name}-endpoint"
  profile_name        = azurerm_cdn_profile.resume_cdn[0].name
  location            = azurerm_resource_group.resume_rg.location
  resource_group_name = azurerm_resource_group.resume_rg.name

  origin {
    name      = "storage"
    host_name = azurerm_storage_account.resume_storage.primary_web_host
  }

  delivery_rule {
    name  = "EnforceHTTPS"
    order = "1"

    request_scheme_condition {
      operator     = "Equal"
      match_values = ["HTTP"]
    }

    url_redirect_action {
      redirect_type = "Found"
      protocol      = "Https"
    }
  }

  tags = {
    Environment = var.environment
    Project     = "Resume Website"
  }
}
