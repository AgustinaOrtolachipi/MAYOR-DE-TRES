//Desarrollar un algoritmo que dados tres numeros determine cual es el mayor de los tres


import * as rls from 'readline-sync';

let numeroMayor1: number = rls.questionFloat("determinar primer numero: ");
let numeroMayor2: number = rls.questionFloat("determinar segundo numero: ");
let numeroMayor3: number = rls.questionFloat("determinar tercer numero: ");

if (numeroMayor1 >= numeroMayor2 && numeroMayor3) {console.log ("el numero mas grande es ", numeroMayor1);
} else if
    (numeroMayor2 > numeroMayor1 && numeroMayor2 > numeroMayor3) {console.log ("el numero mas grande es ",numeroMayor2);
} else if 
(numeroMayor3 > numeroMayor1 && numeroMayor3 > numeroMayor2) {console.log ("el numero mas grande es ", numeroMayor3);
}