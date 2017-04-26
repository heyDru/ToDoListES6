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
        let html = _.template(listElements);

        listSection.innerHTML=html({toDoList});
    }

}

