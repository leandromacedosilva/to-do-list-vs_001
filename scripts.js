function taskAdd() {
  let inputValue = window.document.querySelector('input').value;

  let li = window.document.createElement("li");

  li.innerHTML = inputValue + `<span onclick="taskDel(this)"> <img width="48" height="48" src="https://img.icons8.com/doodle/48/delete-sign.png" alt="delete-sign"/> </span>`;

  window.document.querySelector("ul").appendChild(li);

  window.document.querySelector('input').value = "";
  //inputValue = "";

  //console.log(li)
}

function taskDel(li) {
  li.parentElement.remove();
  //console.log('tarefa deletada com sucesso...')
}

/**
 * Passo-a-passo da lista de tarefas
 * [x] saber quando o botao foi clicado
 * [x] pegar o texto dentro do input
 * [x] colocar esse texto na tela
 * [x] deletar a tarefa em tela
 */