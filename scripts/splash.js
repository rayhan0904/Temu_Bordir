// splash.js - Splash screen logic

// Current language (default Indonesia)
let currentLang = 'id';

// ========== SPLASH SCREEN (2.5 DETIK) ==========
const splashScreen = document.getElementById('splash-screen');
const mainContent = document.getElementById('main-content');

if (splashScreen && mainContent) {
    setTimeout(() => {
        splashScreen.classList.add('fade-out');
        setTimeout(() => {
            splashScreen.style.display = 'none';
            mainContent.style.display = 'block';
            document.body.style.overflow = 'auto';
            if (typeof AOS !== 'undefined') {
                AOS.refresh();
            }
            startCounters();
            initGallery();
            initTestimonialSlider();
        }, 800);
    }, 2500);
}