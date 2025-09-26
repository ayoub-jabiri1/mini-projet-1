const prompt = require("prompt-sync")();

// 1: <-- Main Variables -->

let input1, input2, operation;
let history = [];

// 2: <-- Menu principal -->

console.log(`
        Ce programme calcule deux nombres de votre choix

Voici les opérations disponibles:

    -  Addition       : (1)
    -  Soustraction   : (2)
    -  Multiplication : (3)
    -  Division       : (4)
    -  Puissance      : (5)
    -  Racine carree  : (6)
    -  Factorielle    : (7)

    `);

// 3: <-- Start Functions -->

function start() {
  // Get inputs
  operation = prompt("Donnerle numéro d'opération: ");
  input1 = +prompt("Donne le premier numéro: ");

  if (operation !== "6" && operation !== "7") {
    input2 = +prompt("donne le deuxième numéro: ");
  }

  // Start operations
  doOperation();

  // End or continue the program
  endOrContinueTheProgram();
}

function addition() {
  let result = `${input1} + ${input2} = ${input1 + input2}`;
  addToHistory(result);

  console.log(result);
}

function soustraction() {
  let result = `${input1} - ${input2} = ${input1 - input2}`;
  addToHistory(result);

  console.log(result);
}

function division() {
  if (input2 == 0) {
    console.log("Tu ne peux pas diviser par 0");
    return;
  }
  let result = `${input1} / ${input2} = ${input1 / input2}`;
  addToHistory(result);

  console.log(result);
}

function multiplication() {
  let result = `${input1} * ${input2} = ${input1 * input2}`;
  addToHistory(result);

  console.log(result);
}

function puissance() {
  let result = `${input1} ^ ${input2} = ${Math.pow(input1, input2)}`;
  addToHistory(result);

  console.log(result);
}

function racineCarree() {
  let result = `La racine carrée de "${input1}": ${Math.sqrt(input1)}`;
  addToHistory(result);

  console.log(result);
}

function factorielle() {
  if (input1 < 0) {
    console.log("La factorielle n'est pas définie pour les nombres négatifs");
  } else if (input1 == 0 || input1 == 1) {
    console.log(`Le factorielle de "${input1}": 1`);
    addToHistory(`Le factorielle de "${input1}": 1`);
  } else {
    let arr = [];

    for (let i = 1; i <= input1; i++) {
      arr.push(i);
    }

    let result = `Le factorielle de "${input1}": ${arr.reduce(
      (p, c) => p * c,
      1
    )}`;

    addToHistory(result);

    console.log(result);
  }
}

function doOperation() {
  switch (operation) {
    case "1":
      addition();
      break;
    case "2":
      soustraction();
      break;
    case "3":
      multiplication();
      break;
    case "4":
      division();
      break;
    case "5":
      puissance();
      break;
    case "6":
      racineCarree();
      break;
    case "7":
      factorielle();
      break;
    default:
      console.log("L'opération n'existe pas, choisissez-en une autre!");
      start();
  }
}

function endOrContinueTheProgram() {
  console.log(`
Choisissez la prochaine action:

    - Taper (1) pour continuer.
    - Taper (2) pour pour afficher l'historique.
    - Taper autre chose pour terminer le programme.

    `);

  let response = prompt("la prochaine action: ");

  if (response == 1) {
    start();
  } else if (response == 2) {
    displayHistory();
  }
}

function addToHistory(his) {
  history.push(his);
}

function displayHistory() {
  console.log("Histoire: ");
  for (let [i, his] of history.entries()) {
    console.log(`   ${i + 1} => ${his}`);
  }

  endOrContinueTheProgram();
}

// 4: <-- Start the program -->

start();
