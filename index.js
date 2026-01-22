//create a loop that logs 20 bunnies with the name "Floofer #"
// where # is the bunneis number starting with "Floofer 1" and goes to "Floofer 20"
// we have to start with the number 1
// the loop has to spit out Floofer and the number 
// the loop should stop when it reaches 20, so it cannot be more than 20. less or equal to 20.
// one more should be added each time the loop runs (our afterthought)

for (let i = 1; i <=20; i++){
  console.log("Floofer" + i);
}

// create a while loop that prompts the user to guess a number.
// if they guess correctly, let them know they area winner
// if they guess incorrectly, tell them to try again
// the user needs to be prompted and needs an alert
// the while loop needs to keep running until they guess correctly. it will only stop when it returns true (needs to match and evaluate to true)


let correctNumber = 7;
let guess = null;

while (guess !== correctNumber) {
  guess = prompt("Guess a number!");
  guess = Number(guess);
  
  if (guess === correctNumber) {
    alert("You're a winner!");
  } else {
    alert("Try again!");
  }
}