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
const idList = document.getElementById('lista-tarefas');

const button = document.createElement('button');
button.id = 'criar-tarefa';
button.innerHTML = 'New Item';
divInputButton.appendChild(button);

function addNewItemList(newItem) {
  const li = document.createElement('li');
  idList.appendChild(li);
  li.innerText = newItem;
  console.log(li);
}

function buttonNewItem() {
  const newItem = input.value;
  addNewItemList(newItem);
  input.value = '';
}
button.addEventListener('click', buttonNewItem);

function clearBackground() {
  const tagLi = document.querySelectorAll('li');
  for (let index = 0; index < tagLi.length; index += 1) {
    tagLi[index].style.background = 'white';
  }
}

function changeBackground(event) {
  clearBackground();
  const click = event.target;
  click.style.background = 'grey';
}
idList.addEventListener('click', changeBackground);

function checkClass(event) {
  const completedClass = event.target.classList.contains('completed');
  console.log(completedClass);
  if (completedClass) event.target.classList.remove('completed');
  return completedClass;
}

function strikethrough(event) {
  const booleano = checkClass(event);
  const click = event.target;
  if (!booleano) click.classList.add('completed');
}
idList.addEventListener('dblclick', strikethrough);
