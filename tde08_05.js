let num =0
console.log("os numeros pares entre 0 e 100 são: \n")
for(num; num<=100; num++){
    if(num%2==0){
        console.log("numero " +num,)        
    }
}
//=================================================================
{function somarNumeros(array) {
    let soma = 0;
    
    for (let i = 0; i < array.length; i++) {
      soma += array[i];
    }
    
    return soma;
  }
  
  let numeros = [12, 10, 2, 5, 5];
  let resultado = somarNumeros(numeros);
  console.log(resultado);}

 //===============================================================

 { const removerNegativos = (array) => array.filter(x => x > 0);
  const numeros = [1, -2, 3, -4, 5, -6];
  const resultado = removerNegativos(numeros);
  console.log(resultado);}

  function multiplicarPorDois(array) {
    const novoArray = [];
  
    for (let i = 0; i < array.length; i++) {
      novoArray.push(array[i] * 2);
    }
  
    return novoArray;
  }
  

  const numeros = [1, 2, 3, 4, 5];
  const novoArray = multiplicarPorDois(numeros);
  console.log(novoArray);
