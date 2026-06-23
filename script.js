document.addEventListener('DOMContentLoaded', () => {
    // Custom Cursor & Parallax Background
    const cursor = document.querySelector('.custom-cursor');
    const bgAnimation = document.querySelector('.background-animation');
    
    document.addEventListener('mousemove', (e) => {
        // Cursor follow
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';

        // Background Parallax
        if (bgAnimation) {
            const x = (window.innerWidth / 2 - e.clientX) / 30;
            const y = (window.innerHeight / 2 - e.clientY) / 30;
            bgAnimation.style.transform = `translate(${x}px, ${y}px)`;
        }
    });

    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
    });

    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    });

    // Hamburger Menu Logic
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Skills Button Logic
    const revealSkillsBtn = document.getElementById('reveal-skills-btn');
    const skillsGrid = document.getElementById('skills-grid');

    if (revealSkillsBtn && skillsGrid) {
        revealSkillsBtn.addEventListener('click', () => {
            if (skillsGrid.style.display === 'none' || skillsGrid.style.display === '') {
                skillsGrid.style.display = 'flex';
                revealSkillsBtn.textContent = 'Hide Tech Stack';
            } else {
                skillsGrid.style.display = 'none';
                revealSkillsBtn.textContent = 'Reveal Tech Stack';
            }
        });
    }

    // Education Button Logic
    const revealEduBtn = document.getElementById('reveal-edu-btn');
    const educationList = document.getElementById('education-list');

    if (revealEduBtn && educationList) {
        revealEduBtn.addEventListener('click', () => {
            if (educationList.style.display === 'none' || educationList.style.display === '') {
                educationList.style.display = 'block';
                revealEduBtn.textContent = 'Hide Education';
            } else {
                educationList.style.display = 'none';
                revealEduBtn.textContent = 'Reveal Education';
            }
        });
    }

    // Scroll fade out for boy animation
    window.addEventListener('scroll', () => {
        const heroBoy = document.getElementById('hero-boy');
        if (heroBoy) {
            const scrollY = window.scrollY;
            // Fade out over the first 300px of scrolling
            const opacity = Math.max(0, 1 - (scrollY / 300));
            // Move up slightly while fading
            const translateY = scrollY * 0.3;
            
            heroBoy.style.opacity = opacity;
            heroBoy.style.transform = `translateY(-${translateY}px)`;
            
            // Pointer events none when invisible so it doesn't block clicks
            heroBoy.style.pointerEvents = opacity <= 0 ? 'none' : 'auto';
        }
    });

    // Add hover effect to interactive elements
    const interactables = document.querySelectorAll('a, button, .project-card, .cert-card, .hamburger');
    interactables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursor.style.backgroundColor = 'rgba(59, 130, 246, 0.1)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.backgroundColor = 'transparent';
        });
    });

    // Intersection Observer for cinematic scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                // Remove class so they animate beautifully every time you scroll past
                entry.target.classList.remove('show');
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden, .hidden-left, .hidden-right');
    hiddenElements.forEach(el => observer.observe(el));
});
