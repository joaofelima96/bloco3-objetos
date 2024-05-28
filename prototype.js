// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.nomeCompleto = () => {
  return `Nome completo: ${this.nome} ${this.sobrenome}`;
};

const joao = new Pessoa("João", "Lima", 27);
console.log(joao.nomeCompleto());

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document

//NodeList:
console.log(NodeList.prototype);

// HTMLCollection
console.log(HTMLCollection.prototype);

// Document
console.log(Document.prototype);

// Liste os construtores dos dados abaixo
const li = document.querySelector("li");

li; //HTMLLIElement
li.click; //Function
li.innerText; //String
li.value; //Number
li.hidden; //Boolean
li.offsetLeft; //Number
li.click(); //Undefined e Null não possuem constructor

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; //String
