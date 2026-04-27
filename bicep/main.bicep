// Devopstrio Automated Release Notes
// Delivery Operations Infrastructure Bicep

targetScope = 'subscription'

param location string = 'uksouth'
param prefix string = 'arn-platform'
param env string = 'prd'

resource rgPlatform 'Microsoft.Resources/resourceGroups@2021-04-01' = {
  name: 'rg-${prefix}-${env}'
  location: location
  tags: {
    Purpose: 'Automated Release Notes Core Logic'
  }
}

// 1. Scalable Metadata Store tracking Jira/Git IDs against AI Drafts (PostgreSQL)
module database './modules/postgres.bicep' = {
  scope: rgPlatform
  name: 'postgresDeploy'
  params: {
    location: location
    serverName: 'psql-${prefix}-meta-${env}'
  }
}

// 2. Azure OpenAI (LLM Inference Engine) required for Context Parsing
module aiEngine './modules/openai.bicep' = {
  scope: rgPlatform
  name: 'openAiDeploy'
  params: {
    location: location
    accountName: 'oai-${prefix}-${env}'
  }
}

// 3. Central Web Application Hosting for Gateway, Workers, and Portal
module appHosting './modules/aks.bicep' = {
  scope: rgPlatform
  name: 'k8sDeploy'
  params: {
    location: location
    clusterName: 'aks-${prefix}-host-${env}'
  }
}

output platformUrl string = appHosting.outputs.portalFqdn
output openAiEndpoint string = aiEngine.outputs.endpointUri
