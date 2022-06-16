'use strict'
function BinarioADecimal(num) {
  let acum = 0;
  for(let i = 0; i < num.length; i++){
    acum = acum + num[i] * 2 ** (num.length - 1 - i); 
  }
  return acum;
}

function DecimalABinario(num) {
  // tu codigo aca
  let binario = '';
  while(num > 0){        
     binario = (num % 2) + binario; 
     num = Math.floor(num / 2);          
  }
  return binario;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}