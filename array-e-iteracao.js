// Selecione cada curso e retorne uma array com objetos contendo o título, descricao, aulas e horas de cada curso
const todosCursos = Array.from(document.querySelectorAll("section"));

const cursos = todosCursos.map((item) => {
  const titulo = item.querySelector("h1").innerText;
  const descricao = item.querySelector("p").innerText;
  const aulas = +item.querySelector(".aulas").innerHTML;
  const horas = +item.querySelector(".horas").innerHTML;

  return {
    titulo,
    descricao,
    aulas,
    horas,
  };
});

console.log(cursos);

// Retorne uma lista com os números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const maioresQueCem = numeros.filter((numero) => numero > 100);

console.log(maioresQueCem);

// Verifique se Baixo faz parte da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];

const contemBaixo = instrumentos.some((instrumento) => instrumento === "Baixo");

console.log(contemBaixo);

// Retorne o valor total das compras
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Quejo",
    preco: "R$ 10,60",
  },
];

const SomaDosPrecos = compras.reduce((acc, atual) => {
  const limparNumero = +atual.preco.replace("R$ ", "").replace(",", ".");

  return acc + limparNumero;
}, 0);

console.log(SomaDosPrecos);
