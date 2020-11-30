/*
	In this project, you will be implementing some 
	of the most exciting functionality from the 
	widely-popular lodash.js library. You will be 
	implementing ten methods that add new functionality 
	for numbers, strings, objects, and arrays.
	= Includes guided implementations for:
	- clamp()
	- inRange()
	- words()
	- pad()
	- has()
	- invert()
	- findKey()
	- drop()
	- dropWhile()
	- chunk()
*/
const _ = {};

_.clamp = function(num, low, high) {
  return Math.min(Math.max(num, low), high);
};

_.inRange = function(num, start, end) {
  if(typeof end === 'undefined') {
    end = start;
    start = 0;
  }
  if(start > end) {
    let temp = start;
    start = end;
    end = temp;
  }
  if(num > end || num < start || num === end) {
    return false;
  }
  return true;
};

_.words = function(str) {
  return str.split(' ');
};

_.pad = function(str, len) {
  if(str.length >= len) {
    return str;
  }
  if(len % 2 !== 0) {
    str += " ";
    len--;
  }
  let startLength = str.length;
  for(let i = 0; i < (len-startLength)/2; i++) {
    str = " " + str + " ";
  }
  return str;
}

_.has = function(obj, key) {
  //return obj.hasOwnProperty(key);
  return typeof obj[key] !== 'undefined';
}

_.invert = function(obj) {
  let rObj = {};
  for(const [key, val] of Object.entries(obj)) {
    rObj[val] = key;
    /*Object.defineProperty(rObj, val, {
      value: key,
      configurable: true,
      enumerable: true,
      writable: true
    });*/
  }
  return rObj;
};

_.findKey = function(obj, pFunc) {
  for(const [key, val] of Object.entries(obj)) {
    if(pFunc(obj[key])){
      return key;
    }
  }
};

_.drop = function(arr, num) {
  if(typeof num === "undefined") {
    arr.shift();
  } else {
    for(let i = 0; i < num; i++) {
      arr.shift();
    }
  }
  return arr;
};

_.dropWhile = function(arr, pFunc) {
  let dropNumber = arr.findIndex((a, i, ar) => {
    return !pFunc(a, i, ar);
  });
  return _.drop(arr, dropNumber);
};

_.chunk = function(arr, size) {
  if(typeof size === 'undefined') {
    size = 1;
  }
  const arrChunksUneven = arr.length % size !== 0;
  let rArr = [];
  let cArr = [];
  let k = 0;
  for (let i = 0; i < arr.length; i++) {
    cArr.push(arr[i]);
    k += 1;
    if (k === size || 
        (arr.length-1 === i && arrChunksUneven)) {
      rArr.push(cArr);
      cArr = [];
      k = 0;
    }
  }
  return rArr;
};

// Do not write or modify code below this line.
module.exports = _;