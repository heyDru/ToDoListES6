
const storageName = 'toDoList';

export class DataStorage {

  GetToDoList() {

    let list = localStorage.getItem(storageName);

    if (!list) {
      console.error('No data in storage,just new created');
      return false;
    }
    list = JSON.parse(list);
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
    let index = this.SearchById(id,list);
    if (!index) {
      alert("No Data TO Delete");
    }
    list.splice(index, 1);
    list = JSON.stringify(list);
    localStorage.setItem(storageName, list);
  }

  UpdateToDoItem(id,newToDoItem) {
    let list = localStorage.getItem(storageName);
    list = JSON.parse(list);
    let index =this.SearchById(id,list);
    list[index] = newToDoItem;
  }

  SearchById(id,toDoList){
     let index = function () {
      for (let i = 0; i < list.length; i++) {
        if (list[i].id === id)
          return i;
      }
      return index;
    };
  }
}
