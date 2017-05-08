import { toDoItemManager } from '../../services/todo-item-manager.js';

// const toDoItemManager = new ToDoItemManager();

export class AddHandler {

    CreateToDoItem(text) {
        if (text === '') {
            alert('No data');
        }
        else {
            toDoItemManager.Create(text);
        }
    }
}
