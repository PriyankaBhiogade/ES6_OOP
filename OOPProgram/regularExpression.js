const read = require('readline-sync');
const util = require('./Utility/utility');
const fileStream = require('fs');
const String = fileStream.readFileSync('String.text', 'utf8');
nameRestriction = /[a-z]/g;
contactRestriction = /[0-9]/g;
    try {
        let name = read.question(`Enter the name: `);
            while (nameRestriction.test(name) == false) {
            console.log(`Please Enter valid Name and Alphabet only`);
            name = read.question(`Enter the name: `);
        }
        let fullName = read.question(`Enter the Full name: `);
        while(nameRestriction.test(fullName) == false) {
            console.log(`Please Enter valid Full Name and Alphabet only`);
            fullName = read.question(`Enter the Full name: `);
        }

        let moNum = read.question(`Enter Mobile Number: `);
       while(contactRestriction.test(moNum) == false && moNum.length != 10) {
            console.log(`Please Enter valid 10 digit Mobile Number`);
            moNum = read.question(`Enter the Mobile Number:`);

        }
        const date = new Date();
        const day = `${date.getDate()} / ${date.getMonth()} / ${date.getFullYear()}`;
        const answer = util.replceRegex(name, fullName, moNum, day, String);
        console.log(answer);
    }
    catch (error) {
        console.log(error.message);
    }

