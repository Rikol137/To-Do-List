import './style.css';
// eslint-disable-next-line import/no-unresolved
import populate from './module/populatetask.js';
// eslint-disable-next-line import/no-unresolved
import { getAddedTodos, form } from './module/newTask.js';
// eslint-disable-next-line import/no-unresolved
import deleteTask from './module/removeTask.js';
// eslint-disable-next-line import/no-unresolved
import clearCompleted from './module/clearCompleted.js';

const clearCompletedButton = document.getElementById('clearCompleted');

populate();
form.addEventListener('submit', getAddedTodos);

document.addEventListener('click', (e) => {
  if (e.target.className === 'fa fa-trash') {
    deleteTask(e.target.id);
  }
});

clearCompletedButton.addEventListener('click', clearCompleted);