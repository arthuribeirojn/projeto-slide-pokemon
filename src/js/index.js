/*
    OBJEITVO 1 - quando clicarmos na seta da avançar temos que mostrar o proximo cartao da lista 
    - passo 1 - dar um jeito de pegar o elemento da HTML da seta avançar
    - passo 2 - identificar o clique do usuario na seta avançar
    - passo 3 - fazer o cartao o proximo cartao da lista
    - passo 4 - buscar o cartao que esta selecionado e esconder
*/

const btnVoltar = document.getElementById("btn-voltar");
const btnAvancar = document.getElementById("btn-avancar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

function esconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartao(indiceCartao) {
  cartoes[cartaoAtual].classList.add("selecionado");
}

btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) return;
  esconderCartaoSelecionado();

  cartaoAtual++;
  mostrarCartao(cartaoAtual);
});

btnVoltar.addEventListener("click", function () {
  if (cartaoAtual === 0) return;

  esconderCartaoSelecionado();

  cartaoAtual--;
  mostrarCartao(cartaoAtual);
});
