class Subject {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers(message) {
        this.observers.forEach(observer => observer.update(message));
    }
}

class Telephone extends Subject {
    constructor() {
        super();
        this.phoneBook = {};
    }

    addPhoneNumber(name, number) {
        this.phoneBook[name] = number;
        this.notifyObservers(`Added ${name}'s phone number: ${number}`);
    }

    removePhoneNumber(name) {
        if (name in this.phoneBook) {
            delete this.phoneBook[name];
            this.notifyObservers(`Removed ${name}'s phone number`);
        } else {
            this.notifyObservers(`${name} is not in the phone book`);
        }
    }

    dialPhoneNumber(name) {
        if (name in this.phoneBook) {
            this.notifyObservers(`Now dialing ${this.phoneBook[name]}`);
        } else {
            this.notifyObservers(`No number found for ${name}`);
        }
    }
}

class Observer {
    update(message) {
    
}

class PrintPhoneNumberObserver extends Observer {
    update(message) {
        console.log("Print Phone Number Observer:", message);
    }
}

class NowDialingObserver extends Observer {
    update(message) {
        console.log("Now Dialing Observer:", message);
    }
}

const telephone = new Telephone();
const printPhoneNumberObserver = new PrintPhoneNumberObserver();
const nowDialingObserver = new NowDialingObserver();

telephone.addObserver(printPhoneNumberObserver);
telephone.addObserver(nowDialingObserver);

telephone.addPhoneNumber("James", "08033445567");
telephone.addPhoneNumber("Mark", "09099556677");

telephone.dialPhoneNumber("James");
telephone.dialPhoneNumber("Mark");

telephone.removePhoneNumber("James");

telephone.dialPhoneNumber("James");
