const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

// add todos to li
const genTemplate = (todo) => {
  const html = `
      <li class="list-group-item d-flex justify-content-between align-items-center">
          <span>${todo}</span>
          <span class="delete">&#10008;</span>
      </li>
    `;
  list.innerHTML += html;
};

// add todos
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();

  if (todo.length) {
    genTemplate(todo);
    addForm.reset();
  }
});

//  delete todos
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

// search items
const filterTodos = (searchItem) => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(searchItem))
    .forEach((todo) => todo.classList.add("filtered"));

  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(searchItem))
    .forEach((todo) => todo.classList.remove("filtered"));
};

// keyup event
search.addEventListener("keyup", () => {
  const searchItem = search.value.trim().toLowerCase();
  filterTodos(searchItem);
});
