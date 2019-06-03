'use strict';

var inputData = '1, -5.8 или 10, хотя 34 + -5.3 и 73';


/**
 * Найти min/max в произвольной строке
 * @param   {String} входные данные
 * @returns {{min:Number, max:Number}}  объект
 */
function getMinMax(string) {
let a = []; 
let newInput = string.replace(/[+-]?\d+(\.\d+)?/g, x => a.push(x));
a = a.map(parseFloat);
let min = a[0];
let max = min;
for (let i = 1; i < a.length; ++i) {
if (a[i] > max) max = a[i];
if (a[i] < min) min = a[i];
  }
  return {min, max};
}


console.log(getMinMax(inputData)); // ожидается [-5.8, 73]