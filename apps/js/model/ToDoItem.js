export class ToDoItem {


    constructor(toDoDetails) {
        this._id = toDoDetails.id;
        this._text = toDoDetails.text;
        this._done = toDoDetails.done;
    }
    get id() {
        return this._id;
    }

    get text() {
        return this._text;
    }

    set text(newText) {
        this._text = newText;
    }

    get done() {
        return this._done;
    }

    set done(newDone) {
        this._done = newDone;
    }
}