// Carousel functionality for testimonials
// This file works in conjunction with script.js for the testimonials carousel

document.addEventListener('DOMContentLoaded', function() {
    // Initialize any additional carousel functionality if needed
    // The main carousel logic is in script.js
    
    // Add ARIA labels for accessibility
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    testimonialSlides.forEach((slide, index) => {
        slide.setAttribute('role', 'tabpanel');
        slide.setAttribute('aria-labelledby', `testimonial-${index}`);
        slide.setAttribute('tabindex', '0');
    });
    
    const testimonialDots = document.querySelectorAll('.dot');
    testimonialDots.forEach((dot, index) => {
        dot.setAttribute('role', 'tab');
        dot.setAttribute('aria-controls', `testimonial-${index}`);
        dot.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
        dot.setAttribute('tabindex', '0');
        
        dot.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // Make slides keyboard accessible
    testimonialSlides.forEach(slide => {
        slide.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                e.preventDefault();
                // Find current slide and navigate
                const currentIndex = Array.from(testimonialSlides).indexOf(this);
                const dots = document.querySelectorAll('.dot');
                
                if (e.key === 'ArrowLeft') {
                    const prevIndex = (currentIndex - 1 + dots.length) % dots.length;
                    dots[prevIndex].click();
                } else if (e.key === 'ArrowRight') {
                    const nextIndex = (currentIndex + 1) % dots.length;
                    dots[nextIndex].click();
                }
            }
        });
    });
});