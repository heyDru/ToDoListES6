
import { toDoItemManager } from '../services/todo-item-manager';

export class App {
  constructor() {
    toDoItemManager.GetList();
  }
}
