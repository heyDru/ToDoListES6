
class Events {

    on(element, eventName, callback) {
        element.addEventListener(eventName, callback, false);
    }

    subscribe(eventName, callback) {
        document.addEventListener(eventName, callback, false);
    }

    send(eventName, details) {
        details = details || {};

        var event = new CustomEvent(eventName, {
            detail: details
        });

        document.dispatchEvent(event);
    }

    deleteEvent(eventName,callback) {
        document.removeEventListener(eventName, callback, false);
    }

}

export const events = new Events();