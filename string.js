// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes1 = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 49",
  },
];

let taxa = 0;
let recebimento = 0;

function sumValues(valueDescription, typeOfPayment) {
  const finalChar = valueDescription.valor.slice(-1);
  const isolateTheNumber = valueDescription.valor.slice(3, finalChar);
  const valueToNumber = parseInt(isolateTheNumber);

  return typeOfPayment === "taxa"
    ? (taxa += valueToNumber)
    : (recebimento += valueToNumber);
}

transacoes1.forEach((item) => {
  if (item.descricao.includes("Taxa")) {
    sumValues(item, "taxa");
  } else {
    sumValues(item, "recebimento");
  }
});

console.log("taxa: ", taxa, "/", "recebimento: ", recebimento);

// Retorne uma array com a lista abaixo
const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";
const arrayDeTransportes = transportes.split(";");
console.log(arrayDeTransportes);

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;
const htmlReplace = html.replaceAll("span", "a");
console.log(htmlReplace);

const htmlReplace2 = html.split("span").join("a");
console.log(htmlReplace2);

// Retorne o último caracter da frase
const frase = "Melhor do ano!";
const finalChar = frase[frase.length - 1];
console.log(finalChar);

const finalChar2 = frase.slice(-1);
console.log(finalChar2);

// Retorne o total de taxas
const transacoes = [
  "Taxa do Banco",
  "   TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];

let taxas2 = 0;

transacoes.forEach((item) => {
  const periodOnLowerCase = item.toLocaleLowerCase();
  if (periodOnLowerCase.includes("taxa")) {
    taxas2 += 1;
  }
});

console.log(taxas2);

let taxas3 = 0;

transacoes.forEach((item) => {
  item = item.toLocaleLowerCase().trim().slice(0, 4);

  if (item === "taxa") {
    taxas3++;
  }
});

console.log(taxas3);

const arrayDesordenado = [5, 2, 3, 1, 4];

let arrayOrdenado = [];

arrayDesordenado.forEach((num) => {
  arrayOrdenado.push(num);

  let beforePosition = arrayOrdenado[arrayOrdenado.indexOf(num) - 1];

  if (beforePosition !== undefined) {
    if (arrayOrdenado[beforePosition] > num) {
      arrayOrdenado.push(arrayOrdenado[beforePosition]);
    }
  }
});

console.log(arrayOrdenado);
