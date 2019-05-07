/*
Creating a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice. Use the html and css code included in the starter code folder to get started.

1) Write down pseudocode for the following program.

2) Follow the steps below to write your code.



* generate a random number between 1 - 6 and store to a variable, random1 (remember Math.random)


* generate a random number between 1 - 6 and store to a variable, random2

* combine 'dice-' and random1 to form the random class for the first die, firstDie (the styles.css file will give you a clue)
* combine 'dice-' and random2 to form the random class for the second die, secondDie

* get the first die by ID and update the class to firstDie (hint: document.getElementById)
* get the first die by ID and update the class to secondDie (hint:document.getElementById)

3) Check to see if the Dice Roll has been hit, if it has run the diceRoll function.
*/

document.getElementById('roll-dice').onclick = diceRoll

function diceRoll(){

  let random1 =  Math.floor((Math.random() * 6) + 1)
 

  let random2 =  Math.floor((Math.random() * 6) + 1)

  let firstDie = `dice-${random1}`
  let secondDie = `dice-${random2}`

  console.log(`dice-${random1} and dice-${random2}`)

  document.getElementById('first-die').className = firstDie
  document.getElementById('second-die').className = secondDie






}

/* 

function getDie(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
};
let random1 = getDie(1, 6);

getDie()

let ${'dice-' + random1



function getDie(newDie) {
  var elem = document.getElementById('die');
  elem.style.color = newDie;
}

<button onclick="changeColor('blue');">blue</button>

*/