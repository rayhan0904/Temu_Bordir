// language.js - Language selector, translations, and setLanguage

// ========== LANGUAGE SELECTOR ==========
const langBtn = document.getElementById('lang-btn');
const langDropdown = document.getElementById('lang-dropdown');

if (langBtn) {
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (langDropdown) langDropdown.classList.toggle('hidden');
    });

    document.addEventListener('click', () => {
        if (langDropdown) langDropdown.classList.add('hidden');
    });
}

// Translations
const translations = {
    id: {
        'nav-home': 'Beranda',
        'nav-services': 'Layanan',
        'nav-about': 'Tentang',
        'nav-gallery': 'Galeri',
        'nav-contact': 'Kontak',
        'hero-title1': 'Bordir Berkualitas',
        'hero-title2': 'Tinggi',
        'hero-desc': 'Solusi bordir profesional untuk logo, nama, emblem, seragam, kaos, polo shirt, jaket, topi, dan berbagai kebutuhan lainnya. Hasil rapi, detail, dan tahan lama.',
        'hero-btn1': 'Lihat Layanan',
        'hero-btn2': 'Konsultasi Gratis',
        'services-subtitle': 'Our Services',
        'services-title': 'Layanan Bordir Kami',
        'service-logo': 'Bordir Logo',
        'service-logo-desc': 'Logo perusahaan',
        'service-name': 'Bordir Nama',
        'service-name-desc': 'Nama custom',
        'service-emblem': 'Bordir Emblem',
        'service-emblem-desc': 'Emblem khas',
        'service-uniform': 'Bordir Seragam',
        'service-uniform-desc': 'Seragam kantor',
        'service-tshirt': 'Bordir Kaos',
        'service-tshirt-desc': 'Kaos distro',
        'service-polo': 'Bordir Polo',
        'service-polo-desc': 'Polo shirt',
        'service-jacket': 'Bordir Jaket',
        'service-jacket-desc': 'Jaket almamater',
        'service-hat': 'Bordir Topi',
        'service-hat-desc': 'Topi custom',
        'about-subtitle': 'About Us',
        'about-title': 'Tentang Temu Bordir',
        'about-desc1': 'Temu Bordir hadir sejak 2015 sebagai penyedia jasa bordir profesional di Indonesia. Kami mengkhususkan diri pada bordir komputer dengan hasil rapi, detail, dan tahan lama.',
        'about-desc2': 'Didukung mesin bordir modern dan tim ahli berpengalaman, kami melayani berbagai kebutuhan bordir berkualitas terbaik.',
        'vision-title': 'Visi',
        'vision-text': 'Mitra terpercaya bordir berkualitas tinggi di Indonesia.',
        'mission-title': 'Misi',
        'mission1': 'Hasil bordir berkualitas',
        'mission2': 'Kepuasan pelanggan',
        'mission3': 'Inovasi teknologi bordir',
        'mission4': 'Harga terjangkau',
        'gallery-subtitle': 'Portfolio',
        'gallery-title': 'Galeri Hasil Bordir Customer',
        'gallery-desc': 'Kumpulan hasil karya bordir dari customer kami',
        'testimonials-title': 'Apa Kata Pelanggan Kami?',
        'contact-subtitle': 'Get In Touch',
        'contact-title': 'Hubungi Kami',
        'contact-desc': 'Hubungi kami untuk konsultasi gratis dan pemesanan bordir',
        'info-title': 'Informasi',
        'info-address': 'Alamat',
        'info-phone': 'Telepon',
        'info-email': 'Email',
        'info-hours': 'Jam Operasional',
        'social-title': 'Ikuti Kami di Sosial Media',
        'footer-home': 'Beranda',
        'footer-services': 'Layanan',
        'footer-about': 'Tentang',
        'footer-gallery': 'Galeri',
        'footer-contact': 'Kontak'
    },
    en: {
        'nav-home': 'Home',
        'nav-services': 'Services',
        'nav-about': 'About',
        'nav-gallery': 'Gallery',
        'nav-contact': 'Contact',
        'hero-title1': 'Quality',
        'hero-title2': 'Embroidery',
        'hero-desc': 'Professional embroidery solutions for logos, names, emblems, uniforms, t-shirts, polo shirts, jackets, hats, and more. Neat, detailed, and durable results.',
        'hero-btn1': 'View Services',
        'hero-btn2': 'Free Consultation',
        'services-subtitle': 'Our Services',
        'services-title': 'Our Embroidery Services',
        'service-logo': 'Logo Embroidery',
        'service-logo-desc': 'Company logo',
        'service-name': 'Name Embroidery',
        'service-name-desc': 'Custom name',
        'service-emblem': 'Emblem Embroidery',
        'service-emblem-desc': 'Unique emblem',
        'service-uniform': 'Uniform Embroidery',
        'service-uniform-desc': 'Office uniform',
        'service-tshirt': 'T-Shirt Embroidery',
        'service-tshirt-desc': 'Distro t-shirt',
        'service-polo': 'Polo Embroidery',
        'service-polo-desc': 'Polo shirt',
        'service-jacket': 'Jacket Embroidery',
        'service-jacket-desc': 'Alma mater jacket',
        'service-hat': 'Hat Embroidery',
        'service-hat-desc': 'Custom hat',
        'about-subtitle': 'About Us',
        'about-title': 'About Temu Bordir',
        'about-desc1': 'Temu Bordir has been present since 2015 as a professional embroidery service provider in Indonesia. We specialize in computerized embroidery with neat, detailed, and durable results.',
        'about-desc2': 'Supported by modern embroidery machines and an experienced team, we serve various embroidery needs with the best quality.',
        'vision-title': 'Vision',
        'vision-text': 'Trusted partner for high-quality embroidery in Indonesia.',
        'mission-title': 'Mission',
        'mission1': 'Quality embroidery',
        'mission2': 'Customer satisfaction',
        'mission3': 'Innovation',
        'mission4': 'Affordable price',
        'gallery-subtitle': 'Portfolio',
        'gallery-title': 'Customer Embroidery Gallery',
        'gallery-desc': 'Collection of embroidery works from our customers',
        'testimonials-title': 'What Our Customers Say?',
        'contact-subtitle': 'Get In Touch',
        'contact-title': 'Contact Us',
        'contact-desc': 'Contact us for free consultation and embroidery orders',
        'info-title': 'Information',
        'info-address': 'Address',
        'info-phone': 'Phone',
        'info-email': 'Email',
        'info-hours': 'Business Hours',
        'social-title': 'Follow Us on Social Media',
        'footer-home': 'Home',
        'footer-services': 'Services',
        'footer-about': 'About',
        'footer-gallery': 'Gallery',
        'footer-contact': 'Contact'
    }
};

function setLanguage(lang) {
    currentLang = lang;
    const langSpan = document.getElementById('current-lang');
    if (langSpan) langSpan.textContent = lang.toUpperCase();

    const texts = translations[lang];
    for (const [key, value] of Object.entries(texts)) {
        const elements = document.querySelectorAll(`[data-key="${key}"]`);
        elements.forEach(el => {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = value;
            } else {
                el.textContent = value;
            }
        });
    }

    localStorage.setItem('preferredLanguage', lang);
    if (langDropdown) langDropdown.classList.add('hidden');
}

const langOptions = document.querySelectorAll('.lang-option');
langOptions.forEach(option => {
    option.addEventListener('click', (e) => {
        e.stopPropagation();
        setLanguage(option.getAttribute('data-lang'));
    });
});

const mobileLangOptions = document.querySelectorAll('.mobile-lang-option');
mobileLangOptions.forEach(option => {
    option.addEventListener('click', () => {
        setLanguage(option.getAttribute('data-lang'));
        if (mobileMenu) mobileMenu.classList.add('hidden');
    });
});

const savedLang = localStorage.getItem('preferredLanguage');
setLanguage(savedLang === 'en' ? 'en' : 'id');
