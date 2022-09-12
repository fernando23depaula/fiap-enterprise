import dataJson from "../model/data.js";
const createElement = (element) => document.createElement(element);

const createAvaliacao = () => {
  const avaliacaoQtd = Math.floor(Math.random() * 5);
  const avaliacao = createElement("div");
  for (let i = 0; i <= avaliacaoQtd; i++) {
    const imageStar = createElement("img");
    imageStar.src = "https://ik.imagekit.io/ew6lrcy5h/estrela_r9_8X4Kum.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663007060990";
    avaliacao.append(imageStar);
  }
  avaliacao.classList.add("review");
  avaliacao.append(createElement("div"));
  avaliacao.querySelector("div").append(avaliacaoQtd + 1 + " Reviews");
  return avaliacao;
};

const createFigure = (image) => {
  const figure = createElement("div");
  figure.style.backgroundImage = `url(${image})`;
  figure.classList.add("figure");
  return figure;
};

const buttonMaisDetalhes = (data) => {
  console.log(data, 'data')
  const button = createElement("button");
  button.innerText = "Ver detalhes";
  button.onclick = () => {
    const modal = document.querySelector('#container-modal')
    const contentModal = document.querySelector('.modal-content');
    contentModal.querySelector('img').src = data.image
    contentModal.querySelector('h4').innerText = data.name
    contentModal.querySelector('#open-in span').innerText = data.openIn
    contentModal.querySelector('#description').innerText = data.description
    modal.classList.remove("closed")
    modal.classList.add("open")
  };
  return button;
};

const createContent = (data) => {
  const content = createElement("div");
  const h4 = createElement("h4");
  const p = createElement("p");
  const linebutton = createElement("div");
  linebutton.classList.add ("line-button")
  h4.innerText = data.name;
  p.innerText = data.cardSubtitle;

  content.append(h4);
  content.append(p);
  content.append(createAvaliacao());
  linebutton.append(buttonMaisDetalhes(data));
  content.append(linebutton);
  return content;
};

const createStructure = (data) => {
  const article = createElement("article");
  const content = createContent(data);
  article.append(createFigure(data.image));
  article.append(content);
  return article;
};

const printPontosTuristicos = () => {
  const { data } = dataJson;
  data.map((item) => {
    const mainDiv = document.querySelector(".container .d-grid");
    const article = createStructure(item);
    mainDiv.append(article);
  });
};

(() => {
  printPontosTuristicos();
  document.querySelector('.modal-content').onclick = function(e){
    e.stopPropagation();
  }

  document.querySelector('#container-modal,#closed-modal').onclick = function(e){
    console.log(e.target)
    this.classList.remove('open')
    this.classList.add('closed')
  }
})();
