// Datos de proyectos
const projectsData = {
    project1: {
        title: "Diseño Digital",
        description: "Pagina web hecha en clase, donde se realizaron todas las bases del uso de JavaScript y CSS, jugando en conjunto para crear variaciones de las mismas.",
        images: [
            "img/Capture.PNG",
            "img/Capture2.PNG",
            "img/Capture3.PNG",
            "img/Capture4.PNG",
            "img/Capture5.PNG"
        ]
    },
    project2: {
        title: "Grupo Amigo",
        description: "Pagina web realizada en equipo, donde se presentaba una marca empresarial, esta misma fue revisada y aprobada por el cliente.",
        images: [
            "img/Capture6.PNG",
            "img/Capture65.PNG"
        ]
    },
    project3: {
        title: "Tsugoi",
        description: "Pagina web responsiva con una galeria de imagenes de productos de una empresa llamada Galeria Disperso, esta misma fue revisada y aprobada por el cliente, agregando cambios.",
        images: [
            "img/Capture7.PNG",
            "img/Capture8.PNG"
        ]
    },
    project4: {
        title: "Bitacora",
        description: "Pagina web responsiva hecha en clase, resumiendo varias de las herramientas del desarrollo web y como esto nos facilita el uso de la misma.",
        images: [
            "img/Capture9.PNG",
            "img/Capture10.PNG"
        ]
    },
    project5: {
        title: "Ferreteria",
        description: "Pagina web con base de datos para una ferreteria, para que pudiera mantener sus ingresos y egresos de sus productos al dia.",
        images: [
            "img/Imagen1.jpg",
            "img/Imagen2.jpg",
            "img/Imagen3.png"
        ]
    },
    project6: {
        title: "Base de datos con CRUD",
        description: "Pagina web con base de datos con CRUD para poder modificar la misma base de datos desde la pagina de administrador.",
        images: [
            "img/manualDucks/Manual de Usuario - DuckFactory_page-0002.jpg",
            "img/manualDucks/Manual de Usuario - DuckFactory_page-0003.jpg",
            "img/manualDucks/Manual de Usuario - DuckFactory_page-0004.jpg",
            "img/manualDucks/Manual de Usuario - DuckFactory_page-0005.jpg",
            "img/manualDucks/Manual de Usuario - DuckFactory_page-0006.jpg",
            "img/manualDucks/Manual de Usuario - DuckFactory_page-0007.jpg",
            "img/manualDucks/Manual de Usuario - DuckFactory_page-0008.jpg",
            "img/manualDucks/Manual de Usuario - DuckFactory_page-0009.jpg",
            "img/manualDucks/Manual de Usuario - DuckFactory_page-0010.jpg",
            "img/manualDucks/Manual de Usuario - DuckFactory_page-0011.jpg",
        ]
    }
};

// Mostrar el modal con el contenido adecuado para lenguajes
function showDetails(languageKey) {
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalImage = document.getElementById('modal-image');

    const language = languagesData[languageKey];
    modalTitle.textContent = language.title;
    modalDescription.textContent = language.description;
    modalImage.src = language.image;
    modalImage.style.display = 'block'; // Asegúrate de que la imagen esté visible

    document.getElementById('modal').style.display = 'flex';
}

function showProjectDetails(projectKey) {
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalImagesContainer = document.getElementById('modal-images');

    // Limpiar las imágenes anteriores
    modalImagesContainer.innerHTML = '';

    // Obtener los datos del proyecto
    const project = projectsData[projectKey];
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;

    // Agregar las imágenes al contenedor
    project.images.forEach(imageSrc => {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.style.width = "100%"; // Ajustar el tamaño según sea necesario
        modalImagesContainer.appendChild(img);
    });

    // Mostrar el modal
    document.getElementById('modal').style.display = 'flex';
}

// Cerrar el modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}