import _ from 'lodash';
export class Markup {

    GenerateBaseMarkup() {
        let base = document.getElementById('base-template').innerHTML;
        let html = _.template(base)({});

        document.write(html);
    }

    GenerateItemMarkup(toDoList) {
        let listSection = document.getElementById('listSection');
        let listElements = document.getElementById('toDoList-template').innerHTML;

        let transferToDoList = [];

        _.each(toDoList, function (toDo) {
            let deleteButton = document.createElement('button');
            let deleteIcon = document.createElement('span');
            deleteIcon.className = "glyphicon glyphicon-remove";

            deleteButton.appendChild(deleteIcon);
            deleteButton.className = "btn btn-danger btn-md";

     
            transferToDoItem.toDo = toDo;
            transferToDoItem.btn = deleteButton;

            transferToDoList.push(transferToDoItem);
        });
        let html = _.template(listElements);
        console.log(transferToDoList);
        listSection.innerHTML = html({ transferToDoList });
    }

}


        // let button = document.createElement('button');
        // button.addEventListener('click', function (event) {

        // });