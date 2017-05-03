import _ from 'lodash';
import { concat } from 'lodash';
import { ToDoItemManager } from '..\\services\\ToDoItemManager.js';

//const markup = new Markup();
let toDoItemManager = new ToDoItemManager();
toDoItemManager.GetList();

//  toDoItemManager.Create('hello');

// let attr = {
//     id: "kokoko",
//     type: 'text',
//     class: "enterText",
//     placeholder:"I'm going to..."
// }


// let inaa=markup.GenerateElement('input',attr);       

// let el = document.getElementsByTagName('body')[0];

// el.appendChild(inaa);