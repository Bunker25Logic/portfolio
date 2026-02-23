// Seleciona os elementos
const linkContato = document.querySelector('a[data-page="contatos"]');
const linkAplicacoes = document.querySelector('a[data-page="aplicacoes"]');
const secaoContato = document.querySelector(".contatos");
const secaoAplicacoes = document.querySelector(".aplicacoes");
const logoHome = document.querySelector("header h2");
const linksHome = document.querySelectorAll(
  'header ul li a:not([data-page="contatos"]):not([data-page="aplicacoes"])',
);

// Elementos que compõem a página inicial (Home)
// Selecionamos tudo que deve sumir quando o contato ou aplicacoes aparecer
const elementosHome = document.querySelectorAll(
  ".hero, .down-text, .meio, .projects, .clear",
);

function esconderTudo() {
  elementosHome.forEach((el) => (el.style.display = "none"));
  secaoContato.style.display = "none";
  secaoAplicacoes.style.display = "none";
}

function abrirContato(event) {
  event.preventDefault(); // Evita o comportamento padrão do link
  esconderTudo();
  secaoContato.style.display = "block";
}

function abrirAplicacoes(event) {
  event.preventDefault(); // Evita o comportamento padrão do link
  esconderTudo();
  secaoAplicacoes.style.display = "block";
}

function abrirHome() {
  esconderTudo();
  elementosHome.forEach((el) => (el.style.display = ""));
}

// Adiciona os eventos de clique
linkContato.addEventListener("click", abrirContato);
linkAplicacoes.addEventListener("click", abrirAplicacoes);
logoHome.addEventListener("click", abrirHome);
linksHome.forEach((link) => link.addEventListener("click", abrirHome));
