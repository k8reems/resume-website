output "website_url" {
  description = "URL of the static website"
  value       = azurerm_storage_account.resume_storage.primary_web_endpoint
}

output "storage_account_name" {
  description = "Name of the storage account"
  value       = azurerm_storage_account.resume_storage.name
}

output "resource_group_name" {
  description = "Name of the resource group"
  value       = azurerm_resource_group.resume_rg.name
}

output "cdn_endpoint_url" {
  description = "CDN endpoint URL (if enabled)"
  value       = var.enable_cdn ? "https://${azurerm_cdn_endpoint.resume_cdn_endpoint[0].fqdn}" : "CDN not enabled"
}

output "storage_account_primary_access_key" {
  description = "Primary access key for the storage account"
  value       = azurerm_storage_account.resume_storage.primary_access_key
  sensitive   = true
}
