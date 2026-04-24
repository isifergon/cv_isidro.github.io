const projectImages = {
    'piso': [
        'mis_trabajos/DISEÑO/3d/3DMAX/piso/Piso_01.jpg',
        'mis_trabajos/DISEÑO/3d/3DMAX/piso/Piso_02.jpg',
        'mis_trabajos/DISEÑO/3d/3DMAX/piso/Piso_03.jpg',
        'mis_trabajos/DISEÑO/3d/3DMAX/piso/Piso_04.jpg',
        'mis_trabajos/DISEÑO/3d/3DMAX/piso/Piso_05.jpg',
        'mis_trabajos/DISEÑO/3d/3DMAX/piso/Piso_06.jpg'
    ],
    'turbomail': [
        'mis_trabajos/DISEÑO/3d/blender/TURBOMAIL/img/the_postman_01.png',
        'mis_trabajos/DISEÑO/3d/blender/TURBOMAIL/img/the_postman_02.png',
        'mis_trabajos/DISEÑO/3d/blender/TURBOMAIL/img/the_postman_03.png',
        'mis_trabajos/DISEÑO/3d/blender/TURBOMAIL/img/the_postman_04.png',
        'mis_trabajos/DISEÑO/3d/blender/TURBOMAIL/img/the_postman_05.png',
        'mis_trabajos/DISEÑO/3d/blender/TURBOMAIL/img/the_postman_06.png'
    ]
};

const categoryImages = {
    'carteleria': [
        'mis_trabajos/DISEÑO/cartelería/2009_B_San Juan y San Pedro.jpg',
        'mis_trabajos/DISEÑO/cartelería/CARBONO14.jpg',
        'mis_trabajos/DISEÑO/cartelería/Old String.jpg',
        'mis_trabajos/DISEÑO/cartelería/warhamer1.jpg',
        'mis_trabajos/DISEÑO/cartelería/98ms2.jpg',
        'mis_trabajos/DISEÑO/cartelería/cartel Mérida_2024.jpg'
    ],
    '3d': [
        'mis_trabajos/DISEÑO/3d/3DMAX/piso/Piso_01.jpg',
        'mis_trabajos/DISEÑO/3d/3DMAX/piso/Piso_02.jpg',
        'mis_trabajos/DISEÑO/3d/3DMAX/piso/Piso_03.jpg',
        'mis_trabajos/DISEÑO/3d/3DMAX/piso/Piso_04.jpg',
        'mis_trabajos/DISEÑO/3d/3DMAX/piso/Piso_05.jpg',
        'mis_trabajos/DISEÑO/3d/3DMAX/piso/Piso_06.jpg'
    ],
    'ia-diseños': [
        'mis_trabajos/IA/diseños/skate/skate_01.png',
        'mis_trabajos/IA/diseños/skate/skate_02.png',
        'mis_trabajos/IA/diseños/skate/skate_03.png',
        'mis_trabajos/IA/diseños/chip/chip_01.png',
        'mis_trabajos/IA/diseños/chip/chip_02.png',
        'mis_trabajos/IA/diseños/halloween/halloween_01.jpg'
    ],
    'boda': [
        'mis_trabajos/IA/boda/boda_1/Boda_01.png',
        'mis_trabajos/IA/boda/boda_1/Boda_02.png',
        'mis_trabajos/IA/boda/boda_1/Boda_03.png',
        'mis_trabajos/IA/boda/boda_1/Boda_04.png',
        'mis_trabajos/IA/boda/boda_2/pixar_01.png',
        'mis_trabajos/IA/boda/boda_2/pixar_02.png'
    ]
};

const categoryTitles = {
    'carteleria': 'Cartelería',
    '3d': 'Visualización 3D',
    'ia-diseños': 'IA Diseños',
    'boda': 'Storytelling IA'
};

function openProjectModal(event, category) {
    event.preventDefault();
    const container = document.getElementById('projectModalImages');
    const title = document.getElementById('projectModalTitle');
    container.innerHTML = '';
    title.textContent = category === 'piso' ? 'Visualización Arquitectónica' : 'The Postman';

    projectImages[category].forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        container.appendChild(img);
    });
    document.getElementById('projectModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    document.getElementById('projectModal').style.display = 'none';
    document.body.style.overflow = '';
}

function openCategoryModal(category) {
    const container = document.getElementById('galleryModalImages');
    const title = document.getElementById('galleryModalTitle');
    container.innerHTML = '';
    title.textContent = categoryTitles[category] || 'Galería';

    categoryImages[category].forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        container.appendChild(img);
    });
    document.getElementById('galleryModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeGalleryModal() {
    document.getElementById('galleryModal').style.display = 'none';
    document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProjectModal();
        closeGalleryModal();
    }
});

document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeProjectModal();
            closeGalleryModal();
        }
    });
});

// Contact form accordion
function toggleContactForm() {
    const wrapper = document.getElementById('contactFormWrapper');
    wrapper.classList.toggle('open');
}

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    // Get form values
    const nombre = formData.get('nombre');
    const email = formData.get('email');
    const asunto = formData.get('asunto');
    const mensaje = formData.get('mensaje');

    // Create mailto link
    const subject = encodeURIComponent(asunto);
    const body = encodeURIComponent(`Nombre: ${nombre}\nEmail: ${email}\n\n${mensaje}`);
    window.location.href = `mailto:contacto@isidrofernandez.com?subject=${subject}&body=${body}`;

    // Reset form
    form.reset();
}

// Scroll reveal
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => revealObserver.observe(el));