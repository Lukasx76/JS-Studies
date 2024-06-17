class Cellphone {
    constructor(name) {
        this.name = name;
        this.volume = 0;
    }

    // Instance methods(can be called only when i create instaces of Remote)
    increaseVolume(){
        this.volume += 5;
    }

    decreaseVolume(){
        this.volume -= 5;
    }

    // Static method(can be called only by the Class not by the instances)
    static updateCellphones() {
        console.log("All the cellphones were updated")
    }
}

const c1 = new Cellphone("Samsung M31");
const c2 = new Cellphone("Samsung S20");
const c3 = new Cellphone("Apple Iphone 14");

c1.increaseVolume();
c2.increaseVolume();
c3.increaseVolume();

Cellphone.updateCellphones()

