// Crie uma função que verifique corretamente o tipo de dado

function verifyTypeOfData(value) {
  return console.log(Object.prototype.toString.call(value));
}

function verifyTypeOfData2(value) {
  return console.log(typeof value);
}

const objeto = {};
const array = [];
const numero = 0;

verifyTypeOfData(objeto);
verifyTypeOfData(array);
verifyTypeOfData(numero);

// Crie um objeto quadrado com a propriedade lados e torne ela imutável
const quadrado = {};

Object.defineProperties(quadrado, {
  lados: {
    value: 4,
    enumerable,
  },
});

console.log(quadrado);

// Previna qualquer mudança no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: "#333",
};

Object.freeze(configuracao);

// Liste o nome de todas as propriedades do protótipo de String e Array
console.log("String", Object.getOwnPropertyDescriptors(String.prototype));
console.log("Array", Object.getOwnPropertyDescriptors(Array.prototype));
