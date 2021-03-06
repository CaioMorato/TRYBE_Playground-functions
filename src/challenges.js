// Desafio 1
const compareTrue = (bool, boolean) => ((bool && boolean) === true ? true : false);

// Desafio 2
const calcArea = (base, height) => (base * height) / 2;

// Desafio 3
const splitSentence = (stringToSplit) => stringToSplit.split(' ');

// Desafio 4
const concatName = (arrayComNomes) => `${arrayComNomes[arrayComNomes.length - 1]}, ${arrayComNomes[0]}`;

// Desafio 5
const footballPoints = (wins, ties) => wins * 3 + ties;

// Desafio 6
const highestCount = (mostRepeated) => {
  const higher = Math.max(...mostRepeated);

  let count = 0;
  for (let score of mostRepeated) {
    if (score === higher) {
      count += 1;
    }
  }
  return count;
};

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // Calculate the distance between each cat and the mouse
  let cat1Wins = cat1 - mouse;
  let cat2Wins = cat2 - mouse;
  // Transform the distance into positive number, there's no negative distance
  cat1Wins < 0 ? (cat1Wins *= -1) : cat1Wins;
  cat2Wins < 0 ? (cat2Wins *= -1) : cat2Wins;
  // Conditional that returns who catches the mouse
  if (cat1Wins < cat2Wins) 'cat1';
  else if (cat2Wins < cat1Wins) 'cat2';
  else 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(fizzBuzzArray) {
  const newFizzBuzz = [];
  for (let checker of fizzBuzzArray) {
    if (checker % 3 === 0 && checker % 5 === 0) {
      newFizzBuzz.push('fizzbuzz');
    } else if (checker % 3 === 0) {
      newFizzBuzz.push('fizz');
    } else if (checker % 5 === 0) {
      newFizzBuzz.push('buzz');
    } else {
      newFizzBuzz.push('bug!');
    }
  }
  return newFizzBuzz;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(stringToEncode) {
  // A new array to put all characters inside of it
  let encodedString = [];
  // Code algorythm
  for (let index = 0; index < stringToEncode.length; index += 1) {
    if (stringToEncode[index] == 'a') {
      encodedString.push('1');
    } else if (stringToEncode[index] == 'e') {
      encodedString.push('2');
    } else if (stringToEncode[index] == 'i') {
      encodedString.push('3');
    } else if (stringToEncode[index] == 'o') {
      encodedString.push('4');
    } else if (stringToEncode[index] == 'u') {
      encodedString.push('5');
    } else {
      encodedString.push(stringToEncode[index]);
    }
    // Return the array but joining it without a comma
  }
  return encodedString.join('');
}

function decode(stringToDecode) {
  // A new array to put all characters inside of it
  let decodedString = [];
  // Decode algorythm

  for (let index = 0; index < stringToDecode.length; index += 1) {
    if (stringToDecode[index] == '1') {
      decodedString.push('a');
    } else if (stringToDecode[index] == '2') {
      decodedString.push('e');
    } else if (stringToDecode[index] == '3') {
      decodedString.push('i');
    } else if (stringToDecode[index] == '4') {
      decodedString.push('o');
    } else if (stringToDecode[index] == '5') {
      decodedString.push('u');
    } else {
      decodedString.push(stringToDecode[index]);
    }
    // Return the array but joining it without a comma
  }

  // Return the array but joining it without a comma
  return decodedString.join('');
}
console.log(decode('Th3s 3s 1n 2nc4d3ng t2st.'));

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
