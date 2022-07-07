// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.

// Al click dell’utente sulle frecce verso sinistra o destra, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

// ## Milestone 2:
// Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso sinistra.


//Recupero l'elemento galleria dal DOM
const gallery = document.querySelector('#carousel-section .gallery');

//Creo l'array di oggetti che rappresentano ciascuna immagine

const images = [
    {
      url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
      title: 'Svezia',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
  
    {
      url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
      title: 'Perù',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
  
    {
      url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
      title: 'Chile',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
    {
      url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
      title: 'Argentina',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
    {
      url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
      title: 'Colombia',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
  ];

//Ciclo for per recuperare tutti gli url dall'array
let imageElement = '';
let imageText = '';

for(const image of images){
    imageElement += `<img src="${image.url}" alt="landscape"/>`;
    imageText +=  ` <div class="info">
                    <h2>${image.title}</h2>
                    <span>${image.description}</span>
                    </div>`
}

gallery.innerHTML = imageElement + imageText;

//Recupero dal DOM
const imagesDisplay = document.querySelectorAll('#carousel-section img');
const imagesDescription = document.querySelectorAll('#carousel-section .info');


//Variabile per indicare l'indice attivo
let currentActiveIndex = 0;

//Do la classe active alla prima immagine
imagesDisplay[currentActiveIndex].classList.add('active');
imagesDescription[currentActiveIndex].classList.add('active');



