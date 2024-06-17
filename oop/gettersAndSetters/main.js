// to protect a variable of a class we can use the Symbol to protect the variable "wordsLearned"
const _wordsLearned = Symbol();

class SrsSystem{
    constructor() {
        this[_wordsLearned] = 0;
    }

    // using getters and setters

    get wordsLearned() {
        return this[_wordsLearned];
    }

    set wordsLearned(value) {
        this[_wordsLearned] = value
    }

    learnWord() {
        this[_wordsLearned]++
    }

    forgotWord() {
        this[_wordsLearned]--
    }
}

const s1 = new SrsSystem();