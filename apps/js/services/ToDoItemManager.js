import { ToDoItem } from '..\\model\\ToDoItem.js';
import { IdGenerator } from '..\\services\\IdGenerator.js';
import {DataStorage} from '..\\services\\DataStorage.js';
import {Markup} from '..\\services\\Markup.js';
import {Event} from '..\\services\\Event.js';

const idGenerator = new IdGenerator();
const dataStorage = new DataStorage();
const markup = new Markup();
const event = new Event();
export class ToDoItemManager {

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
        return toDoItem; ////// ?????
    }

    Edit(id,newText,newDone){
         let toDoItemDetails = {
            id: id,
            text: newText,
            done: newDone,
        };
        dataStorage.UpdateToDoItem(id,toDoItemDetails);
    }

    GetList() {
        let self = this;
        let toDoList =  dataStorage.GetToDoList();
        markup.GenerateBaseMarkup();
        
        let addBtn = document.getElementById('addBtn');
        event.On(addBtn,'click',self.Create);
        
        markup.GenerateItemMarkup(toDoList);
    }
}