# 🚀 Step-by-Step Setup Guide

Follow these steps to complete your resume website deployment with GitHub and Azure DevOps.

## 📋 Prerequisites Checklist

- ✅ Azure infrastructure deployed (completed in Phase 2)
- ✅ Code ready with Azure Pipeline configuration
- ⚠️ GitHub account (required)
- ⚠️ Azure DevOps account (required)

## 🐙 Step 1: Create GitHub Repository

### 1.1 Manual GitHub Repository Creation

1. **Go to GitHub**: Open [https://github.com](https://github.com) in your browser
2. **Sign in** to your GitHub account (or create one if you don't have it)
3. **Create New Repository**:
   - Click the "+" icon in the top right corner
   - Select "New repository"
   - Repository name: `resume-website` (or any name you prefer)
   - Description: `Professional resume website with Azure deployment`
   - Set to **Public** (recommended for portfolio)
   - ✅ Add a README file: **UNCHECK** (we already have one)
   - ✅ Add .gitignore: **UNCHECK** (we already have one)
   - ✅ Choose a license: **UNCHECK** (optional)
   - Click **"Create repository"**

### 1.2 Connect Local Repository to GitHub

After creating the GitHub repository, you'll see a page with instructions. Follow these commands in your terminal:

```bash
# Add GitHub as remote origin
git remote add origin https://github.com/YOUR_USERNAME/resume-website.git

# Rename branch to main (if not already)
git branch -M main

# Push your code to GitHub
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

### 1.3 Verify Upload

- Refresh your GitHub repository page
- You should see all your files including:
  - `index.html`
  - `styles.css`
  - `script.js`
  - `azure-pipelines.yml`
  - `README.md`
  - Terraform files

## 🔧 Step 2: Azure DevOps Setup

### 2.1 Create Azure DevOps Account

1. **Go to Azure DevOps**: Open [https://dev.azure.com](https://dev.azure.com)
2. **Sign in** with your Microsoft account (same one used for Azure)
3. **Create Organization** (if you don't have one):
   - Organization name: `YourName-DevOps` or similar
   - Select your region
   - Click "Continue"

### 2.2 Create New Project

1. **Create Project**:
   - Project name: `Resume-Website`
   - Description: `CI/CD for resume website deployment`
   - Visibility: **Private** (recommended)
   - Advanced → Version control: **Git**
   - Advanced → Work item process: **Basic**
   - Click **"Create"**

### 2.3 Create Service Connection

This is crucial for Azure deployment:

1. **Go to Project Settings**:
   - Click on your project name
   - At the bottom left, click "Project settings" (gear icon)

2. **Service connections**:
   - In the left menu, under "Pipelines", click "Service connections"
   - Click **"New service connection"**
   - Select **"Azure Resource Manager"**
   - Click **"Next"**

3. **Authentication method**:
   - Select **"Service principal (automatic)"**
   - Click **"Next"**

4. **Configure connection**:
   - Scope level: **Subscription**
   - Subscription: Select your Azure subscription
   - Resource group: `rg-resume-website` (from Terraform)
   - Service connection name: `AzureServiceConnection`
   - Description: `Connection for resume website deployment`
   - ✅ Grant access permission to all pipelines: **CHECK**
   - Click **"Save"**

**Important**: The service connection name MUST be `AzureServiceConnection` as defined in the pipeline YAML!

### 2.4 Create Environment

1. **Go to Environments**:
   - In the left menu, under "Pipelines", click "Environments"
   - Click **"New environment"**

2. **Environment details**:
   - Name: `production`
   - Description: `Production environment for resume website`
   - Resource: **None**
   - Click **"Create"**

### 2.5 Create Pipeline

1. **Go to Pipelines**:
   - In the left menu, click "Pipelines"
   - Click **"New pipeline"** (or "Create Pipeline")

2. **Where is your code?**:
   - Select **"GitHub"**
   - You may need to authorize Azure DevOps to access GitHub

3. **Select repository**:
   - Choose your `resume-website` repository
   - You may be asked to install Azure Pipelines app on GitHub

4. **Configure pipeline**:
   - Select **"Existing Azure Pipelines YAML file"**
   - Branch: `main`
   - Path: `/azure-pipelines.yml`
   - Click **"Continue"**

5. **Review pipeline**:
   - Review the YAML configuration
   - Click **"Run"** to start the first deployment

## 🎯 Step 3: Verify Pipeline Execution

### 3.1 Monitor First Run

1. **Watch the pipeline execution**:
   - You'll see three stages: Build, Deploy, Post-Deployment
   - Each stage should complete successfully (green checkmarks)

2. **If there are errors**:
   - Click on the failed stage to see details
   - Common issues and solutions below

### 3.2 Verify Website Deployment

After successful pipeline run:

1. **Check your website**: 
   - URL: `https://stresumewebk8reems.z13.web.core.windows.net/`
   - Should display your resume

2. **Test functionality**:
   - ✅ Website loads properly
   - ✅ Responsive design works
   - ✅ Interactive features work
   - ✅ 404 page works

## 🛠 Step 4: Test CI/CD Pipeline

### 4.1 Make a Test Change

1. **Edit a file locally**:
   ```bash
   # Edit index.html - change a small detail like your summary
   nano index.html
   ```

2. **Commit and push**:
   ```bash
   git add .
   git commit -m "Test: Update resume content"
   git push origin main
   ```

3. **Watch automatic deployment**:
   - Go to Azure DevOps → Pipelines
   - You should see a new run triggered automatically
   - Wait for it to complete
   - Verify changes are live on your website

## 🚨 Troubleshooting Common Issues

### Service Connection Issues
```
Error: Service connection 'AzureServiceConnection' not found
```
**Solution**: 
- Verify service connection name is exactly `AzureServiceConnection`
- Check if service connection has proper permissions
- Recreate service connection if needed

### Resource Group/Storage Account Not Found
```
Error: Resource group 'rg-resume-website' not found
```
**Solution**:
- Verify Terraform deployment completed successfully
- Check resource names in `terraform.tfvars`
- Update pipeline variables if resource names are different

### Permission Issues
```
Error: Insufficient privileges to complete the operation
```
**Solution**:
- Service connection may need Contributor role on subscription
- Check Azure RBAC permissions in Azure Portal

### GitHub Connection Issues
```
Error: Repository not found or access denied
```
**Solution**:
- Install Azure Pipelines app on GitHub
- Check repository permissions
- Re-authenticate GitHub connection

## 🎉 Step 5: Success Verification

When everything works correctly, you should have:

- ✅ **GitHub Repository**: Code hosted and version controlled
- ✅ **Azure DevOps Pipeline**: Automated CI/CD working
- ✅ **Live Website**: Accessible at your Azure Storage URL
- ✅ **Automatic Deployments**: Changes pushed to GitHub auto-deploy
- ✅ **Infrastructure**: Managed with Terraform
- ✅ **Monitoring**: Pipeline execution history in Azure DevOps

## 📞 Next Steps

After successful setup:

1. **Custom Domain** (Optional):
   - Configure custom domain in Azure Storage
   - Set up Azure CDN for better performance
   - Update DNS records

2. **Analytics** (Optional):
   - Add Google Analytics or Azure Application Insights
   - Monitor website traffic and performance

3. **Additional Features**:
   - Add blog section
   - Portfolio projects
   - Contact form

## 🆘 Need Help?

If you encounter issues:

1. **Check Pipeline Logs**: Azure DevOps → Pipelines → Select run → View logs
2. **Verify Infrastructure**: Azure Portal → Resource Group → Check resources
3. **Test Manually**: Try Azure CLI commands manually
4. **GitHub Issues**: Check repository GitHub Actions tab

---

**🎊 Congratulations! Your professional resume website is now live with full CI/CD automation!**
