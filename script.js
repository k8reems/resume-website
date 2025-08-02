// Resume Website Interactive Features
console.log('🚀 Kareem Olusola - Resume Website Loaded Successfully!');

// Smooth scrolling for internal links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add fade-in animation for sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections for animation
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Add click-to-copy functionality for email and phone
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        const text = item.querySelector('span')?.textContent;
        if (text && (text.includes('@') || text.includes('('))) {
            item.style.cursor = 'pointer';
            item.title = `Click to copy ${text}`;
            
            item.addEventListener('click', function() {
                navigator.clipboard.writeText(text).then(() => {
                    // Show temporary success message
                    const originalText = item.innerHTML;
                    item.innerHTML = `<i class="fas fa-check"></i> <span>Copied!</span>`;
                    item.style.color = '#059669';
                    
                    setTimeout(() => {
                        item.innerHTML = originalText;
                        item.style.color = '';
                    }, 2000);
                }).catch(err => {
                    console.log('Could not copy text: ', err);
                });
            });
        }
    });
    
    // Add hover effects for skill categories
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(category => {
        category.addEventListener('mouseenter', function() {
            this.style.borderColor = '#3b82f6';
        });
        
        category.addEventListener('mouseleave', function() {
            this.style.borderColor = '#e5e7eb';
        });
    });
    
    // Add print functionality
    const printButton = document.createElement('button');
    printButton.innerHTML = '<i class="fas fa-print"></i> Print Resume';
    printButton.className = 'print-btn';
    printButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #3b82f6;
        color: white;
        border: none;
        padding: 12px 20px;
        border-radius: 50px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        transition: all 0.3s ease;
        z-index: 1000;
        display: flex;
        align-items: center;
        gap: 8px;
    `;
    
    printButton.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 6px 20px rgba(59, 130, 246, 0.4)';
    });
    
    printButton.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.3)';
    });
    
    printButton.addEventListener('click', function() {
        window.print();
    });
    
    document.body.appendChild(printButton);
    
    // Add scroll-to-top functionality
    const scrollTopButton = document.createElement('button');
    scrollTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopButton.className = 'scroll-top-btn';
    scrollTopButton.style.cssText = `
        position: fixed;
        bottom: 80px;
        right: 20px;
        background: #1e40af;
        color: white;
        border: none;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
        font-size: 16px;
        box-shadow: 0 4px 12px rgba(30, 64, 175, 0.3);
        transition: all 0.3s ease;
        z-index: 1000;
        opacity: 0;
        transform: translateY(20px);
        pointer-events: none;
    `;
    
    scrollTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    document.body.appendChild(scrollTopButton);
    
    // Show/hide scroll-to-top button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollTopButton.style.opacity = '1';
            scrollTopButton.style.transform = 'translateY(0)';
            scrollTopButton.style.pointerEvents = 'auto';
        } else {
            scrollTopButton.style.opacity = '0';
            scrollTopButton.style.transform = 'translateY(20px)';
            scrollTopButton.style.pointerEvents = 'none';
        }
    });
    
    // Add typing effect to the title (optional)
    const title = document.querySelector('.title');
    if (title) {
        const originalText = title.textContent;
        title.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < originalText.length) {
                title.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 1000);
    }
    
    console.log('✅ Resume website interactive features loaded!');
});

