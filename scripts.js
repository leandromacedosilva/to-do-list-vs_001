function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");

  const toast = document.createElement("div");
  toast.classList.add("toast", type);
  toast.textContent = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

function taskAdd() {
  const input = document.querySelector("input");
  const inputValue = input.value.trim();

  // Validação
  if (inputValue === "") {
    showToast("Não é permitido incluir tarefa em branco.", "error");
    return;
  }

  const li = document.createElement("li");

  li.innerHTML =
    inputValue +
    `<span onclick="taskDel(this)">
        <img width="48" height="48"
        src="https://img.icons8.com/doodle/48/delete-sign.png"
        alt="delete-sign"/>
     </span>`;

  document.querySelector("ul").appendChild(li);

  input.value = "";

  showToast("Tarefa incluída com sucesso.", "success");
}

function taskDel(element) {
  element.parentElement.remove();
  showToast("Tarefa excluída com sucesso.", "success");
}
