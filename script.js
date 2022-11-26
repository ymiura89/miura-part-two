let name = prompt('Hey there, what is your name?');
let roundsOfGolf = prompt(`Nice to meet you, ${name}. Would you like to play 3 or 6 rounds of golf?`);

let userScore = 0;

for (let i = 0; i < roundsOfGolf; i++) {

  let roundScore = Number(prompt(`What was your score for hole ${i + 1}?`))
  userScore += roundScore;
}

let parScore = (userScore - (roundsOfGolf * 3));

if (parScore === 0) {
  console.log(`Good game, ${name}. Your total par was: 0`);
} else if (parScore < 0) {
  console.log(`Great job, ${name}! Your total par was: ${parScore}.`);
} else if (parScore > 0) {
  console.log(`Nice try, ${name}. Your total Par was: ${parScore}.`);
}

