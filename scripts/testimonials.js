// testimonials.js - Testimonial slider

// ========== TESTIMONIAL SLIDER ==========
let currentSlide = 0;
let slideInterval;
let totalSlides;

function initTestimonialSlider() {
    const slider = document.getElementById('testimonials-slider');
    const dotsContainer = document.getElementById('slider-dots');
    if (!slider) return;

    slider.innerHTML = '';

    testimonials.forEach((testi, index) => {
        const stars = '★'.repeat(testi.rating) + '☆'.repeat(5 - testi.rating);
        const testimonialCard = document.createElement('div');
        testimonialCard.className = 'testimonial-card';
        testimonialCard.innerHTML = `
            <div class="testimonial-stars">
                ${Array(testi.rating).fill('<i class="fas fa-star"></i>').join('')}
            </div>
            <p class="testimonial-text">${testi.text}</p>
            <div class="testimonial-author">
                <div class="testimonial-avatar">${testi.avatar}</div>
                <div>
                    <p class="testimonial-name">${testi.name}</p>
                    <p class="testimonial-role">${testi.role}</p>
                </div>
            </div>
        `;
        slider.appendChild(testimonialCard);
    });

    const slides = document.querySelectorAll('.testimonial-card');
    totalSlides = Math.ceil(slides.length / getSlidesPerView());

    // Create dots
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }

    updateSlider();
    startAutoSlide();

    // Add event listeners to buttons
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    if (prevBtn) prevBtn.addEventListener('click', () => {
        stopAutoSlide();
        goToSlide(currentSlide - 1);
        startAutoSlide();
    });

    if (nextBtn) nextBtn.addEventListener('click', () => {
        stopAutoSlide();
        goToSlide(currentSlide + 1);
        startAutoSlide();
    });

    // Pause on hover
    const container = document.querySelector('.testimonials-slider-container');
    if (container) {
        container.addEventListener('mouseenter', stopAutoSlide);
        container.addEventListener('mouseleave', startAutoSlide);
    }
}

function getSlidesPerView() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
}

function updateSlider() {
    const slides = document.querySelectorAll('.testimonial-card');
    const slidesPerView = getSlidesPerView();
    const slideWidth = slides[0]?.offsetWidth + 20 || 0;
    const newTransform = -currentSlide * (slideWidth * slidesPerView);

    const slider = document.getElementById('testimonials-slider');
    if (slider) {
        slider.style.transform = `translateX(${newTransform}px)`;
    }

    // Update dots
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.testimonial-card');
    const slidesPerView = getSlidesPerView();
    const maxSlide = Math.ceil(slides.length / slidesPerView) - 1;

    if (index < 0) index = maxSlide;
    if (index > maxSlide) index = 0;

    currentSlide = index;
    updateSlider();
}

function startAutoSlide() {
    if (slideInterval) clearInterval(slideInterval);
    slideInterval = setInterval(() => {
        goToSlide(currentSlide + 1);
    }, 5000);
}

function stopAutoSlide() {
    if (slideInterval) {
        clearInterval(slideInterval);
        slideInterval = null;
    }
}

// Handle window resize
window.addEventListener('resize', () => {
    updateSlider();
    const slides = document.querySelectorAll('.testimonial-card');
    const newTotalSlides = Math.ceil(slides.length / getSlidesPerView());
    if (newTotalSlides !== totalSlides) {
        totalSlides = newTotalSlides;
        const dotsContainer = document.getElementById('slider-dots');
        if (dotsContainer) {
            dotsContainer.innerHTML = '';
            for (let i = 0; i < totalSlides; i++) {
                const dot = document.createElement('div');
                dot.className = 'dot';
                dot.addEventListener('click', () => goToSlide(i));
                dotsContainer.appendChild(dot);
            }
        }
        if (currentSlide >= totalSlides) currentSlide = totalSlides - 1;
        updateSlider();
    }
});
