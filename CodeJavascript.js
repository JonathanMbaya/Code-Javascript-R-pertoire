// Trouver le mot le plus long

function MotLePlusLong(str){
  let splitStr = str.split(' ');
  let array = [];

  for(let i = 0; i < splitStr.length; i++){
    array.push(splitStr[i].length);
  }

console.log(Math.max(...array));

}

let string = "Le mot le plus long c'est anticonstitutionnellement";
MotLePlusLong(string);

// Mettre toutes les premières lettres au majuscule

function LetterCapitalize(str) {
  let mot = str.toLowerCase().split(' ');

  let array = [];

  mot.forEach(word =>{
    let PremierLettre = word.charAt(0).toUpperCase();

    let remplace = word.replace(word.charAt(0), PremierLettre);

    array.push(remplace);

  });
console.log(array.join(' '));

  return str;

}
   LetterCapitalize("Je suis bien avec le Javascript");

console.log(LetterCapitalize(readline()));
