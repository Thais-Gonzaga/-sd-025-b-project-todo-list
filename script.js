const header = document.createElement('header');
document.body.appendChild(header);

const h1 = document.createElement('h1');
h1.innerText = 'Minha Lista de Tarefas';
header.appendChild(h1);

const p = document.createElement('p');
p.id = 'funcionamento';
p.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
header.appendChild(p);
