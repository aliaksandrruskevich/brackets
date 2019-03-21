module.exports = function check(str, bracketsConfig) { 
  var arr = str.split ('') 
  var config = [].concat.apply([], bracketsConfig); 
  var result; 
  if (str.length % 2 != 0) { 
  result = false;} 
  else if (str.length % 2 === 0) { 
  for ( var a = 0; a < arr.length; a++) { 
  for ( var b = 0; b <config.length; b++) { 
  var cond = arr[a] === config[b]; 
  if (cond) { 
  var cond1 = arr[a] === config[b]; 
  var cond2 = arr[a+1] === config[b+1]; 
  var cond3 = b%2 === 0; 
  if (cond1 && cond2 && cond3) { 
  arr.splice(a, 2); 
  a = 0; 
  b = -1; 
  } 
  } 
  } 
  } 
  if (arr.length === 0) { 
  result = true; 
  } 
  else result = false; 
  } 
  return result; 
  }
