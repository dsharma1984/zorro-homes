document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Navbar Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { navbar.classList.add('scrolled'); }
        else { navbar.classList.remove('scrolled'); }
    });

    // 2. Smooth Scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        });
    });

    // 3. Form Submission Handling (Mocked)
    const leadForm = document.getElementById('leadForm');
    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = leadForm.querySelector('.btn-submit');
            const originalText = btn.textContent;
            btn.textContent = 'Sending...';
            btn.style.opacity = '0.8';
            btn.disabled = true;

            setTimeout(() => {
                btn.textContent = 'Shortlist Requested!';
                btn.style.backgroundColor = '#10B981'; // Success Green
                btn.style.color = '#FFFFFF';
                leadForm.reset();
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.backgroundColor = '';
                    btn.style.color = '';
                    btn.style.opacity = '1';
                    btn.disabled = false;
                }, 3000);
            }, 1000);
        });
    }

    // 4. Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-open');
        });
    }
});
