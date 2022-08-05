const header = document.createElement('header');
document.body.appendChild(header);

const h1 = document.createElement('h1');
h1.innerText = 'Minha Lista de Tarefas';
header.appendChild(h1);

const p = document.createElement('p');
p.id = 'funcionamento';
p.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
header.appendChild(p);

const divInputButton = document.createElement('div');
document.body.appendChild(divInputButton);

const input = document.createElement('input');
input.id = 'texto-tarefa';
divInputButton.appendChild(input);

const ol = document.createElement('ol');
ol.id = 'lista-tarefas';
document.body.appendChild(ol);
// const ol = document.getElementById('lista-tarefas');

function createButton(id, text) {
  const button = document.createElement('button');
  button.id = id;
  button.innerHTML = text;
  divInputButton.appendChild(button);
  return button;
}
const createTaskButton = createButton('criar-tarefa', 'New Item');
const clearAllTask = createButton('apaga-tudo', 'Apagar todos');
const removeAllCompleted = createButton('remover-finalizados', 'Remover finalizados');
const saveTask = createButton('salvar-tarefas', 'Salvar tarefas');

function addNewItemList(newItem) {
  const li = document.createElement('li');
  ol.appendChild(li);
  li.innerText = newItem;
}

function buttonNewItem() {
  const newItem = input.value;
  addNewItemList(newItem);
  input.value = '';
}
// const idCriarTarefas = document.getElementById('criar-tarefa');
createTaskButton.addEventListener('click', buttonNewItem);

function clearBackground() {
  const tagLi = document.querySelectorAll('li');
  for (let index = 0; index < tagLi.length; index += 1) {
    tagLi[index].classList.remove('grey');
  }
}

function changeBackground(event) {
  clearBackground();
  const click = event.target;
  click.classList.add('grey');
}
ol.addEventListener('click', changeBackground);

function addRemove(event) {
  event.target.classList.toggle('completed');
}
ol.addEventListener('dblclick', addRemove);

function buttonDeleteAll() {
  const tagOl = document.querySelector('ol');
  const tagLi = document.querySelectorAll('li');
  for (let index = 0; index < tagLi.length; index += 1) {
    tagOl.removeChild(tagLi[index]);
  }
}
clearAllTask.addEventListener('click', buttonDeleteAll);

function checkClassCompleted(li) {
  const completedClass = li.classList.contains('completed');
  return completedClass;
}

function checkClassGrey(li) {
  const colorClass = li.classList.contains('grey');
  return colorClass;
}

function buttonDeleteCheck() {
  const tagOl = document.querySelector('ol');
  const tagLi = document.querySelectorAll('li');
  for (let index = 0; index < tagLi.length; index += 1) {
    if (checkClassCompleted(tagLi[index])) tagOl.removeChild(tagLi[index]);
  }
}
removeAllCompleted.addEventListener('click', buttonDeleteCheck);

function buttonSalve() {
  const tagli = document.querySelectorAll('li');
  const array = [];
  const arrayClass = [];
  const arrayGrey = [];
  for (let index = 0; index < tagli.length; index += 1) {
    array.push(tagli[index].innerText);
    if (checkClassCompleted(tagli[index])) arrayClass.push(index);
    if (checkClassGrey(tagli[index])) arrayGrey.push(index);
  }
  localStorage.setItem('itens', JSON.stringify(array));
  localStorage.setItem('completed', JSON.stringify(arrayClass));
  localStorage.setItem('grey', JSON.stringify(arrayGrey));
}
saveTask.addEventListener('click', buttonSalve);

function addClass(arrayCompleted, index) {
  for (let i = 0; i < arrayCompleted.length; i += 1) {
    const li = document.querySelectorAll('li');
    if (index === arrayCompleted[i]) li[index].classList.add('completed');
  }
}
function addClassColor(arrayGrey, index) {
  for (let i = 0; i < arrayGrey.length; i += 1) {
    const li = document.querySelectorAll('li');
    if (index === arrayGrey[i]) li[index].classList.add('grey');
  }
}

window.onload = function onload() {
  const arrayItens = JSON.parse(localStorage.getItem('itens'));
  const arrayCompleted = JSON.parse(localStorage.getItem('completed'));
  const arrayGrey = JSON.parse(localStorage.getItem('grey'));
  if (!arrayItens) return;
  for (let index = 0; index < arrayItens.length; index += 1) {
    addNewItemList(arrayItens[index]);
    addClass(arrayCompleted, index);
    addClassColor(arrayGrey, index);
  }
};
