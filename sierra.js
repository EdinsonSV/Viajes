const contenedordecard = document.querySelector('.contenedordecard');

const datos = [
    {
    imagen: 'https://www.ytuqueplanes.com/imagenes/fotos/regiones/RC-CARD-Cajamarca.jpg',
    nombre: 'Cajamarca',
    descripcion: 'Hola Mundo',
    enlace: '#',
    },
    {
    imagen: 'https://www.ytuqueplanes.com/imagenes/fotos/regiones/RC-CARD-Huanuco.jpg',
    nombre: 'Huanuco',
    descripcion: 'Hola Mundo',
    enlace: '#',
    },
    {
    imagen:'https://www.ytuqueplanes.com/imagenes/fotos/regiones/RC-CARD-Pasco.jpg',
    nombre:'Pasco',
    descripcion: 'Hola Mundo',
    enlace: '#',
    },
    {
    imagen:'https://www.ytuqueplanes.com/imagenes/fotos/regiones/RC-CARD-Huancavelica.jpg',
    nombre:'Huancavelica',
    descripcion: 'Hola Mundo',
    enlace: '#',
    },
    {
    imagen:'https://www.ytuqueplanes.com/imagenes/fotos/regiones/RC-CARD-Junin.jpg',
    nombre:'Junín',
    descripcion: 'Hola Mundo',
    enlace: '#',
    },
    {
    imagen:'https://www.ytuqueplanes.com/imagenes/fotos/regiones/RC-CARD-Cusco.jpg',
    nombre:'Cusco',
    descripcion: 'Hola Mundo',
    enlace: '#',
    },
    {
    imagen:'https://www.ytuqueplanes.com/imagenes/fotos/regiones/RC-CARD-Apurimac.jpg',
    nombre:'Apurímac',
    descripcion: 'Hola Mundo',
    enlace: '#',
    },
    {
    imagen:'https://www.ytuqueplanes.com/imagenes/fotos/regiones/RC-CARD-Puno.jpg',
    nombre:'Puno',
    descripcion: 'Hola Mundo',
    enlace: '#',
    },
    {
    imagen:'https://www.ytuqueplanes.com/imagenes/fotos/regiones/RC-CARD-Ayacucho.jpg',
    nombre:'Ayacucho',
    descripcion: 'Hola Mundo',
    enlace: '#',
    },
    {
    imagen:'https://www.ytuqueplanes.com/imagenes/fotos/regiones/RC-CARD-Arequipa.jpg',
    nombre:'Arequipa',
    descripcion: 'Hola Mundo',
    enlace: '#',
    },
    {
    imagen:'https://www.ytuqueplanes.com/imagenes/fotos/regiones/ancash-card.jpg',
    nombre:'Áncash',
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
