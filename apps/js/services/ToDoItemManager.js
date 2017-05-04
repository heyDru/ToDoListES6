import { ToDoItem } from '..\\model\\toDoItem.js';
import { IdGenerator } from '..\\services\\idGenerator.js';
import {DataStorage} from '..\\services\\dataStorage.js';
import {Markup} from '..\\services\\markup.js';

const idGenerator = new IdGenerator();
const dataStorage = new DataStorage();
const markup = new Markup();

export  class ToDoItemManager {

    Create(newText) {
        let newId = idGenerator.getId();
        let text = newText;
        let toDoItemDetails = {
            id: newId,
            text: text,
            done: false,
        };

        let toDoItem =new ToDoItem(toDoItemDetails);
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
        vent.On(addBtn,'click',self.Create);
        
        markup.GenerateItemMarkup(toDoList);
    }
}