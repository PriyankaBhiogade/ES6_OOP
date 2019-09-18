const fs = require('fs');
const jsonInventoryData = fs.readFileSync('inventoryDatManagement.json', 'utf8');
const jsonObj = JSON.parse(jsonInventoryData);

class Data {
    constructor(n, w, p) {
        this.n = n;
        this.w = w;
        this.p = p;
    }
    total() {
        return this.w * this.p;
    }
}
class Rice extends Data {
    constructor(n, w, p) {
        super(n, w, p);
    }
}
class Pulses extends Data {
    constructor(n, w, p) {
        super(n, w, p);
    }
}
class Wheats extends Data {
    constructor(n, w, p) {
        super(n, w, p);
    }
}
console.log(`Rice Inventory Data \n`);
for (var i = 0; i < jsonObj.Rice.length; i++) {
    const riceName = jsonObj.Rice[i].name;
    const riceWeight = jsonObj.Rice[i].weight;
    const ricePrice = jsonObj.Rice[i].price;
    const riceObject = new Rice(riceName, riceWeight, ricePrice);
    const totalPrice = riceObject.total();
    console.log(`${(i + 1)} ] Name of Rice is ${riceName} And Weight is ${riceWeight}`);
    console.log(`Total Price of Rice is ${totalPrice}`);
}
console.log(`--------------------------------------------\n`);

console.log(`Pulses Inventory Data \n`);
for (var i = 0; i < jsonObj.Pulses.length; i++) {
    const pulsesName = jsonObj.Pulses[i].name;
    const pulsesWeight = jsonObj.Pulses[i].weight;
    const pulsesPrice = jsonObj.Pulses[i].price;
    const pulsesObject = new Pulses(pulsesName, pulsesWeight, pulsesPrice);
    const totalPrice = pulsesObject.total();
    console.log(`${(i + 1)} ] Name of Pulses is ${pulsesName} And Weight is ${pulsesWeight}`);
    console.log(`Total Price of Pulses is ${pulsesPrice}`);
}
console.log(`--------------------------------------------\n`);


console.log(`Wheats Inventory Data \n`);
for (var i = 0; i < jsonObj.Wheats.length; i++) {
    const wheatsName = jsonObj.Wheats[i].name;
    const wheatsWeight = jsonObj.Wheats[i].weight;
    const wheatsPrice = jsonObj.Wheats[i].price;
    const wheatsObject = new Wheats(wheatsName, wheatsWeight, wheatsPrice);
    const totalPrice = wheatsObject.total();
    console.log(`${(i + 1)} ] Name of Wheats is ${wheatsName} And Weight is ${wheatsWeight}`);
    console.log(`Total Price of Wheats is ${totalPrice}`);
}


