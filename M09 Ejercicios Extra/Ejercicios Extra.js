/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   /*var arreglo = Object.keys(objeto)
   var arreglo2 = Object.values(objeto)
   var x = []
   var y = []
   for (var i = 0; i < arreglo.length; i++){
      if(i==0){x.push(arreglo[i])
      }
      else y.push(arreglo[i]);
   }
    for (var i = 0; i < arreglo2.length; i++){
      if(i==0){x.push(arreglo2[i])
      }
      else y.push(arreglo2[i]);
   }
   return [x,y];/*/
   /*var array = [];
   for (var xy in objeto){
      array.push([xy,objeto[xy]])
   }
   return array;/*/
   return Object.entries(objeto);

}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var objeto={}
   var array = string.split("")
   var orden = array.sort()
   for (var i of orden){
      if(!objeto[i]){
         objeto[i] =1
      }
      else {
         objeto[i] += 1
      }

   }
   return objeto;

}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var array= string.split("")
   var mayúscula=[]
   var minúscula=[]
   for(var i of array){
      if(i===i.toLowerCase()){
         minúscula.push(i)
      }
      else{
         mayúscula.push(i)
   }
   }
   return mayúscula.join("")+minúscula.join("")
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var array = frase.split(" ")
   var arreglo = []
   for (var i of array){
      frase=i.split("")
      reversa=frase.reverse()
      union=reversa.join("")
      arreglo.push(union)
   }
   return arreglo.join(" ");
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var array = numero.toString()
   var separado = array.split("")
   var invertido = separado.reverse()
   var capicúa = invertido.join("")
   if (numero == capicúa){
      return "Es capicua";
   }
   else {
      return "No es capicua";
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var stringa= string.replace("a","");
   var stringb= stringa.replace("b","")
   var stringc= stringb.replace("c","")
   return stringc;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   return arrayOfStrings.sort(function(a,b){return a.length-b.length})
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var array3=[]
   for (var i of array1){
      for (var j of array2){
         if(i===j){
            array3.push(i)
         }
      }
   }
   return array3;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
