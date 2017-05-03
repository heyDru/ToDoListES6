import { ToDoItemManager } from '..\\..\\services\\ToDoItemManager.js';
const toDoItemManager = new ToDoItemManager();

export class addFormHandlers {
    
        CreateToDoItem (text) {
            toDoItemManager.CreateToDoItem(text);
        }
    }

