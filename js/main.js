function soma(n1, n2) {
  return n1 + n2;
}

function replaceFrase(frase, nome, novo_nome) {
  return frase.replace('França', 'Brasil!!');
}

function validaIdade(idade) {
  if (idade >= 18) return true;
  else return false;
}

var idade = prompt('Informe sua idade:');
console.log(validaIdade(idade));

//alert(soma(1, 9));
//alert(replaceFrase('Vai França', 'França', 'Brasil'));

/* var data = new Date();
/* console .log(
/*   data. getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear()
/* ); */
/*  */
/* for (i = 1; i <= 5; i++) {
  console.log(i);
} */

/* var count = 1;
while (count <= 5) {
  console.log(count);
  count++;
} */

/* var idade = prompt('Informe sua idade:');

if (idade >= 18) alert('maior de idade');
else alert('menor de idade');
 */
/* var frutas = [
  { nome: 'maçã', cor: 'vermelha' },
  { nome: 'uva', cor: 'verde' },
];
console.log(frutas);
console.log(frutas[0].nome); */

/* var lista = ['maça', 'pêra', 'banana'];
lista.push('uva'); //inclui um item na lista
lista.pop(); //exclui um item na lista
console.log(lista);
console.log(lista.toString()); //passa para string
console.log(lista.join(' - ')); //adiciona uma máscara
console.log(lista.reverse()); //imprime a lista em ordem inversa
 */
