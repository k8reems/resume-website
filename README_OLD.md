# Kareem Olusola - Professional Resume Website

A modern, responsive, and interactive resume website built with HTML5, CSS3, and JavaScript. This project showcases a professional resume with smooth animations, interactive features, and mobile-optimized design.

## 🌐 Live Website

**Website URL**: [https://stresumewebk8reems.z13.web.core.windows.net/](https://stresumewebk8reems.z13.web.core.windows.net/)

## ✨ Features

### 🎨 **Design & User Experience**
- **Modern Professional Layout**: Clean, elegant design with a professional color scheme
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Fade-in effects and hover transitions
- **Typography**: Google Fonts (Inter) for optimal readability
- **Icons**: Font Awesome icons for visual enhancement

### 🖱️ **Interactive Elements**
- **Click-to-Copy Contact Info**: Tap email or phone to copy to clipboard
- **Print Functionality**: Built-in print button with optimized print styles
- **Scroll-to-Top**: Smooth scroll-to-top button appears when scrolling
- **Typing Animation**: Animated typing effect for job title
- **Hover Effects**: Interactive hover states for better UX

### 📱 **Mobile Optimization**
- **Mobile-First Design**: Designed for mobile devices first
- **Touch-Friendly**: Large touch targets for mobile interaction
- **Flexible Layouts**: CSS Grid and Flexbox for responsive layouts
- **Print Styles**: Optimized for PDF generation and printing

### 💼 **Professional Content**
- **Complete Resume**: Full professional experience, skills, and education
- **Technology Stacks**: Organized skill categories with icons
- **Certifications**: Professional certifications with provider branding
- **Work History**: Detailed employment history with achievements
- **Contact Information**: Easy-to-access contact details

## 🛠️ Tech Stack

### **Frontend Technologies**
- **HTML5**: Semantic markup with proper document structure
- **CSS3**: Modern styling with Grid, Flexbox, and animations
- **JavaScript (ES6+)**: Interactive features and dynamic content
- **Font Awesome 6.0**: Professional icon library
- **Google Fonts**: Inter font family for modern typography

### **Build & Deployment**
- **Static Website**: Pure HTML/CSS/JS (no build process required)
- **Azure DevOps**: CI/CD pipeline for automated deployment
- **Azure Storage**: Static website hosting with global CDN
- **Git**: Version control with GitHub integration

## 📁 Project Structure

```
resume-webapp/
├── index.html              # Main resume page
├── styles.css              # CSS styling and responsive design
├── script.js               # JavaScript interactivity
├── 404.html                # Custom 404 error page
├── azure-pipelines.yml     # CI/CD pipeline configuration
├── SETUP_GUIDE.md          # Deployment setup guide
├── .gitignore             # Git ignore rules
└── README.md              # This file
```

## 🏗 Infrastructure Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   GitHub Repo   │───▶│  Azure DevOps    │───▶│  Azure Storage  │
│   (Source Code) │    │   (CI/CD)        │    │ (Static Website)│
└─────────────────┘    └──────────────────┘    └─────────────────┘
                                │
                                ▼
                       ┌──────────────────┐
                       │   Terraform      │
                       │ (Infrastructure) │
                       └──────────────────┘
```

## 🔧 Setup Instructions

### Prerequisites

- Azure Subscription
- Terraform installed (`brew install terraform`)
- Azure CLI installed (`brew install azure-cli`)
- Git
- GitHub account
- Azure DevOps account

### 1. Infrastructure Deployment

1. **Clone the repository**:
   ```bash
   git clone <your-github-repo-url>
   cd resume-webapp
   ```

2. **Login to Azure**:
   ```bash
   az login
   ```

3. **Update Terraform variables**:
   ```bash
   # Edit terraform.tfvars with your unique values
   cp terraform.tfvars.example terraform.tfvars
   # Update storage_account_name to be globally unique
   ```

4. **Deploy infrastructure**:
   ```bash
   terraform init
   terraform plan
   terraform apply
   ```

### 2. GitHub Repository Setup

1. **Create GitHub repository**:
   - Go to GitHub and create a new repository
   - Name it `resume-website` or similar

2. **Push code to GitHub**:
   ```bash
   git remote add origin https://github.com/yourusername/resume-website.git
   git branch -M main
   git push -u origin main
   ```

### 3. Azure DevOps Pipeline Setup

1. **Create Azure DevOps Project**:
   - Go to [Azure DevOps](https://dev.azure.com)
   - Create a new project

2. **Create Service Connection**:
   - Go to Project Settings → Service Connections
   - Create new Azure Resource Manager connection
   - Name it `AzureServiceConnection`
   - Select your subscription and resource group

3. **Create Pipeline**:
   - Go to Pipelines → Create Pipeline
   - Select GitHub as source
   - Select your repository
   - Use existing Azure Pipelines YAML file: `azure-pipelines.yml`

4. **Create Environment**:
   - Go to Pipelines → Environments
   - Create new environment named `production`

## 🚦 CI/CD Pipeline

The Azure DevOps pipeline (`azure-pipelines.yml`) includes:

### Build Stage
- Validates HTML/CSS/JS files
- Packages website files
- Creates deployment artifacts

### Deploy Stage
- Extracts website files
- Uploads to Azure Storage `$web` container
- Sets proper content types
- Purges CDN cache (if enabled)

### Post-Deployment Stage
- Verifies website accessibility
- Tests 404 page functionality

## 📝 Customization

### Update Resume Content
1. Edit `index.html` with your information
2. Modify `styles.css` for design changes
3. Update `script.js` for functionality changes
4. Commit and push - pipeline will auto-deploy

### Infrastructure Changes
1. Modify Terraform files (`main.tf`, `variables.tf`)
2. Run `terraform plan` and `terraform apply`
3. Update pipeline variables if needed

## 🎨 Design Features

### Color Scheme
- Primary: `#1e40af` (Blue)
- Secondary: `#3b82f6` (Light Blue)
- Text: `#333333` (Dark Gray)
- Background: `#f8fafc` (Light Gray)

### Typography
- Font Family: Inter (Google Fonts)
- Font Weights: 300, 400, 500, 600, 700

### Interactive Elements
- Hover effects on skill categories
- Click-to-copy contact information
- Smooth scroll animations
- Print optimization

## 📱 Responsive Design

- **Desktop**: Full layout with sidebar
- **Tablet**: Adjusted grid layouts
- **Mobile**: Single column, stacked elements
- **Print**: Optimized for PDF generation

## 🔍 SEO Optimization

- Semantic HTML structure
- Proper heading hierarchy
- Meta descriptions
- Alt tags for images
- Clean URL structure

## 📊 Performance

- **Static Files**: Fast loading from Azure Storage
- **CDN Ready**: Optional Azure CDN integration
- **Optimized Images**: Compressed assets
- **Minimal Dependencies**: Lightweight codebase

## 🛡 Security

- **HTTPS**: Enforced SSL/TLS
- **Azure Security**: Built-in Azure protections
- **No Sensitive Data**: All data is public resume information

## 📈 Analytics (Optional)

To add analytics, insert tracking code in `index.html`:
```html
<!-- Google Analytics or Azure Application Insights -->
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -am 'Add improvement'`)
4. Push to branch (`git push origin feature/improvement`)
5. Create Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Contact

**Kareem Ol'**
- Email: mcbilly930@gmail.com
- Location: US
- Website: [https://stresumewebk8reems.z13.web.core.windows.net/](https://stresumewebk8reems.z13.web.core.windows.net/)

---

⭐ **Star this repository if you found it helpful!**
