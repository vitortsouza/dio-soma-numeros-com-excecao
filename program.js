let numero = parseInt(gets());

let soma = 0;
for (let i = 1; i <= numero; i++) {
  if(i % 3 != 0){
    soma += i;
  }
}
print("Soma dos números de 1 a " + numero + ", exceto os divisíveis por 3: " + soma);