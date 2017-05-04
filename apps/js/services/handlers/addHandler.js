import { ToDoItemManager } from '..\\..\\services\\toDoItemManager.js';


const toDoItemManager = new ToDoItemManager();

export class AddHandler {
    
        CreateToDoItem (text) {
            toDoItemManager.Create(text);
        }
    }

