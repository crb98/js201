/*
 * This is index.js
 *
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

function id() {
  return "UP2267061";
}

function fn() {
  return 'Connie';
}

function sn() {
  return 'Busby';
}

function add(a, b) {
  return a + b;
}

function subtract(a ,b) {
  return a - b;
}

function checkObject(obj) {
  obj.checked = true;
}

function checkObjectInside(obj) {
  if (typeof obj.data === 'object' && obj.data !== null) {
    obj.data.checked = true;
  }
}

function arraySet(arr, i, n) {
  if (i in arr) {
    arr[i] = n;
  }
}

function addAll(arr) {
  return arr.reduce((sum, value) => sum + value, 0);
}

function larger(a, b) {
  return a > b ? a : b;
}

function largest(arr) {
  if (arr.length === 0) return null;
  return Math.max(...arr);
}

function compare(a, b) {
  return a.length === b.length && a.every((v, i) => v === b[i]);
}

function addToAll(arr, n) {
  arr.forEach((value, index) => {
    arr[index] = value + n;
  });
  return arr;
}

let remembered;

function rememberThis(keepsake) {
  remembered = keepsake;
}

function nArray(n) {
  return Array.from({ length: n }, (_, i) => i + 1);
}

function addAllOpt(arr) {
  let sum = 0;
  (arr ?? []).forEach(v => { sum += v; });
  return sum;
}

function divisors(arr, div) {
  return arr.filter(x => x % div === 0);
}

function multiples(n, m) {
  return Array.from({ length: n }, (_, i) => (i + 1) * m);
}