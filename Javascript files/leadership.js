// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Expand progress details
    const btnExpand = document.querySelector('.btn-expand');
    const progressDetails = document.querySelector('.progress-details');
    
    btnExpand.addEventListener('click', function() {
        progressDetails.classList.toggle('active');
        
        const icon = this.querySelector('i');
        if (progressDetails.classList.contains('active')) {
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-minus');
            this.querySelector('span').textContent = 'Hide My Progress';
        } else {
            icon.classList.remove('fa-minus');
            icon.classList.add('fa-plus');
            this.querySelector('span').textContent = 'Explore My Progress';
        }
    });
    
    // Intersection Observer for skill bars
    const skillsSection = document.querySelector('.skills');
    
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }
});
