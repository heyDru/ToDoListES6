
export class Event {
    constructor() {

    }

    On (element, eventName, callback) {
        element.addEventListener(eventName, callback, false);
    }

    

}