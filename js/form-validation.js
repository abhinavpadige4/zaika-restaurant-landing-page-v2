// Form Validation for Booking/Contact Form
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('bookingForm');
    const formMessage = document.getElementById('formMessage');
    
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Reset previous messages
        formMessage.className = 'form-message';
        formMessage.textContent = '';
        formMessage.style.display = 'none';
        
        // Validate form
        if (validateForm()) {
            // Simulate form submission (in real app, this would be an AJAX call)
            submitForm();
        }
    });
    
    // Real-time validation
    const inputs = form.querySelectorAll('input[required], textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            // Remove error styling when user starts typing
            this.classList.remove('error-input');
        });
    });
});

function validateForm() {
    let isValid = true;
    const form = document.getElementById('bookingForm');
    
    // Validate each required field
    const requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });
    
    return isValid;
}

function validateField(field) {
    let isValid = true;
    const value = field.value.trim();
    
    // Remove previous error styling
    field.classList.remove('error-input');
    
    // Check if empty
    if (!value) {
        showFieldError(field, 'This field is required');
        isValid = false;
        return isValid;
    }
    
    // Field-specific validation
    switch (field.type || field.id) {
        case 'email':
            if (!isValidEmail(value)) {
                showFieldError(field, 'Please enter a valid email address');
                isValid = false;
            }
            break;
            
        case 'tel':
            if (!isValidPhone(value)) {
                showFieldError(field, 'Please enter a valid phone number');
                isValid = false;
            }
            break;
            
        case 'date':
            if (!isValidDate(value)) {
                showFieldError(field, 'Please select a valid date');
                isValid = false;
            }
            break;
            
        case 'guests':
            const guests = parseInt(value);
            if (isNaN(guests) || guests < 1 || guests > 20) {
                showFieldError(field, 'Please enter a valid number of guests (1-20)');
                isValid = false;
            }
            break;
            
        default:
            // Basic length validation for name
            if (field.id === 'name' && value.length < 2) {
                showFieldError(field, 'Name must be at least 2 characters long');
                isValid = false;
            }
            break;
    }
    
    return isValid;
}

function showFieldError(field, message) {
    field.classList.add('error-input');
    
    // Create or update error message
    let errorElement = field.parentElement.querySelector('.error-message');
    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.style.color = 'var(--error-red)';
        errorElement.style.fontSize = '0.875rem';
        errorElement.style.marginTop = '0.25rem';
        field.parentElement.appendChild(errorElement);
    }
    
    errorElement.textContent = message;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    // Remove all non-digit characters
    const digitsOnly = phone.replace(/\D/g, '');
    // Check if it's a valid phone number (10-15 digits)
    return digitsOnly.length >= 10 && digitsOnly.length <= 15;
}

function isValidDate(dateString) {
    if (!dateString) return false;
    
    const date = new Date(dateString);
    const today = new Date();
    
    // Check if date is valid and not in the past
    if (isNaN(date.getTime())) return false;
    
    // Set both to midnight for fair comparison
    today.setHours(0, 0, 0, 0);
    date.setHours(0, 0, 0, 0);
    
    return date >= today;
}

function submitForm() {
    const form = document.getElementById('bookingForm');
    const formMessage = document.getElementById('formMessage');
    
    // Show loading state
    formMessage.className = 'form-message';
    formMessage.textContent = 'Processing your reservation...';
    formMessage.style.display = 'block';
    formMessage.style.backgroundColor = 'rgba(255, 180, 0, 0.2)';
    formMessage.style.color = 'var(--secondary-gold)';
    
    // Disable form during submission
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = 'Submitting...';
    
    // Simulate API call delay
    setTimeout(function() {
        // In a real application, this would be an actual AJAX/Fetch call
        // For demo purposes, we'll simulate a successful submission
        
        // Reset form
        form.reset();
        
        // Show success message
        formMessage.className = 'form-message success';
        formMessage.textContent = 'Your reservation has been successfully submitted! We will contact you shortly to confirm.';
        formMessage.style.display = 'block';
        
        // Re-enable button
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
        
        // Scroll to message
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
    }, 1500); // Simulate network delay
}

// Add input masking for phone number
document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            // Format as (XXX) XXX-XXXX for US-style numbers
            if (value.length > 0) {
                value = value.substring(0, 10); // Max 10 digits
                
                if (value.length > 3) {
                    value = '(' + value.substring(0, 3) + ') ' + value.substring(3);
                }
                if (value.length > 9) {
                    value = value.substring(0, 5) + '-' + value.substring(5, 9);
                }
            }
            
            e.target.value = value;
        });
    }
});