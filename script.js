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

function changeBackground(event) {
  const click = event.target;
  click.style.background = 'grey';
}
idList.addEventListener('click', changeBackground);
