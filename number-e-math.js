// Retorne um número aleatório
// entre 1050 e 2000
console.log(Math.floor(Math.random() * (2000 - 1050 + 1) + 1050));

// Retorne o maior número da lista abaixo
const numeros = "4, 5, 20, 8, 9";
const toArray = numeros.split(", ");

const biggerNumber = Math.max(...toArray);

console.log(biggerNumber);

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ["R$ 59,99", " R$ 100,222", "R$ 230  ", "r$  200"];

function limparPrecos(precos) {
  let arrayOfPrices = [];
  let somaDosPrecos = 0;

  precos.forEach((preco) => {
    const cleanPrice = preco
      .trim()
      .slice(preco.trim().lastIndexOf(" "), preco.length[preco.length - 1])
      .replace(",", ".");
    const toFixed = parseFloat(cleanPrice).toFixed(2);
    const toNumber = parseFloat(toFixed);

    arrayOfPrices.push(toNumber);
  });
  console.log("Array de preços: ", arrayOfPrices);

  arrayOfPrices.forEach((numero) => {
    somaDosPrecos += numero;
  });

  console.log("Soma dos números: ", somaDosPrecos);
}

limparPrecos(listaPrecos);
