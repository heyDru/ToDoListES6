
const storageName = 'toDoList';

export class DataStorage {

  GetToDoList() {

    let list = localStorage.getItem(storageName);

    if (!list) {
      console.error('No data in storage,just new created');
      list = [];
      return false;
    }
    else {
      list = JSON.parse(list);
    }

    return list;
  }

  AddToDoItem(toDoItem) {
    let list = localStorage.getItem(storageName);
    if (!list) {
      list = [];
      localStorage.setItem(storageName, list);
    }
    else {
      list = JSON.parse(list);
    }
    list.push(toDoItem);
    list = JSON.stringify(list);
    localStorage.setItem(storageName, list);
  }

  DeleteToDoItem(id) {
    let list = localStorage.getItem(storageName);
    list = JSON.parse(list);
    let index = this.SearchById(id, list);
    if (index == "undefined") {
      alert("No Data TO Delete");
    }
    else {
      list.splice(index, 1);
      list = JSON.stringify(list);
      localStorage.setItem(storageName, list);
    }

  }

  UpdateToDoItem(toDo) {
    let list = localStorage.getItem(storageName);
    list = JSON.parse(list);
    let index = this.SearchById(toDo._id, list);
    list[index] = toDo;
    list = JSON.stringify(list);
    localStorage.setItem(storageName, list);
  }

  SearchById(id, toDoList) {
    let index;
    for (let i = 0; i < toDoList.length; i++) {
      if (toDoList[i]._id === id) {
        index = i;
      }
    }
    return index;
  }
}
