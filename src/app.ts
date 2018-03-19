// importing from store directory: (not from file store.ts):
import * as fromStoreDir from './store';

import { renderTodos } from './utils';

const input = document.querySelector('input') as HTMLInputElement;
const button = document.querySelector('button') as HTMLButtonElement;
const destroy = document.querySelector('.unsubscribe') as HTMLButtonElement;
const todoList = document.querySelector('.todos') as HTMLLIElement;

const reducers = {
  todos: fromStoreDir.reducer
};
const store = new fromStoreDir.Store(reducers);

console.log("store from app.ts: ", store.value);

// listeners:
button.addEventListener('click',
  () => {
    // validation:
    if(!input.value.trim()) return;
    // end of validation

    // payload:
    const payload = { label: input.value, complete: false }

    // dispatch action:
    store.dispatch({
      type: 'ADD_TODO',
      payload
    });

    console.log(store.value);

    // clear input:
    input.value = '';
  }, false
);

todoList.addEventListener('click', function(event) {
  const target = event.target as HTMLButtonElement;
  if (target.nodeName.toLowerCase() === 'button') {
    console.log(target);
  }
});
