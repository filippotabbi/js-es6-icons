
  $(document).ready(function () {
    // ESERCIZIO JS SNACK 1
 const bici = [
   {
     name : 'atala',
     peso : 12
   },
   {
     name : 'bianchi',
     peso : 7
   },
   {
     name : 'scott',
     peso : 5
   },
   {
     name : 'bianchi',
     peso : 7
   },
   {
     name : 'bianchi',
     peso : 7
   },
   {
     name : 'bianchi',
     peso : 7
   },
   {
     name : 'bianchi',
     peso : 7
   },
 ];

 let bicileggera = bici[0];
 bici.forEach((bici) => {
   if ( bici.peso < bicileggera.peso) {
     bicileggera = bici;
   }
 });

 console.log(bicileggera);

//  SNACK 2 PRIMO METODO : Slice
// DEL MIO ARRAY VOGLIO SOLO I NUMERI TRA 3 E 7
 const num = [1, 2, 3, 4 , 5, 6, 7, 8, 9,];

  let numsliced = num.slice(2, 7);

  console.log(num);      // [1, 2, 3, 4 , 5, 6, 7, 8, 9,];
  console.log(numsliced); //
//  SNACK 2 SECONDO METODO : forEach
// DEL MIO ARRAY VOGLIO SOLO I NUMERI TRA 3 E 7

 let a = num[2];
 let b = num[7];
const nuovinum = [];
num.forEach((numero, index, num) => {

if (numero < b) {
  if ((a - 1) < numero) {
    nuovinum.push(numero)
  }
}

});
console.log(nuovinum);










});
