const adicionar = document.querySelector("#adicionar");
const formularioContainer = document.querySelector(".alinhamento-to-do");
const listaPrimeira = document.querySelector(".primeira");
const listaSegunda = document.querySelector(".segundo");
const listaTerceira = document.querySelector(".terceiro");

adicionar.addEventListener("click", function () {
  const formulario = document.createElement("form");
  formulario.id = "formulario";

  const tituloFormulario = document.createElement("h2");
  tituloFormulario.innerHTML = '<span class="material-icons" id="close">close</span> Nova Task';
  formulario.appendChild(tituloFormulario);

  const nameNome = document.createElement("name");
  nameNome.for = "name";
  nameNome.textContent = "Título *";
  formulario.appendChild(nameNome);

  const campoNome = document.createElement("input");
  campoNome.type = "text";
  campoNome.id = "nome";
  campoNome.placeholder = "Nome";
  formulario.appendChild(campoNome);

  const descDescricao = document.createElement("desc");
  descDescricao.for = "desc";
  descDescricao.textContent = "Descriçao";
  formulario.appendChild(descDescricao);

  const campoDescricao = document.createElement("textarea");
  campoDescricao.id = "descricao";
  campoDescricao.placeholder = "Descrição";
  formulario.appendChild(campoDescricao);

  const botaoSalvar = document.createElement("button");
  botaoSalvar.type = "submit";
  botaoSalvar.textContent = "Criar Task";
  formulario.appendChild(botaoSalvar);

  const closeIcon = formulario.querySelector("#close");
  closeIcon.addEventListener("click", function () {
    formulario.style.display = "none";
  });

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = campoNome.value;
    const descricao = campoDescricao.value;

    const criarItem = function () {
      const novoItem = document.createElement("li");
      novoItem.classList.add("primeira-item");
      novoItem.innerHTML =
        '<span class="material-icons" id="delete_outline">delete_outline</span>' +
        '<div class="blue_li_circle"><span class="material-icons" id="navigate_next">navigate_next</span></div>';

      const nomeDescricao = `<strong class="centered larger-name">${nome}</strong>`;

      if (novoItem.parentNode === listaPrimeira) {
        novoItem.innerHTML += nomeDescricao;
      } else {
        novoItem.innerHTML += nomeDescricao +
          '<div class="blue_li_circle2"><span class="material-icons" id="navigate_before">navigate_before</span></div>';
      }

      const lerDescricao = document.createElement("span");
      lerDescricao.classList.add("ler-descricao");
      lerDescricao.innerHTML = 'Ler descrição<span class="material-icons expandir-descricao" id="expand_more">expand_more</span>';
      novoItem.appendChild(lerDescricao);

      const descricaoContainer = document.createElement("div");
      descricaoContainer.classList.add("descricao-container");

      const descricaoTexto = document.createElement("span");
      descricaoTexto.classList.add("descricao");
      descricaoTexto.textContent = descricao;
      descricaoContainer.appendChild(descricaoTexto);

      novoItem.appendChild(descricaoContainer);

      const navigateNextIcon = novoItem.querySelector("#navigate_next");
      navigateNextIcon.addEventListener("click", function () {
        if (novoItem.parentNode === listaPrimeira) {
          listaPrimeira.removeChild(novoItem);
          listaSegunda.appendChild(novoItem);
        } else if (novoItem.parentNode === listaSegunda
        ) {
          listaSegunda.removeChild(novoItem);
          listaTerceira.appendChild(novoItem);
          novoItem.style.textDecoration = "line-through";
        }
      });

      const navigateBeforeIcon = novoItem.querySelector("#navigate_before");
      navigateBeforeIcon.addEventListener("click", function () {
        if (
          novoItem.parentNode === listaSegunda) {
          listaSegunda.removeChild(novoItem);
          listaPrimeira.appendChild(novoItem);
          novoItem.style.textDecoration = "none";
        } else if (novoItem.parentNode === listaTerceira) {
          listaTerceira.removeChild(novoItem);
          listaSegunda.appendChild(novoItem);
          novoItem.style.textDecoration = "none";
        }
      });

      const expandMoreIcon = novoItem.querySelector("#expand_more");
      expandMoreIcon.classList.add("expandir-descricao");

      const descricaoBotao = novoItem.querySelector(".descricao");
      descricaoBotao.style.display = "none";

      const exibirOcultarDescricao = function () {
        if (descricaoBotao.style.display === "none") {
          descricaoBotao.style.display = "block";
          expandMoreIcon.style.display = "none";
          novoItem.style.height = "auto"; // Define a altura para "auto" ao expandir
        } else {
          descricaoBotao.style.display = "none";
          expandMoreIcon.style.display = "block";
          novoItem.style.height = "3.6rem"; // Define a altura inicial desejada ao recolher
        }
      };

      const descricaoWrapper = document.createElement("div");
      descricaoWrapper.classList.add("descricao-wrapper");
      descricaoWrapper.appendChild(descricaoBotao);
      descricaoWrapper.appendChild(descricaoTexto);
      novoItem.appendChild(descricaoWrapper);

      expandMoreIcon.addEventListener("click", exibirOcultarDescricao);

      const moreVertIcon = novoItem.querySelector("#delete_outline");
      moreVertIcon.addEventListener("click", function () {
        const confirmDelete = confirm("Deseja excluir esta tarefa?");
        if (confirmDelete) {
          novoItem.parentNode.removeChild(novoItem);
        }
      });

      return novoItem;
    };

    const novoItem = criarItem();
    listaPrimeira.appendChild(novoItem);

    campoNome.value = "";
    campoDescricao.value = "";

    formulario.style.display = "none";
  });

  formularioContainer.appendChild(formulario);

  formulario.style.display = "block";
});

/*=========================================================================================*/


/*=========================================================================================*/

window.onload = function () {
  const toggleSwitch = document.querySelector('#switch');
  const footer = document.querySelector('footer');
  const header = document.querySelector('header');
  const body = document.querySelector('body');
  const h1 = document.querySelector('h1');
  const h2 = document.querySelectorAll('h2');
  const label = document.querySelector('label');
  const ul = document.querySelectorAll('ul');
  const FraseDoDia = document.querySelector('.FraseDoDia');
  const frase = document.querySelector('.frase');
  const logoImage = document.querySelector('.LogoUnect');
  const circulo_rosinha = document.querySelector('.circulo_rosinha');
  const circulo_amarelo = document.querySelector('.circulo_amarelo');
  const lampada = document.querySelector('.lampada')
  const li = document.querySelectorAll('li');


  function switchTheme(event) {
    if (event.target.checked) {
      body.classList.add('dark-mode');
      header.classList.add('dark-mode');
      footer.classList.add('dark-mode');
      h1.classList.add('dark-mode');
      label.classList.add('dark-mode');
      ul.forEach(function (ul) {
        ul.classList.add('dark-mode');
      });
      h2.forEach(function (h2) {
        h2.classList.add('dark-mode');
      });
      FraseDoDia.classList.add('dark-mode');
      frase.classList.add('dark-mode');
      logoImage.src = 'ImagemDark.png';
      circulo_rosinha.classList.add('dark-mode');
      circulo_amarelo.classList.add('dark-mode');
      lampada.classList.add('dark-mode');
      li.classList.add('dark-mode');


    } else {
      body.classList.remove('dark-mode');
      header.classList.remove('dark-mode');
      footer.classList.remove('dark-mode');
      h1.classList.remove('dark-mode');
      label.classList.remove('dark-mode');
      ul.forEach(function (element) {
        element.classList.remove('dark-mode');
      });
      h2.forEach(function (element) {
        element.classList.remove('dark-mode');
      });
      FraseDoDia.classList.remove('dark-mode');
      frase.classList.remove('dark-mode');
      logoImage.src = 'ImagemLight.png';
      circulo_rosinha.classList.remove('dark-mode');
      circulo_amarelo.classList.remove('dark-mode');
      lampada.classList.remove('dark-mode');
      li.classList.remove('dark-mode');

    }
  }

  toggleSwitch.addEventListener('click', switchTheme, false);
}

/*=========================================================================================*/
