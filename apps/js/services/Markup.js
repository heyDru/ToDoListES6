import _ from 'lodash';
import { events } from './events.js';
import { AddHandler } from './handlers/add-handler.js';
import { DeleteHandler } from './handlers/delete-handler.js';
import { EditHandler } from './handlers/edit-handler.js';

const addHandler = new AddHandler();
const deleteHandler = new DeleteHandler();
const editHandler = new EditHandler();

export class Markup {

    GenerateMarkup(toDoList) {
        let base = document.getElementById('base');
        base.innerHTML = '';
        this.GenerateBaseMarkup(base);
        this.GenerateItemMarkup(toDoList);
    }

    GenerateBaseMarkup(base) {
        let baseTemplate = document.getElementById('base-template').innerHTML;
        let html = _.template(baseTemplate)();

        // document.write(html);
        base.innerHTML = html;
        this.GenerateAddForm();
    }

    GenerateItemMarkup(toDoList) {

        let listSection = document.getElementById('listSection');
        let self = this;
        let ulEl = self.GenerateElement('ul');

        toDoList.forEach(function (toDo) {
            let liEl = self.GenerateElement('li');

            let toDoContainerAttr = {
                class: 'col-md-12 row toDo-container text-center'
            };
            let toDoContainerEl = self.GenerateElement('div', toDoContainerAttr);

            //Generate CheckBox
            let toDoCheckboxContainerAttr = {
                class: 'col-md-1 toDo-checkBox-container'
            };
            let toDoCheckboxContainerEl = self.GenerateElement('div', toDoCheckboxContainerAttr);

            let todoCheckboxAttr = {
                class: 'glyphicon glyphicon-' + (toDo._done ? 'check' : 'unchecked')
            };
            let todoCheckboxEl = self.GenerateElement('span', todoCheckboxAttr);

            events.on(todoCheckboxEl, 'click', function (event) {
                event.preventDefault();
                toDo._done = !toDo._done;
                editHandler.DoCheck(toDo);
                events.send('get-todos-list');
            });

            toDoCheckboxContainerEl.appendChild(todoCheckboxEl);
            toDoContainerEl.appendChild(toDoCheckboxContainerEl);

            //Generate ToDo Text
            let toDoTextContainerAttr = {
                class: 'col-md-8 toDo-text-container '
            };
            let toDoTextContainerEl = self.GenerateElement('div', toDoTextContainerAttr);

            let toDoTextAttr = {
                class: 'todo-text '+(toDo._done ? 'toDo-done' : 'toDo-undone')
            };
            let toDoTextEl = self.GenerateElement('span', toDoTextAttr, toDo._text);
            toDoTextContainerEl.appendChild(toDoTextEl);
            toDoContainerEl.appendChild(toDoTextContainerEl);


            //Generate ToDo Buttons

            let toDoBtnContainerAttr = {
                class: 'row toDo-btn-container'
            };
            let toDoBtnContainerEl = self.GenerateElement('div', toDoBtnContainerAttr);

            // Edit Btn
            let toDoEditBtnAttr = {
                type: 'button',
                class: ' btn btn-info btn-md toDoBtns edit-btn'
            };
            let toDoEditBtnEl = self.GenerateElement('div', toDoEditBtnAttr, '<span class="glyphicon glyphicon-pencil"></span>');
            toDoBtnContainerEl.appendChild(toDoEditBtnEl);
            let editFunc = function (event) {
                event.preventDefault();
                editHandler.EditToDoItem(toDo,toDoContainerEl);
            };
            events.on(toDoEditBtnEl, 'click', editFunc);
            //Delete Btn
            let toDoDeleteBtnAttr = {
                type: 'button',
                class: ' btn btn-danger btn-md toDoBtns delete-btn'
            };
            let toDoDeleteBtnEl = self.GenerateElement('div', toDoDeleteBtnAttr, '<span class=\"glyphicon glyphicon-remove\"><\/span>');
            events.on(toDoDeleteBtnEl, 'click', function (event) {
                event.preventDefault();
                deleteHandler.DeleteToDoItem(toDo._id);
                events.send('get-todos-list');
            });
            toDoBtnContainerEl.appendChild(toDoDeleteBtnEl);
            toDoContainerEl.appendChild(toDoBtnContainerEl);

            liEl.appendChild(toDoContainerEl);
            ulEl.appendChild(liEl);
        });

        listSection.appendChild(ulEl);
        // _.each(toDoList, function (toDo) {
        //     let toDoContainerAttr = {
        //         class: 'col-md-12 row toDo-container'
        //     };
        //     let toDoContainerEl = self.GenerateElement('div', toDoContainerAttr);

        //     //Generate CheckBox
        //     let toDoCheckboxContainerAttr = {
        //         class: 'col-md-1 toDo-checkBox-container'
        //     };
        //     let toDoCheckboxContainerEl = self.GenerateElement('div', toDoCheckboxContainerAttr);

        //     let todoCheckboxAttr = {
        //         class: 'glyphicon glyphicon-' + (toDo.done ? 'check' : 'unchecked')
        //     };
        //     let todoCheckboxEl = self.GenerateElement('span', todoCheckboxAttr);
        //     toDoCheckboxContainerEl.appendChild(todoCheckboxEl);
        //     toDoContainerEl.appendChild(toDoCheckboxContainerEl);

        //     //Generate ToDo Text
        //     let toDoTextContainerAttr = {
        //         class: 'col-md-7 toDo-text-container ' + (toDo.done ? 'toDo-done' : 'toDo-undone')
        //     };
        //     let toDoTextContainerEl = self.GenerateElement('div', toDoTextContainerAttr);
        //     let toDoTextEl = self.GenerateElement('span', null, toDo.text);
        //     toDoContainerEl.appendChild(toDoTextEl);

        //     //Generate ToDo Buttons
        //     let toDoBtnContainerAttr = {
        //         class: 'col-md-2 toDo-btn-container'
        //     };
        //     let toDoBtnContainerEl = self.GenerateElement('div', toDoBtnContainerAttr);

        //     let toDoDeleteBtnAttr = {
        //         type: 'button',
        //         class: 'btn btn-danger btn-xs'
        //     };
        //     let toDoDeleteBtnEl = self.GenerateElement('div', toDoDeleteBtnAttr, '<span class=\"glyphicon glyphicon-remove\"><\/span>');
        //     toDoBtnContainerEl.appendChild(toDoDeleteBtnEl);
        //     toDoContainerEl.appendChild(toDoBtnContainerEl);

        //     listSection.appendChild(toDoContainerEl);
        // });

    }

    GenerateElement(tag, attributes, innerHTML) {
        tag = tag || {};
        attributes = attributes || null;
        innerHTML = innerHTML || null;
        let element = document.createElement(tag);

        // _.each(attributes, function (value, attribute) {
        //     element.setAttribute(attribute.toString(), value);
        // });
        if (attributes) {
            for (let key in attributes) {
                element.setAttribute(key, attributes[key].toString());
            }
        }
        if (innerHTML) {
            element.innerHTML = innerHTML;
        }
        return element;
    }

    GenerateAddForm() {
        // Create AddForm element
        let formAttr = {
            id: "addForm"
        };
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

        events.on(formAdd, 'submit', function (event) {
            event.preventDefault();
            addHandler.CreateToDoItem(inputAdd.value);
            events.send('get-todos-list');
        });
        div.appendChild(formAdd);
    }
}
