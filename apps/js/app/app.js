// import _ from 'lodash';
// import { concat } from 'lodash';
import { toDoItemManager } from '../services/todo-item-manager';

//const markup = new Markup();

export class App {
  constructor() {
    toDoItemManager.GetList();
  }
}

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