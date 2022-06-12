const notas = [5.1, 0.1, 6.2, 0.6, 7.4, 10]

//1. Liste todos os elementos do Array
for(let i = 0; i <= notas.length; i++){
    console.log(notas[i]);
}

//2. Liste apenas as notas que forem menor que 1
for (let i = 0 ; i < notas.length ; i ++){
    if (notas[i] < 1){
      console.log(notas[i]);
    }
  }

//3. Se houver no Array alguma nota igual a 10, adicione ao final do Array uma nova nota de 9.0
for (let i = 0 ; i < notas.length ; i ++){
    if (notas[i] === 10){
      notas.push(9.0)     
    }
}
console.log(notas);

//4. Se houver no Array uma nota igual a 6.3, remova o último elemento do Array
for (let i = 0 ; i < notas.length ; i ++){
    if (notas[i] === 6.3){
      const removida = notas.pop();
      console.log(`A nota removida foi ${removida}`);
    }
  }
console.log(notas);
