// modals.js - Service modal and image modal for gallery

// ========== SERVICE MODAL ==========
const serviceModal = document.getElementById('service-modal');
const closeModal = document.getElementById('close-modal');

function openServiceModal(service, imgSrc) {
    const detail = serviceDetails[service];
    if (detail) {
        const title = currentLang === 'id' ? detail.title : detail.titleEn;
        const desc = currentLang === 'id' ? detail.desc : detail.descEn;

        document.getElementById('modal-content').innerHTML = `
            <img src="${imgSrc}" class="modal-service-img" alt="${title}">
            <h3 class="font-bold text-navy text-base mb-2 mt-3">${title}</h3>
            <p class="text-gray-600 text-xs mb-4 leading-relaxed">${desc}</p>
            <a href="#kontak" class="block bg-gold text-navy text-center py-2 rounded-lg font-semibold text-sm transition hover:bg-gold-light">Pesan Sekarang</a>
        `;
        serviceModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeServiceModal() {
    if (serviceModal) {
        serviceModal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

if (closeModal) {
    closeModal.addEventListener('click', closeServiceModal);
}

if (serviceModal) {
    serviceModal.addEventListener('click', (e) => {
        if (e.target === serviceModal) closeServiceModal();
    });
}

document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {
        const service = card.getAttribute('data-service');
        const imgSrc = card.querySelector('img').src;
        openServiceModal(service, imgSrc);
    });
});

// ========== IMAGE MODAL FOR GALLERY ==========
const imageModal = document.getElementById('image-modal');
const closeImageModal = document.getElementById('close-image-modal');
const modalImage = document.getElementById('modal-image');
const modalCaption = document.getElementById('modal-caption');

function openImageModal(src, caption) {
    if (modalImage) modalImage.src = src;
    if (modalCaption) modalCaption.textContent = caption;
    if (imageModal) {
        imageModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeImageModalFunc() {
    if (imageModal) {
        imageModal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

if (closeImageModal) {
    closeImageModal.addEventListener('click', closeImageModalFunc);
}

if (imageModal) {
    imageModal.addEventListener('click', (e) => {
        if (e.target === imageModal) closeImageModalFunc();
    });
}

window.openImageModal = openImageModal;