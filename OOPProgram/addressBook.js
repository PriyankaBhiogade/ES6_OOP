const read = require('readline-sync');
const util = require('./Utility/addressBookUtility');
const fs = require('fs');
const jsonData = fs.readFileSync('addressBook.json', 'utf8');
const jsonAddressData = JSON.parse(jsonData);
const addressBookObject = new util.Address;
console.log(`********Address Book Detail**********`);
console.log(`1: Create a new Profile`);
console.log(`2: The Details Of Address Book`);
console.log(`3: Update your Profile`);
console.log(`4: Delete profile `);
let choice = read.question(`Enter Your Choice:: `);
switch (parseInt(choice)) {
    case 1:
        addressBookObject.createProfile(jsonAddressData);
        break;
    case 2:
        addressBookObject.displayDetail(jsonAddressData);
        break;
    case 3:
        addressBookObject.updateProfile(jsonAddressData);
        break;
    case 4:
        addressBookObject.deleteDetail(jsonAddressData);
        break;
    case 5:
        console.log(`Thank You!....`)
        break;
    default:
        console.log(`Please enter a valid option!!`);
}