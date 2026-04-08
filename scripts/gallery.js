// gallery.js - Gallery Slideshow with 10 images

// Gallery data - 10 foto customer
const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=600&fit=crop', caption: 'Bordir Logo Perusahaan - Hasil rapi dan detail' },
    { src: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&h=600&fit=crop', caption: 'Bordir Nama Seragam Karyawan - Tahan lama' },
    { src: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&h=600&fit=crop', caption: 'Bordir Jaket Komunitas Motor - Presisi tinggi' },
    { src: 'https://images.unsplash.com/photo-1581263518545-13a9e4c1d2f2?w=800&h=600&fit=crop', caption: 'Bordir Topi Promosi Brand - Hasil rapi pada permukaan melengkung' },
    { src: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=600&fit=crop', caption: 'Bordir Kaos Event Gathering - Tidak mudah rusak' },
    { src: 'https://images.unsplash.com/photo-1581318694546-0d6e8ee1f736?w=800&h=600&fit=crop', caption: 'Bordir Seragam Kantor Modern - Kualitas konsisten' },
    { src: 'https://images.unsplash.com/photo-1565084888279-aca0be0873e8?w=800&h=600&fit=crop', caption: 'Bordir Emblem Organisasi - Detail presisi' },
    { src: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=600&fit=crop', caption: 'Bordir Logo Brand Fashion - Warna akurat' },
    { src: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&h=600&fit=crop', caption: 'Bordir Jaket Sekolah - Hasil memuaskan' },
    { src: 'https://images.unsplash.com/photo-1581263518545-13a9e4c1d2f2?w=800&h=600&fit=crop', caption: 'Bordir Topi Komunitas - Desain custom' }
];

let currentGallerySlide = 0;
let galleryInterval;
let totalGallerySlides = galleryImages.length;

function initGallery() {
    const slideshowContainer = document.getElementById('gallery-slideshow');
    const dotsContainer = document.getElementById('gallery-dots');
    const thumbsContainer = document.getElementById('gallery-thumbnails');
    
    if (!slideshowContainer) return;
    
    // Clear containers
    slideshowContainer.innerHTML = '';
    if (dotsContainer) dotsContainer.innerHTML = '';
    if (thumbsContainer) thumbsContainer.innerHTML = '';
    
    // Create slides
    galleryImages.forEach((img, index) => {
        // Create slide
        const slide = document.createElement('div');
        slide.className = `gallery-slide ${index === 0 ? 'active' : ''}`;
        slide.innerHTML = `
            <img src="${img.src}" alt="${img.caption}" loading="lazy">
            <div class="gallery-slide-caption">
                <p>${img.caption}</p>
            </div>
        `;
        slideshowContainer.appendChild(slide);
        
        // Create dot
        if (dotsContainer) {
            const dot = document.createElement('div');
            dot.className = `gallery-dot ${index === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => goToGallerySlide(index));
            dotsContainer.appendChild(dot);
        }
        
        // Create thumbnail
        if (thumbsContainer) {
            const thumb = document.createElement('div');
            thumb.className = `gallery-thumb ${index === 0 ? 'active' : ''}`;
            thumb.innerHTML = `<img src="${img.src}" alt="${img.caption}">`;
            thumb.addEventListener('click', () => goToGallerySlide(index));
            thumbsContainer.appendChild(thumb);
        }
    });
    
    // Add event listeners to buttons
    const prevBtn = document.getElementById('gallery-prev-btn');
    const nextBtn = document.getElementById('gallery-next-btn');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            stopGalleryAutoSlide();
            goToGallerySlide(currentGallerySlide - 1);
            startGalleryAutoSlide();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            stopGalleryAutoSlide();
            goToGallerySlide(currentGallerySlide + 1);
            startGalleryAutoSlide();
        });
    }
    
    // Pause on hover
    const container = document.querySelector('.gallery-slideshow-container');
    if (container) {
        container.addEventListener('mouseenter', stopGalleryAutoSlide);
        container.addEventListener('mouseleave', startGalleryAutoSlide);
    }
    
    // Start auto slideshow
    startGalleryAutoSlide();
}

function goToGallerySlide(index) {
    const slides = document.querySelectorAll('.gallery-slide');
    const dots = document.querySelectorAll('.gallery-dot');
    const thumbs = document.querySelectorAll('.gallery-thumb');
    
    if (slides.length === 0) return;
    
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    
    currentGallerySlide = index;
    
    // Update slides
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentGallerySlide);
    });
    
    // Update dots
    if (dots.length) {
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentGallerySlide);
        });
    }
    
    // Update thumbnails
    if (thumbs.length) {
        thumbs.forEach((thumb, i) => {
            thumb.classList.toggle('active', i === currentGallerySlide);
        });
    }
}

function startGalleryAutoSlide() {
    if (galleryInterval) clearInterval(galleryInterval);
    galleryInterval = setInterval(() => {
        goToGallerySlide(currentGallerySlide + 1);
    }, 4000);
}

function stopGalleryAutoSlide() {
    if (galleryInterval) {
        clearInterval(galleryInterval);
        galleryInterval = null;
    }
}