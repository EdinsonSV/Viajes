const contenedordecard = document.querySelector('.contenedordecard');

const datos = [
    {
    imagen: 'https://www.ytuqueplanes.com/imagenes/fotos/regiones/RC-CARD-Tumbes.jpg',
    nombre: 'Tumbes',
    descripcion: 'Hola Mundo',
    enlace: '#',
    },
    {
    imagen: 'https://www.ytuqueplanes.com/imagenes/fotos/regiones/RC-CARD-Piura.jpg',
    nombre: 'Piura',
    descripcion: 'Hola Mundo',
    enlace: '#',
    },
    {
    imagen:'https://www.ytuqueplanes.com/imagenes/fotos/regiones/RC-CARD-Lambayeque.jpg',
    nombre:'Lambayeque',
    descripcion: 'Hola Mundo',
    enlace: '#',
    },
    {
    imagen:'https://www.ytuqueplanes.com/imagenes/fotos/regiones/RC-CARD-La-Libertad.jpg',
    nombre:'La Libertad',
    descripcion: 'Hola Mundo',
    enlace: '#',
    },
    {
    imagen:'https://www.ytuqueplanes.com/imagenes/fotos/regiones/RC-CARD-Lima.jpg',
    nombre:'Lima',
    descripcion: 'Hola Mundo',
    enlace: '#',
    },
    {
    imagen:'https://www.ytuqueplanes.com/imagenes/fotos/destinos/CARD-CALLAO.jpg',
    nombre:'Callao',
    descripcion: 'Hola Mundo',
    enlace: '#',
    },
    {
    imagen:'https://www.ytuqueplanes.com/imagenes/fotos/regiones/RC-CARD-Ica.jpg',
    nombre:'Ica',
    descripcion: 'Hola Mundo',
    enlace: '#',
    },
    {
    imagen:'https://www.ytuqueplanes.com/imagenes/fotos/regiones/RC-CARD-Moquegua.jpg',
    nombre:'Moquegua',
    descripcion: 'Hola Mundo',
    enlace: '#',
    },
    {
    imagen:'https://www.ytuqueplanes.com/imagenes/fotos/regiones/RC-CARD-Tacna.jpg',
    nombre:'Tacna',
    descripcion: 'Hola Mundo',
    enlace: '#',
    },
]

function gallerydinamica (imagen,nombre,descripcion,enlace){
    let card = document.createElement('div');
    card.classList.add('card');

    /* Card Front */
    let facefront = document.createElement('div');
    facefront.classList.add('face');
    facefront.classList.add('front');

    let imagencard = document.createElement('div');
    imagencard.classList.add('imagencard');

    let img = document.createElement('img');
    img.loading = 'lazy'
    img.src = imagen;

    let textcard = document.createElement('div');
    textcard.classList.add('textcard');

    let h2 = document.createElement('h2');
    h2.innerHTML = nombre;

    /* Card Back */
    let faceback = document.createElement('div');
    faceback.classList.add('face');
    faceback.classList.add('back');

    let h22 = document.createElement('h2');
    h22.innerHTML = nombre;

    let p = document.createElement('p');
    p.innerHTML = descripcion;

    let link = document.createElement('div');
    link.classList.add('link');

    let a = document.createElement('a');
    a.innerHTML = 'Ver más'
    a.href = enlace;


    card.appendChild(facefront);

    facefront.appendChild(imagencard);
    imagencard.appendChild(img);
    facefront.appendChild(textcard);
    textcard.appendChild(h2);

    card.appendChild(faceback);

    faceback.appendChild(h22);
    faceback.appendChild(p);
    faceback.appendChild(link);
    link.appendChild(a);


    contenedordecard.appendChild(card);
}

datos.forEach(({imagen,nombre,descripcion,enlace}) => gallerydinamica(imagen,nombre,descripcion,enlace));
