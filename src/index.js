module.exports = function reverse (n) {
  let result = "";  
  const nStr = ''+Math.abs(n);
  for(var i = nStr.length - 1;  i >= 0; i--){
    result+= nStr[i];
  }
  return result;
}
