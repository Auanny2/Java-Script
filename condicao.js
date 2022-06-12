//Condicional Simples
/*const estadoNascimento = "pernambuco";

if (estadoNascimento === "pernambuco");
 {
  console.log(`É uma pessoa Pernambucana`);
}*/

// Condicional Composta
/*const estadoNascimento = "bahia";

if (estadoNascimento === "pernambuco")
 {
  console.log(`É uma pessoa Pernambucana`);
} else {
    console.log(`Não é uma pessoa Pernambucana`);
}*/

/*const numero = 12;

if (numero > 10)
{
    console.log(`Esse número é maior que 10`);
} else {
    console.log(`Esse número não é maior que 10`);
}*/

//Condicional aninhado
/*const numero = 10;

if (numero > 10)
{
    console.log(`Esse número é maior que 10`);
} else if (numero === 10)
{
    console.log(`Esse número é igual a 10`);
} else {
    console.log(`Esse número é menor a 10`); 
}*/

/*const numeroUm = 50;
const numeroDois = 40;

const soma = numeroUm + numeroDois;

if (soma > 100)
{
    console.log(`Esse número é maior que 100`);
} else if (soma === 100)
{
    console.log(`Esse número é igual a 100`);
} else {
    console.log(`Esse número é menor a 100`);
}*/

//Switch/Case
/*let idade = 16;

switch(idade){
    case 5:
         console.log("Você é Infantil A");
         break;
    case 8:
         console.log("Você é Infantil B");
         break;
    case 12:
         console.log("Você é Juvenil A");
        break;
    case 14:
        console.log("Você é Juvenil B");
        break;
    default:
        console.log("Você não pode competir!")
        break;

}*/

//Array
/*const marcaCarros = ["Ford", "Hyundai", "Fiat", "BMW", "Etios"]
console.log(marcaCarros [3]);

marcaCarros.push("Honda");
console.log(marcaCarros);

marcaCarros[0] = "AnnyCar";
console.log(marcaCarros);

marcaCarros[marcaCarros.length] = "LisCar";
console.log(marcaCarros);

marcaCarros.pop("LisCar");
console.log(marcaCarros);

marcaCarros.push("Honda");
console.log(marcaCarros);
*/

//Splice
/*const massas = ["Lasanha", "Pizza", "Macarronada"]
//["Lasanha", "Nhoque", "Pizza", "Macarronada"]

massas.splice(1, 0, "Noque");
console.log(massas);*/

// Objetos 

/*const aluna = {nome: "Auanny Araujo", idade: "28", cargo: "Estudante", signo: "Escorpião"}
const professora = { nome: "Lissandra Cruz", cargo: "Professora", empresa: "Minas Programam", signo: "Leão"};
const disciplinaLP = ["LP1", "LP2", "LP3"]

console.log(`A ${aluna.cargo} ${aluna.nome}, com ${aluna.idade} anos está estudando ${disciplinaLP[0]} com a ${professora.cargo} ${professora.nome} na ${professora.empresa}`);*/

// Estrutura de repetição
//For

/*for(let i = 0; i <= 10; i++){
    console.log(`i = ${i}`);
}*/

//pulando de 2 em 2
/*for(let i = 0; i <= 10; i = i + 2){
    console.log(i)
}*/

//de 1 a 1.000 decrescente
/*for(let i = 1000; i>= 1; i--){
    console.log(`i = ${i}`);
}*/

/*const notas = [5.1, 0.1, 6.2, 0.6, 7.4, 10];
console.log(notas[0]);
console.log(notas[1]);
console.log(notas[2]);
console.log(notas[3]);
console.log(notas[4]);
console.log(notas[5]);

for(let i = 0; i <= notas.length; i++){
    console.log(notas[i]);
}*/

//For..of.. (arrays)
/*const notas = [5.1, 0.1, 6.2, 0.6, 7.4, 10];
for(const nota of notas){
    console.log(nota);
}*/

//For..In (objetos)
/*const refeicoes = {manha: "café com pão", tarde: "macarronada", noite: "pizza"};
for(const atributo in refeicoes) {
    console.log(refeicoes[atributo]);
}*/








