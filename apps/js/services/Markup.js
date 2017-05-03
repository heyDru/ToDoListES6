import _ from 'lodash';
import { Events } from '..\\services\\Events.js';
import { AddHandler } from '..\\services\\handlers\\addHandler.js';

const events = new Events();
const addHandler = new AddHandler();

export class Markup {

    GenerateBaseMarkup() {
        let baseTemplate = document.getElementById('base-template').innerHTML;
        let html = _.template(baseTemplate)();

        document.write(html);
        this.GenerateAddForm();
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

            let transferToDoItem = new Object();

            transferToDoItem.toDo = toDo;
            transferToDoItem.btn = deleteButton;

            transferToDoList.push(transferToDoItem);
        });
        let html = _.template(listElements);
        console.log(transferToDoList);
        listSection.innerHTML = html({ transferToDoList });
    }

    GenerateElement(tag, attributes, innerHTML) {
        tag = tag || {};
        attributes = attributes || {};
        innerHTML = innerHTML || {};
        let element = document.createElement(tag);

        _.each(attributes, function (value, attribute) {
            element.setAttribute(attribute.toString(), value);
        });

        element.innerHTML = innerHTML;

        return element;
    }

    GenerateAddForm() {
        // Create AddForm element
        let formAttr = {
            id: "addForm"
        }
        let formAdd = this.GenerateElement('form', formAttr);

        // Create AddInput element
        let inputAtttr = {
            id: "addInput",
            type: 'text',
            class: "enterText",
            placeholder: "I'm going to..."
        };
        let inputAdd = this.GenerateElement('input', inputAtttr);

        // Create AddButton element
        let buttonAttr = {
            id: "addBtn",
            type: 'submit',
            class: "btn btn-submit addButton",
        };
        let buttonAdd = this.GenerateElement('button', buttonAttr, 'Lets do it!');

        //Make Form
        formAdd.appendChild(inputAdd);
        formAdd.appendChild(buttonAdd);


        let div = document.getElementById('baseHead');

        events.on(formAdd, 'submit', addHandler.createElement(inputAdd.value));

        div.appendChild(formAdd);
    }

}

