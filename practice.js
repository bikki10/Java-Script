   // GUESS THE NUMBER //

// WAP in JS to generate a random number and store it in a variable.
// The program then takes an input from the user to tell them whether
// the guess was correct, greater or lesser than the original number.
// Guessing limit should be only 15

let generator = Math.round(Math.random()*100)+1;//Math.random generates a random number betn 0 and 1.
//Math.round returns a supplied nearest integer
let count = 0;
console.log(generator);

do{
  let user_input = prompt("What's your guess? ");
  user_input = Number.parseInt(user_input);

  let result = (user_input == generator) ? "\nHoly moly! You're goddamn right!\n"
  : (user_input > generator) ? "\nYour expectations are high!\n"
  : (user_input < generator) ? "\nYour expectations are low!\n"
  : "Invalid character!";

  console.log(result);
  count++;

  if(count>14){
    alert("Sorry, You have reached the limit for today!");
  };
  if(user_input == generator){
    count = 15;
}
}while(count<15);


