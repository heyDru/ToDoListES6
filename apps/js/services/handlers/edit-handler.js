import { toDoItemManager } from '../../services/todo-item-manager.js';
import { events } from '../../services/events.js';


// const toDoItemManager = new ToDoItemManager();

export class EditHandler {

    EditToDoItem(toDo, toDoContainer) {
        let textEl = toDoContainer.getElementsByClassName('todo-text')[0];
        textEl.style.display = 'none';

        let textContainer = toDoContainer.getElementsByClassName('toDo-text-container')[0];
        let input = document.createElement('input');
        input.className = 'text-center';
        input.value = toDo._text;
        textContainer.appendChild(input);

        toDoContainer.getElementsByClassName('edit-btn')[0].style.display = 'none';

        let okBtn = document.createElement('div');
        okBtn.innerHTML = '<span class="glyphicon glyphicon-ok"></span>';
        okBtn.setAttribute('type', 'button');
        okBtn.className = 'btn btn-info btn-md toDoBtns';
        let btnContainer = toDoContainer.getElementsByClassName(' toDo-btn-container')[0];

        btnContainer.insertBefore(okBtn, btnContainer.firstChild);
        events.on(okBtn, 'click', function (event) {
            event.preventDefault();
            toDo._text = input.value;
            toDoItemManager.Edit(toDo);
            events.send('get-todos-list');
        });
    }



    DoCheck(toDo) {
        toDoItemManager.Edit(toDo);
    }
}
