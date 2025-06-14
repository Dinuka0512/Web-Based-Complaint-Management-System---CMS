export class Validation {

    static isNameValid(name) {
        return /^[A-Za-z. ]+$/.test(name);
    }

    static isPasswordValid(password) {
        return /^[A-Za-z]{4,}$/.test(password);
    }

    static isEmailValid(email) {
        return /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(email);
    }

    static isContactValid(contact) {
        return /^\d{10}$/.test(contact);
    }

    static isItemNameValid(itemName) {
        return /^[A-Za-z0-9\s\-]{2,50}$/.test(itemName);
    }

    static isIntegerValid(value) {
        return /^-?\d+$/.test(value);
    }

    static isDoubleValid(value) {
        return /^-?\d+(\.\d+)?$/.test(value);
    }
}
