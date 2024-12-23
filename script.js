// Form submission handling
document.getElementById('joinForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        
    };
    
    console.log('Form submitted:', formData);
    
    // Show success message (you can replace this with a proper toast notification)
    alert('Obrigado pelo seu interesse! Entraremos em contato em breve.');
    
    // Reset form
    this.reset();
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
});