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
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function larger(a, b) {
  return a > b ? a : b;
}

function largest(arr) {
  if (arr.length === 0) {
    return null;
  }
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function compare(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}

function addToAll(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + n;
  }
  return arr;
}

let remembered;

function rememberThis(keepsake) {
  remembered = keepsake;
}

function nArray(n) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
}

function addAllOpt(arr) {
  if (!arr || arr.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function divisors(arr, div) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % div === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

function multiples(n, m) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    result.push(i * m);
  }
  return result;
}