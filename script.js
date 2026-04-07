// BIGOSYS - JavaScriptq
// Interactive elements and smooth UX

document.addEventListener('DOMContentLoaded', function() {
    
    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-sm');
            navbar.style.padding = '10px 0';
        } else {
            navbar.style.padding = '15px 0';
        }
    });

    // Form submission handling (Mock)
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const name = formData.get('Name') || 'there';
            
            // Simple visual feedback
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerText;
            
            submitBtn.disabled = true;
            submitBtn.innerText = 'Sending...';

            setTimeout(() => {
                alert(`Thank you, ${name}! Your message has been sent. We will get back to you soon.`);
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
                contactForm.reset();
            }, 1500);
        });
    }

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
            }
        });
    }, observerOptions);

    // Apply animation classes to sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in-section');
        observer.observe(section);
    });
});
