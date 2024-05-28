// Retorne a soma total de caracteres dos parágrafos acima utilizando reduce
const secao = Array.from(document.querySelectorAll(".paragrafos p"));

function retornarNumDeCaracteres() {
  const resultado = secao.reduce((acc, item) => {
    const conteudo = item.textContent.length;

    return acc + conteudo;
  }, 0);

  return resultado;
}

console.log(retornarNumDeCaracteres());

// Crie uma função que retorne novos elementos html, com os seguintes parâmetros
// tag, classe e conteudo.
function novosElementosHTML(tag, classe, conteudo) {
  const newElement = document.createElement(`${tag}`);
  newElement.classList.add(`${classe}`);
  newElement.innerHTML = conteudo;

  return newElement;
}

console.log(novosElementosHTML("h1", "ativo", "Título"));

// Crie uma nova função utilizando a anterior como base essa nova função deverá sempre criar h1 com a classe titulo. Porém o parâmetro conteudo continuará dinâmico
function novoH1(conteudo) {
  const newElement = document.createElement(`h1`);
  newElement.classList.add(`titulo`);
  newElement.innerText = conteudo;

  return newElement;
}

console.log(novoH1("Produtos"));
