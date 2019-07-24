/*var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxo"}]
console.log(frutas);
alert(frutas[0].cor);



//var fruta = {nome: "maça", cor: "vermelha"}
//console.log{fruta.nome};
//alert(fruta.cor);


var nome = "Renan Thomaz";
var idade = 18;
var idade2 = 29;
var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão", "Brasil"));


//var lista = {"maçã", "pêra", "laranja"};
//lista.push("uva");
//lista.pop();
//console.log(lista[1]);
//console.log(lista.toString());
//console.log(lista.join(" | "));
// console.log(lista.length);



var idade = prompt("Qual sua idade");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}


var count = 0;
while (count < 5){
    console.log(count);
    count++;
}



var count;
for(count = 0; count <= 5; count++){
    alert(count);
}

alert("OI");



//var d = new Date();
//alert(d.getMonth());

function soma(n1, n2){
    return n1 + n2;
}

function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual a sua idade");
console.log(validaIdade(idade));

*/

function botao(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
}

function redirecionar(){
    window.open("https://globallabs.academy/");
}