// get DOM elements
const advice = document.getElementById('advice');
const adviceId = document.getElementById('advice-num');
const newAdviceBtn = document.getElementById('dice-div');

// generates random advice
function randomAdvice() {
    fetch(`https://api.adviceslip.com/advice`)
    .then( (res) => res.json())
    .then( data => {
        advice.innerHTML = `"${data.slip.advice}"`;
        adviceId.innerHTML = `ADVICE #${data.slip.id}`;
    })
    .catch( () => { alert('Advice not found.'); } );
}

// button click will generate and display random advice
newAdviceBtn.addEventListener('click', randomAdvice);
