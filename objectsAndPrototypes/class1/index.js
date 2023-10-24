// Object: javascript datatype to store keyed collections. Objects can be created literally or with the Object constructor

const literalObject = {
    playerName: "Devin booker",
    playerTeam: "Phoenix suns"
}

const objectConstructed = new Object({playerName:"Kevin durant", playerTeam: "Phoenix suns"});

// it is possible to don't allow other people to modify the attributes and methods of objects by using the method freeze of Object

function factoryFunction(playerName, playerTeam){
    return Object.freeze({
        playerName,
        playerTeam
    })
}

const player1 = factoryFunction("Jamal murray", "Denver nuggets");

console.log(player1)
player2.playerName = "Nikola jokic"
console.log(player1)

// freezing constructor functions

function Constructor(playerName, playerTeam) {
    this.playerName = playerName;
    this.playerTeam = playerTeam;
    Object.freeze(this)
}

const player2 = factoryFunction("Aaron gordon", "Denver nuggets");
console.log(player2)
player2.playerName = "Michael porter jr"
console.log(player2)

// to retrieve a value from an object we can define getters, and to reassign values we can use setters

const nbaPlayers = [{
    playerName: "Devin",
    playerSurname: "booker",
    playerTeam: "Phoenix suns",
    get fullname() {
        return `${this.playerName} ${this.playerSurname}`
    },
    set otherName(playerName) {
        this.playerName = playerName
    }
}]