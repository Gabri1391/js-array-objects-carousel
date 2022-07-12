// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.

// Al click dell’utente sulle frecce verso sinistra o destra, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

// ## Milestone 2:
// Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso sinistra.

//FUNCTION
const switchImage = () => {
  imagesDisplay[currentActiveIndex].classList.remove('active');
  imagesDescription[currentActiveIndex].classList.remove('active');
  thumbs[currentActiveIndex].classList.remove('active');

  currentActiveIndex++;

  if(currentActiveIndex === images.length){
      currentActiveIndex = 0;
  }
  

  imagesDisplay[currentActiveIndex].classList.add('active');
  imagesDescription[currentActiveIndex].classList.add('active');
  thumbs[currentActiveIndex].classList.add('active');

};

//Recupero l'elemento galleria dal DOM
const gallery = document.querySelector('#carousel-section .gallery');
const thumbnails = document.getElementById('thumbnails');

//Creo l'array di oggetti che rappresentano ciascuna immagine

const images = [
    {
      url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
      title: 'Svezia',
      description:
        'Il clima è continentale nordico e risente della presenza del mare solo nelle estreme regioni meridionali. Le estati sono brevi e temperate, gli inverni sono freddi e lunghi.',
    },
  
    {
      url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
      title: 'Perù',
      description:
        ' Il Perù è uno dei paesi più famosi e ambiti del Sud America, soprattutto grazie a Machu Picchu, il luogo che più lo rappresenta nell immaginario comune.',
    },
  
    {
      url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
      title: 'Chile',
      description:
        'il Paese sudamericano è custode di paesaggi e ambienti straordinariamente diversificati, che vanno dal più arido deserto del mondo alle dolci colline ricamate di vigneti, dai ghiacci perenni della Patagonia alle isole ricoperte di foreste.',
    },
    {
      url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
      title: 'Argentina',
      description:
        'in Argentina senza dubbio la natura occupa un posto rilevante: dalla cordigliera delle Ande ai laghi glaciali, passando per le distese di Pampa e le famose cascate di Iguazu, il Paese del tango è capace di offrire ai viaggiatori paesaggi straordinari.',
    },
    {
      url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
      title: 'Colombia',
      description:
        'La Colombia è una terra ricca di luoghi da sogno, spiagge da sogno e cittadine colorate tutte da visitare. La Colombia è una meta di viaggio straordinaria.',
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
thumbnails.innerHTML = imageElement;

//Recupero dal DOM
const imagesDisplay = document.querySelectorAll('#carousel-section img');
const imagesDescription = document.querySelectorAll('#carousel-section .info');


//Variabile per indicare l'indice attivo
let currentActiveIndex = 0;

//Do la classe active alla prima immagine e alla descrizione della immagine stessa
imagesDisplay[currentActiveIndex].classList.add('active');
imagesDescription[currentActiveIndex].classList.add('active');

//------------------------------------------------------------------------------//

const previous = document.getElementById('previous');
const next = document.getElementById('next');

//LOGICA BOTTONI
next.addEventListener('click', function(){
    imagesDisplay[currentActiveIndex].classList.remove('active');
    imagesDescription[currentActiveIndex].classList.remove('active');
    thumbs[currentActiveIndex].classList.remove('active');

    currentActiveIndex++;

    if(currentActiveIndex === images.length){
        currentActiveIndex = 0;
    }
    

    imagesDisplay[currentActiveIndex].classList.add('active');
    imagesDescription[currentActiveIndex].classList.add('active');
    thumbs[currentActiveIndex].classList.add('active');
})


previous.addEventListener('click', function(){
    imagesDisplay[currentActiveIndex].classList.remove('active');
    imagesDescription[currentActiveIndex].classList.remove('active');
    thumbs[currentActiveIndex].classList.remove('active');

    currentActiveIndex--;

   if(currentActiveIndex < 0){
    currentActiveIndex = images.length -1;
   }

    imagesDisplay[currentActiveIndex].classList.add('active');
    imagesDescription[currentActiveIndex].classList.add('active');
    thumbs[currentActiveIndex].classList.add('active');
})

//BONUS 1 

//Recupero le thumbs dal DOM
const thumbs = document.querySelectorAll('#thumbnails img');

thumbs[currentActiveIndex].classList.add('active');

//BONUS 2
setInterval(switchImage,2000);

thumbs.forEach((thumb,i) => {
  thumb.addEventListener('click',() => {
    imagesDisplay[currentActiveIndex].classList.remove('active');
    imagesDescription[currentActiveIndex].classList.remove('active');
    thumbs[currentActiveIndex].classList.remove('active');

    currentActiveIndex = i;

    imagesDisplay[currentActiveIndex].classList.add('active');
    imagesDescription[currentActiveIndex].classList.add('active');
    thumbs[currentActiveIndex].classList.add('active');

  });
});