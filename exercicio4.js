const valorCompra = 25;
console.log(valorCompra);

const venda1 = valorCompra * 0.45 + valorCompra;
const venda2 = valorCompra * 0.30 + valorCompra;

if (venda1 < 20){
    console.log(`O valor de venda é ${venda1}`)
} else{
    console.log(`O valor de venda é ${venda2}`)
}
