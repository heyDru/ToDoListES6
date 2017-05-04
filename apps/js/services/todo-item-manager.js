import { ToDoItem } from '../model/todo-item';
import { IdGenerator } from './id-generator';
import { DataStorage } from './data-storage';
import { Markup } from './markup';
import { events } from './events';

const idGenerator = new IdGenerator();
const dataStorage = new DataStorage();
const markup = new Markup();

class ToDoItemManager {

    constructor() {

    }

    Create(newText) {
        let newId = idGenerator.getId();
        let text = newText;
        let toDoItemDetails = {
            id: newId,
            text: text,
            done: false,
        };

        let toDoItem = new ToDoItem(toDoItemDetails);
        dataStorage.AddToDoItem(toDoItem);
        // return toDoItem; ////// ?????
    }

    Edit(id,newText,newDone){
         let toDoItemDetails = {
            id: id,
            text: newText,
            done: newDone,
        };
        dataStorage.UpdateToDoItem(id,toDoItemDetails);
    }

// Должен возвращать массив элементов, а в маркапе должен отображать 
    GetList() {
        let self = this;
        let toDoList =  dataStorage.GetToDoList();
        markup.GenerateBaseMarkup();
        
        let addBtn = document.getElementById('addBtn');
        events.on(addBtn,'click',self.Create);
        
        markup.GenerateItemMarkup(toDoList);
    }
}

export const toDoItemManager = new ToDoItemManager();