# Boas-vindas ao repositório do projeto Lista de Tarefas!

Para realizar o projeto, atente-se a cada passo descrito a seguir e, se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir deste repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

</br>

# Termos e acordos

Ao iniciar este projeto, você concorda com as diretrizes do [Código de Conduta e do Manual da Pessoa Estudante da Trybe](https://app.betrybe.com/manual-estudante/codigo-de-etica-e-conduta).

</br>

# Entregáveis

<details>
<summary><strong>🤷🏽‍♀️ Como entregar</strong></summary><br />

  Para entregar o seu projeto você deverá criar um _Pull Request_ neste repositório.

  Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/course/4d67f5b4-34a6-489f-a205-b6c7dc50fc16/) e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que precisar!
</details>

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

  Você desenvolverá uma lista de tarefas usando `HTML`, `CSS` e `JavaScript`.

:bulb: **Veja o exemplo a seguir de como o projeto pode se parecer depois de pronto**

  ![exemplo de uma todo list](./todo-list-example.gif)

:rocket: Lembre-se que você pode ir além e deixar o projeto com a sua cara e impressionar todas as pessoas! :rocket:
</details>

<details>
  <summary><strong>🗓 Data de Entrega</strong></summary><br />
  
- Este projeto é individual;
- São `X` dias de projeto;
- Data para entrega final do projeto: `dd/mm/yyyy - 14:00h`.

</details>


# Orientações

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

  1. Clone o repositório

  - Use o comando: `git clone git@github.com:tryber/sd-0x-project-todo-list.git`
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd sd-0x-project-todo-list`

  2. Instale as dependências

  - `npm install`

  3. Crie uma branch a partir da branch `master`

  - Verifique que você está na branch `master`
    - Exemplo: `git branch`
  - Se não estiver, mude para a branch `master`
    - Exemplo: `git checkout master`
  - Agora, crie uma branch onde você vai guardar os `commits` do seu projeto
    - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    - Exemplo: `git checkout -b joaozinho-todo-list-project`

  4. Crie na raiz do projeto os arquivos que você precisará desenvolver:

  - Verifique que você está na raiz do projeto
    - Exemplo: `pwd` -> o retorno vai ser algo tipo _/Users/joaozinho/code/**sd-0x-project-todo-list**_
  - Crie os arquivos index.html, style.css e script.js
    - Exemplo: `touch index.html style.css script.js`

  5. Adicione as mudanças ao _stage_ do Git e faça um `commit`

  - Verifique que as mudanças ainda não estão no _stage_
    - Exemplo: `git status` (devem aparecer listados os novos arquivos em vermelho)
  - Adicione o novo arquivo ao _stage_ do Git
    - Exemplo:
      - `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
      - `git status` (devem aparecer listados os arquivos em verde)
  - Faça o `commit` inicial
    - Exemplo:
      - `git commit -m 'iniciando o projeto. VAMOS COM TUDO :rocket:'` (fazendo o primeiro commit)
      - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

  6. Adicione a sua branch com o novo `commit` ao repositório remoto

  - Usando o exemplo anterior: `git push -u origin joaozinho-todo-list-project`

  7. Crie um novo `Pull Request` _(PR)_

  - Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-0x-project-todo-list/pulls)
  - Clique no botão verde _"New pull request"_
  - Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  - Coloque um título para a sua _Pull Request_
    - Exemplo: _"Cria tela de busca"
  - Adicione uma descrição para o _Pull Request_, um título que o identifique, e clique no botão verde _"Create pull request"_. Crie da seguinte forma: `[JOAOZINHO] Projeto Lista de Tarefas`
  - **Não se preocupe em preencher mais nada por enquanto!**
  - Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-0x-project-todo-list/pulls) e confira que o seu _Pull Request_ está criado

</details>

<details>
  <summary><strong>⌨️ Durante o desenvolvimento</strong></summary>

- Faça `commits` das alterações que você fizer no código regularmente

- Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

- Os comandos que você utilizará com mais frequência são:
    1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
    2. `git add` _(para adicionar arquivos ao stage do Git)_
    3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
    4. `git push -u origin nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
    5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

</details>

<details>
  <summary><strong>🤝 Depois de terminar o desenvolvimento (opcional)</strong></summary><br />

  Para sinalizar que o seu projeto está pronto para o _"Code Review"_, faça o seguinte:

- Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas:

  - No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**;

  - No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**;

  - No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-0x`.

  Caso tenha alguma dúvida, [aqui tem um video explicativo](https://vimeo.com/362189205).

</details>

<details>
  <summary><strong>🏗 Como estruturar seu projeto</strong></summary>
 </br>

  Os requisitos do seu projeto são avaliados automaticamente, sendo utilizada a resolução de tela de `1366 x 768` (1366 pixels de largura por 768 pixels de altura).

  :warning: **Atenção!!** :warning: 
- Desenvolva seu projeto usando a mesma resolução `1366 x 768`. Este [plugin](https://chrome.google.com/webstore/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh?hl=en) do `Chrome` vai te ajudar a configurar a resolução;
- **Não utilize** imagens com um tamanho maior que _500Kb_;
- Utilize uma ferramenta como a [picresize](https://picresize.com/pt) para redimensionar as imagens.

O não cumprimento de um requisito, total ou parcialmente, impactará em sua avaliação.

</details>

<details>
<summary><strong>🎛 Linter</strong></summary><br />

Usaremos o [ESLint](https://eslint.org/) para fazer a análise estática do seu código, e o [Stylelint](https://stylelint.io/) para analisar o seu código CSS.

Este projeto já vem com as dependências relacionadas aos _linters_ configuradas no arquivo `package.json`.

Para rodá-los localmente no projeto, execute os comandos abaixo:
```bash
  npm run lint  
  npm run lint:styles
```
- O comando npm `run lint`, avalia se os arquivos com a extensão `JS` estão no padrão correto.
- O comando npm `run lint:styles` avalia se os arquivos com a extensão `CSS` estão no padrão correto.

Se as análises dos linters encontrarem problemas no seu código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.


Você pode também instalar o plugin do `ESLint` no `VSCode`. Para isso, basta fazer o download do [plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) `ESLint` e instalá-lo.

⚠ **NESTE PROJETO O STYLELINT E ESLINT NÃO SERÃO AVALIADOS. VOCÊ PODE RODAR O TESTE LOCALMENTE E FAZER AS CORREÇÕES SE DESEJAR!** ⚠
</details>

<details>
  <summary><strong>🛠 Testes</strong></summary><br />

  [Cypress](https://www.cypress.io/) é uma ferramenta de teste de front-end desenvolvida para a web.
  Você pode rodar o cypress localmente para verificar se seus requisitos estão passando, para isso execute o um dos seguintes comandos:

  Para executar os testes apenas no terminal:

  ```bash
  npm test
  ```

  Para executar os testes e vê-los rodando em uma janela de navegador:

  ```bash
  npm run cypress:open
  ```

  **_ou_**

  ```bash
  npx cypress open
  ```

  Após executar um dos dois comandos acima, será aberta uma janela de navegador e então basta clicar no nome do arquivo de teste que quiser executar (project.spec.js).

  Você também pode assistir a [este](https://vimeo.com/539240375/a116a166b9) vídeo 😉🎙

  **Para rodar o cypress é preciso ter rodado o comando npm install anteriormente.**

- Caso a avaliação falhe com alguma mensagem de erro parecida com `[409:0326/130838.878602:FATAL:memory.cc(22)] Out of memory. size=4194304`, provavelmente as imagens que você está utilizando estão muito grandes. Tente redimensiona-las para um tamanho menor.

- Após criar o seu _Pull Request_ e fazer um _push_ da sua _branch_ para o repositório remoto, o avaliador automático será executado.

- Para verificar se a sua avaliação foi computada com sucesso, você pode verificar os **detalhes da execução do avaliador**:

  - Na página do seu _Pull Request_, acima do "botão de merge", procure por _**"Evaluator job"**_ e clique no link _**"Details"**_;

  - Na página que se abrirá, procure pela linha _**"Cypress evaluator step"**_ e clique nela;

  - Analise os resultados a partir da mensagem _**"(Run Starting)"**_;

  - Caso tenha dúvidas, consulte [este vídeo](https://vimeo.com/420861252) ou procure a monitoria.

:warning: **O avaliador automático não necessariamente avalia seu projeto na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?**

- Você tem liberdade para adicionar novos comportamentos ao seu projeto, seja na forma de aperfeiçoamentos em requisitos propostos ou novas funcionalidades, **desde que tais comportamentos adicionais não conflitem com os requisitos propostos**. Em outras palavras, você pode fazer mais do que for pedido, mas nunca menos.

- Contudo, tenha em mente que **nada além do que for pedido nos requisitos será avaliado**. _Esta é uma oportunidade de você exercitar sua criatividade e experimentar com os conhecimentos adquiridos._

</details>

<details>
  <summary><strong>🕵🏿 Revisando um pull request</strong></summary><br />

  Use o conteúdo sobre [Code Review](https://app.betrybe.com/course/real-life-engineer/code-review) para te ajudar a revisar os _Pull Requests_.

</details>

<details>
  <summary><strong>🗣 Nos dê feedbacks sobre o projeto!</strong></summary><br />

Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário.
**Leva menos de 3 minutos!**

  Link: [Formulário de avaliação do projeto](https://be-trybe.typeform.com/to/ZTeR4IbH)

</details>

<details>
  <summary><strong>🗂 Compartilhe seu portfólio!</strong></summary><br />

  Você sabia que o LinkedIn é a principal rede social profissional e compartilhar o seu aprendizado lá é muito importante para quem deseja construir uma carreira de sucesso? Compartilhe esse projeto no seu LinkedIn, marque o perfil da Trybe (@trybe) e mostre para a sua rede toda a sua evolução.

</details>

<details>
  <summary><strong>🔗 Links auxiliares para o desenvolvimento
do projeto</strong></summary><br />

Como pessoa desenvolvedora é necessário realizar pesquisas e garimpar informações para auxiliar no entendimento de um determinado assunto. Assim, para solucionar os requisitos deste projeto é inevitável e **estimulado** que você pesquise nas mais variadas fontes (course, vídeos do course, google, YouTube, etc). </br>
</bre>
:warning: **ATENÇÃO!** :warning: Sempre tome o cuidado de utilizar _fontes confiáveis_ em suas pesquisas da Internet. Alguns exemplos:
  
  - [JavaScript.com](http://javascript.com/)

  - [W3Schools](https://www.w3schools.com/js/default.asp)

  - [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

  - [StackOverflow](https://pt.stackoverflow.com/questions/tagged/javascript)

</details>

</br>

# Requisitos Obrigatórios

:warning: **Leia atentamente os requisitos e siga à risca o que for pedido**. Em particular, atente-se para **os nomes de _ids_ que alguns elementos de seu projeto devem possuir**.

## 1 - Adicione à sua lista o título "Minha Lista de Tarefas" em uma tag `<header>`

<details><summary><strong>Adicione uma tag <code>header</code> com o conteúdo "Minha Lista de Tarefas"</strong></summary><br />

**O que será testado:**

- A página deve possuir uma tag `header` com o conteúdo "Minha Lista de Tarefas".

</details>

## 2 - Adicione abaixo do título um parágrafo com o texto "Clique duas vezes em um item para marcá-lo como completo"

<details><summary><strong>Adicione abaixo do título "Minha Lista de Tarefas" um parágrafo com id="funcionamento" e com o conteúdo do texto "Clique duas vezes em um item para marcá-lo como completo"</strong></summary><br />

**O que será testado:**

- A página deve possuir  um elemento parágrafo com o ID `funcionamento`;
- O conteúdo do parágrafo deve ser `Clique duas vezes em um item para marcá-lo como completo`.

</details>

## 3 - Adicione um input onde a pessoa usuária poderá digitar o nome do item que deseja adicionar à lista

<details><summary><strong>Adicione um input com o id="texto-tarefa" onde a pessoa usuária poderá digitar o nome do item que deseja adicionar à lista</strong></summary><br />


**O que será testado:**

- A página deve possuir um elemento do tipo `input`;
- O elemento `input` deve possuir o ID `texto-tarefa`.

</details>

## 4 - Adicione uma lista ordenada de tarefas

<details><summary><strong>Adicione uma lista ordenada de tarefas com o id="lista-tarefas"</strong></summary><br />

**O que será testado:**

- A página deve possuir um elemento do tipo `ol`;
- O elemento `ol` deve possuir o ID `lista-tarefas`.

</details>

## 5 - Adicione um botão e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo

<details><summary><strong>Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo</strong></summary><br />

**O que será testado:**

- A página deve possuir um elemento do tipo `button`;
- O elemento `button` deve possuir o ID `criar-tarefa`;
- Ao digitar o texto `minha primeira tarefa` e clicar no botão `criar-tarefa`, o texto digitado deve aparecer na lista e **desaparecer do campo de input**;
- A adição de elementos na lista será feita algumas vezes, portanto todos os itens criados devem permanecer na lista na medida em que novos itens são adicionados. 

</details>

## 6 - Adicione três novas tarefas e ordene todas as tarefas da lista por ordem de criação

<details><summary><strong>Adicione três tarefas à lista de tarefas e garanta que as tarefas adicionadas à lista não apareçam em uma ordem diferente da que foram criadas. Por exemplo, ao adicionar as tarefas `Fazer exercícios do bloco 4`, `Segunda tarefa` e `Anotar dicas de JS`, elas devem constar na lista exatamente nessa ordem.</strong></summary><br />

**O que será testado:**

- A página deve possuir três tarefas e será checado se elas estão ordenadas por ordem de criação - ou seja, a primeira tarefa criada deve estar na primeira posição, depois a segunda, e assim por diante.

</details>

## 7 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza

<details><summary><strong>Ao clicar em um item da lista, este deve adquirir a cor adicionada à folha de estilo com o padrão: `background-color: nome-da-cor`, não sendo permitido qualquer outro padrão de nomenclatura de cores.</strong></summary><br />

**O que será testado:**

- A página ao ser carregada deve possuir os itens da lista **sem** o estilo CSS `background-color: gray`;

- Os itens da lista ao serem clicados devem passar a ter o estilo CSS `background-color: gray`.

</details>

## 8 - Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo

<details><summary><strong>Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo</strong></summary><br />

**O que será testado:**

- Quando um elemento da lista é selecionado, o outro elemento anteriormente selecionado deve então ser desselecionado. Isso será verificado através da presença ou não do estilo `background-color: gray` no elemento.

</details>

## 9 - Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completado. Deve ser possível desfazer essa ação clicando novamente duas vezes no item

<details><summary><strong>Crie uma classe CSS com o nome "completed" e defina a propriedade "text-decoration" com o valor "line-through". Utilize a classe CSS "completed" para adicionar o efeito de letra tachada (riscada) às tarefas finalizadas.</strong></summary><br />

**O que será testado:**

- Antes da ação ser disparada, o elemento adicionado à lista não deve possuir a classe `completed` nem o estilo `text-decoration: line-through solid black`;

- O item da lista ao receber duplo clique deve passar a ter a classe `completed` e o estilo `text-decoration` com o valor `line-through solid black`;

- O item da lista ao receber um segundo duplo clique, não deve mais possuir a classe `completed` nem o estilo `text-decoration: line-through solid black`.

</details>

## 10 - Adicione um botão que quando clicado deve apagar todos os itens da lista

<details><summary><strong>Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista</strong></summary><br />

**O que será testado:**

- A página deve possuir um elemento `button` com o ID `apaga-tudo`;

- Dado que uma lista possua tarefas, ao dar um clique no botão a lista deve ficar vazia.

</details>

## 11 - Adicione um botão que quando clicado remove **somente** os elementos finalizados da sua lista

<details><summary><strong>Adicione um botão com id="remover-finalizados" que quando clicado remove **somente** os elementos finalizados da sua lista</strong></summary><br />

**O que será testado:**

- A página deve possuir um elemento `button` com o ID `remover-finalizados`;

- Dado que uma lista possua tarefas finalizadas, ao clicar no botão, todos os elementos marcados como feitos devem ser removidos da lista.

</details>

---

# Requisitos Bônus

## 12 - Adicione um botão que salva o conteúdo da lista. Se você fechar e reabrir a página, a lista deve continuar no estado em que estava

<details><summary><strong>Adicione um botão com id="salvar-tarefas" que salva o conteúdo da lista. Se você fechar e reabrir a página, a lista deve continuar no estado em que estava</strong></summary><br />

**O que será testado:**

- A página deve possuir um elemento `button` com o ID `salvar-tarefas`;

- Dado que uma lista tenha várias tarefas, algumas das quais marcadas como finalizadas, um recarregamento da página deve manter a lista exatamente como está.

</details>

## 13 - Adicione dois botões, que permitam mover o item selecionado para cima ou para baixo na lista de tarefas

<details><summary><strong>Adicione dois botões, um com id="mover-cima" e outro com id="mover-baixo", que permitam mover o item selecionado para cima ou para baixo na lista de tarefas</strong></summary><br />

:warning: Pontos importantes sobre este requisito bônus: :warning:

- Antes de começar a desenvolver essa funcionalidade, pare e pense: </br>

O que significa mover um item de uma lista para cima ou para baixo no **_DOM_**? :thinking: </br>

:bulb: Você já possui todas as habilidades necessárias para fazer isso :smiley:.

- Habitue-se a pensar nos casos especiais ao construir programas. O que acontece se o usuário tentar mover o primeiro item para cima ou o último para baixo?

**O que será testado:**

- A página deve possuir dois elementos `button`, um com o ID `mover-cima` e o outro com o ID `mover-baixo`;

- Dado que diversos elementos foram acrescentados à lista, movimentá-los de formas diversas deve deixá-los permanecer nas posições esperadas;

- Caso algum elemento esteja finalizado, este status deve persistir ainda que se mova o elemento;

- Caso nenhum elemento esteja selecionado, ao clicar nos botões a lista não deve ser alterada;

- Um elemento que esteja selecionado deve se manter selecionado mesmo depois de movido;

- _Caso especial!_ Será verificado que, caso se tente subir o elemento no topo da lista ou, caso se tente descer o último elemento da lista, esta não deve ser alterada.

</details>

## 14 - Adicione um botão que, quando clicado, remove o item selecionado

<details><summary><strong>Adicione um botão com id="remover-selecionado" que, quando clicado, remove o item selecionado</strong></summary><br />

**O que será testado:**

- A página deve possuir um elemento `button` com um ID `remover-selecionado`;

- Ao clicar no botão, somente o elemento selecionado deve ser removido.

</details>
