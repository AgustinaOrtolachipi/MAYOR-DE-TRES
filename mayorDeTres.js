"use strict";
//Desarrollar un algoritmo que dados tres numeros determine cual es el mayor de los tres
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var numeroMayor1 = rls.questionFloat("determinar primer numero: ");
var numeroMayor2 = rls.questionFloat("determinar segundo numero: ");
var numeroMayor3 = rls.questionFloat("determinar tercer numero: ");
if (numeroMayor1 >= numeroMayor2 && numeroMayor3) {
    console.log("el numero mas grande es ", numeroMayor1);
}
else if (numeroMayor2 > numeroMayor1 && numeroMayor2 > numeroMayor3) {
    console.log("el numero mas grande es ", numeroMayor2);
}
else if (numeroMayor3 > numeroMayor1 && numeroMayor3 > numeroMayor2) {
    console.log("el numero mas grande es ", numeroMayor3);
}
