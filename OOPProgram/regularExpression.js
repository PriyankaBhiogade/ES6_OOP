const read = require('readline-sync');
const util = require('./utility');
const fileStream = require('fs');
const String = fileStream.readFileSync('String.text', 'utf8');
    try {
        const name = read.question(`Enter the name: `);
        if (!isNaN(name)) {
            console.log(`Please Enter valid Name and Alphabet only`);
            read.question(`Enter the name: `);
        }
        const fullName = read.question(`Enter the Full name: `);
        // if (!isNaN(fullName)) {
        //     console.log(`Please Enter valid Full Name and Alphabet only`);
        //     read.question(`Enter the Full name: `);
        // }

       const moNum = read.question(`Enter Mobile Number: `);
       if (isNaN(moNum) && moNum.length != 10) {
            console.log(`Please Enter valid 10 digit Mobile Number`);
            read.question(`Enter the Mobile Number:`);

        }
        const date = new Date();
        const day = `${date.getDate()} / ${date.getMonth()} / ${date.getFullYear()}`;
        const answer = util.replceRegex(name, fullName, moNum, day, String);
        console.log(answer);
    }
    catch (error) {
        console.log(error.message);
    }

