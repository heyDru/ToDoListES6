import { toDoItemManager } from '../../services/todo-item-manager.js';

// const toDoItemManager = new ToDoItemManager();

export class DeleteHandler {
    
   DeleteToDoItem (id) {
        toDoItemManager.Delete(id);
    }
}
