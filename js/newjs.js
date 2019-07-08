var i = 0;
var images = [
    'img/bg-masthead.jpg',
    'img/padlocks.jpg',
    'img/armed.jpg',
   
];

function backgroundChanger() {
  if(i >= images.length){
    i = 0;
  }
  document.querySelector('.masthead').style.backgroundImage = 'linear-gradient(to bottom, rgba(92, 77, 66, 0.8) 0%, rgba(92, 77, 66, 0.8) 100%),url('  + images[i++] + ')';
  
}

setInterval( backgroundChanger, 4000);