import { toDoItemManager } from '../../services/todo-item-manager.js';

// const toDoItemManager = new ToDoItemManager();

export class AddHandler {
    
    CreateToDoItem (text) {
        toDoItemManager.Create(text);
    }
}
