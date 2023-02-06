/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   return(array[0])
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
}

function devolverUltimoElemento(array) {
   return(array[array.length-1])
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
}

function obtenerLargoDelArray(array) {
   x = array.length
   return (x)
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
}

function incrementarPorUno(array) {
   return array.map ((num)=> num + 1);
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
}

function agregarItemAlFinalDelArray(array, elemento) {
   array.push(elemento)
   return array ;
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
}

function agregarItemAlComienzoDelArray(array, elemento) {
   array.unshift(elemento)
   return array;
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
}

function dePalabrasAFrase(palabras) {
   x=palabras.join(" ")
   return x;
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
}

function arrayContiene(array, elemento) {
   
   var y = array.find((z) => z === elemento)
   if(y) return true;
   else return false;
   
   
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar True si está, o False si no está.
   // Tu código:
}

function agregarNumeros(arrayOfNums) {
   var x = arrayOfNums.reduce((z,y)=> z+y);
   return x;
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var x = 0

   for (var i of resultadosTest ){
      
      x = x + i
   }

   var y= x/(resultadosTest.length);

   return y;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var x =0;

   for ( var i of arrayOfNums){
      if (x < i) x = i;
   }
   return x;

}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   let x = 1
   if(arguments.length == 0)
   return 0;
   else if(arguments.length == 1)
   return arguments[0]
   else{
      for(let i = 0; i < arguments.length; i++){
      x = x * arguments[i]}
      return x;
   }
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var x = array.filter((x)=> x > 18)
   return x.length;
}

function diaDeLaSemana(numeroDeDia) {
  if ( numeroDeDia === 2 || numeroDeDia === 3 || numeroDeDia === 4 || numeroDeDia === 5 || numeroDeDia === 6){
   return "Es dia laboral"
  }
  else
  return "Es fin de semana"
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
}

function empiezaConNueve(num) {

   var x = num.toString();
   var y = x.charAt(0);
   
   if (y === "9"){
      return true;
   }
   else 
   return false;
   
   // Esta función recibe por parámetro un número.
   // Debe retornar True si el entero inicia con 9 y False en otro caso.
   // Tu código:
}

function todosIguales(array) { 
   for (var i= 1 ; i < array.length; i++){
      if (array[0] === array[i]){
         return true;}
      else 
      return false; 
   } 
  
   // Si todos los elementos del arreglo son iguales, retornar True.
   // Caso contrario retornar False.
   // Tu código:
}

function mesesDelAño(array) {
   var j = [];
   for (var i = 0 ; i < array.length; i++){
      if ( array[i] === "Enero"||array[i] === "Marzo"||array[i] === "Noviembre"){
         j.push(array[i])}
      else if ( j.length === 3)
      return j;
      }
      return "No se encontraron los meses pedidos"
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
}

function tablaDelSeis() {
   var z = []
   var t = [0,1,2,3,4,5,6,7,8,9,10]
   for(var i=0; i < t.length; i++){
      z.push(t[i]*6)
   }
   return z;
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
}

function mayorACien(array) {
   var f = [];
   for(var i = 0; i < array.length; i++){
      if (array[i] > 100){
         f.push(array[i])}
   }
   return f;
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   var z = []
   var y = num
   for (var i = 0; i < 10 ; i++){
      y = y + 2
      if ( y === i){
         break;
      }
      else {
         z.push(y);}
   }
   if ( z.length < 10){
      return "Se interrumpió la ejecución";
   }
   else 
   return z;
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
}

function continueStatement(num) {
   var z = []
   var y = num
   for (var i = 0; i < 9 ; i++){
      y = y + 2

      z.push(y)
   }
   return z;
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
