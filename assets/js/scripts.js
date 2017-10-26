const valid = ['a', 's', 'd', 'f', 'g', 'h','j','k','l'];

function playSound(e) {
  const key = document.querySelector(`.key[data-key=${e.key}]`);
  const audio = document.querySelector(`audio[data-key=${e.key}]`);

  //console.log(key);
  if (!audio) return;
  audio.currentTime = 0; // rewind
  audio.play();

  key.classList.add('playing');
  /*
  setTimeout(function() {
    key.classList.remove('playing');
  }, 100);
  */
}

//console.log(keys);
function removeTransition(e) {
  //
  if (e.propertyName !== 'transform') return; // skip
  this.classList.remove('playing');
  //console.log(this);
};

const auto = document.getElementById('autoplay');
const rep = document.getElementById('inputtedKeys');



``
function autoPlay() {
  let letters = (rep.value !== "") ? rep.value : valid;
  let counter = 0;
  let interClicker = setInterval(letterClicker, 300);
  function letterClicker() {
    if(valid.indexOf(letters[counter]) !== -1){
      const key = document.querySelector(`.key[data-key=${letters[counter]}]`);
    }
    let event = new KeyboardEvent('keydown',{
        key: letters[counter],
        bubbles: true
    });
    
    window.dispatchEvent(event);
    counter++;

    if(counter == letters.length){
        clearInterval(interClicker);
    }
  }

}


auto.addEventListener('click', autoPlay);


const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
