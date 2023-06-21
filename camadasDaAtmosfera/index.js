
let altitude = prompt("Olá, digite o valor da altitude"); // usando prompt para entrada de dados via navegador
                                                          // sem usar node
                                                          
const troposfera = 20; 
const estratosfera = 50; 
const mesosfera = 80; 
const termosfera = 450; 
const exosfera = 900;

if( altitude <= troposfera){
  console.log('troposfera')
} else if( altitude > troposfera &&  altitude <= estratosfera ){
  console.log('estratosfera')
} else if( altitude > estratosfera && altitude <= mesosfera){
  console.log('mesosfera')
} else if(  altitude > mesosfera && altitude <= termosfera){
  console.log('termosfera')
} else if( altitude > termosfera  ){
  console.log('exosfera')
} else {
  console.log("dado invalido")
}

