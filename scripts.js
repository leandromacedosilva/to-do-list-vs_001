function taskAdd() {
  const input = window.document.querySelector("input");
  const inputValue = input.value.trim(); // remove espaços em branco

  // Validação: não permitir tarefa em branco
  if (inputValue === "") {
    alert("Não é permitido incluir uma tarefa em branco.");
    return;
  }

  const li = window.document.createElement("li");

  li.innerHTML =
    inputValue +
    `<span onclick="taskDel(this)">
        <img width="48" height="48"
        src="https://img.icons8.com/doodle/48/delete-sign.png"
        alt="delete-sign"/>
     </span>`;

  window.document.querySelector("ul").appendChild(li);

  // Limpa o input
  input.value = "";

  // Mensagem de sucesso
  alert("Tarefa incluída com sucesso.");
}

function taskDel(element) {
  element.parentElement.remove();

  // Mensagem de sucesso
  alert("Tarefa excluída com sucesso.");
}
