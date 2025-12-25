function taskAdd() {
  let inputValue = window.document.querySelector('input').value;

  let li = window.document.createElement("li");

  li.innerHTML = inputValue + `<img width="48" height="48" src="https://img.icons8.com/doodle/48/delete-sign.png" alt="delete-sign"/>`;

  window.document.querySelector("ul").appendChild(li);

  inputValue = "";
  
  //console.log(li)
}

/**
 * Passo-a-passo da lista de tarefas
 * [x] saber quando o botao foi clicado
 * [x] pegar o texto dentro do input
 * [] colocar esse texto na tela
 * [] deletar a tarefa em tela
 */