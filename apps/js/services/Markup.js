//import _ from 'lodash';
import { events } from './events.js';
import { AddHandler } from './handlers/add-handler.js';

const addHandler = new AddHandler();

export class Markup {

    GenerateBaseMarkup() {
        // let baseTemplate = document.getElementById('base-template').innerHTML;
        // let html = _.template(baseTemplate)();

        // document.write(html);
        this.GenerateAddForm();
    }

    GenerateItemMarkup(toDoList) {

        let listSection = document.getElementById('listSection');
        let self = this;
        
        
        toDoList.forEach(function(toDo) {
            let toDoContainerAttr = {
                class: 'col-md-12 row toDo-container'
            };
            let toDoContainerEl = self.GenerateElement('div', toDoContainerAttr);

            //Generate CheckBox
            let toDoCheckboxContainerAttr = {
                class: 'col-md-1 toDo-checkBox-container'
            };
            let toDoCheckboxContainerEl = self.GenerateElement('div', toDoCheckboxContainerAttr);

            let todoCheckboxAttr = {
                class: 'glyphicon glyphicon-' + (toDo.done ? 'check' : 'unchecked')
            };
            let todoCheckboxEl = self.GenerateElement('span', todoCheckboxAttr);
            toDoCheckboxContainerEl.appendChild(todoCheckboxEl);
            toDoContainerEl.appendChild(toDoCheckboxContainerEl);

            //Generate ToDo Text
            let toDoTextContainerAttr = {
                class: 'col-md-7 toDo-text-container ' + (toDo.done ? 'toDo-done' : 'toDo-undone')
            };
            let toDoTextContainerEl = self.GenerateElement('div', toDoTextContainerAttr);
            let toDoTextEl = self.GenerateElement('span', null, toDo.text);
            toDoContainerEl.appendChild(toDoTextEl);

            //Generate ToDo Buttons
            let toDoBtnContainerAttr = {
                class: 'col-md-2 toDo-btn-container'
            };
            let toDoBtnContainerEl = self.GenerateElement('div', toDoBtnContainerAttr);

            let toDoDeleteBtnAttr = {
                type: 'button',
                class: 'btn btn-danger btn-xs'
            };
            let toDoDeleteBtnEl = self.GenerateElement('div', toDoDeleteBtnAttr, '<span class=\"glyphicon glyphicon-remove\"><\/span>');
            toDoBtnContainerEl.appendChild(toDoDeleteBtnEl);
            toDoContainerEl.appendChild(toDoBtnContainerEl);

            listSection.appendChild(toDoContainerEl);
        });
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
        attributes = attributes || {};
        innerHTML = innerHTML || {};
        let element = document.createElement(tag);

        // _.each(attributes, function (value, attribute) {
        //     element.setAttribute(attribute.toString(), value);
        // });

        for (let key in attributes) {
            element.setAttribute(key, attributes[key].toString());
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
        events.on(buttonAdd, 'submit', function () { addHandler.CreateToDoItem(inputAdd.value) });
        div.appendChild(formAdd);
    }
}
