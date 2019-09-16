const read = require('readline-sync');
const linked = require('./linkedlist');
const fs = require('fs');
const element = fs.readFileSync('maintainCompanyShares.json', 'utf8');
const companyJsonData = JSON.parse(element);
const linklistObj = new linked.LinkedList();
for (let key in companyJsonData.company) {
    linklistObj.add(companyJsonData.company[key]);
};
function CompanyLinklist() {
    console.log(`\n1.Add \n2.Remove \n3.Save \n4.Display \n5.Exit`);
    const choice = read.question(`Enter your choice :: `);
    while (choice !== 5) {
        if (choice == 1) {
            const companyName = read.question(`Enter The Name of Company :: `);
            const pricePerShares = read.question(`Enter Price For Per Share :: `);
            const totalShares = read.question(`How Many Share You Want To Purchase ::`);
            const allValue = {
                symbol: companyName,
                pricePerShares: pricePerShares,
                totalShares: totalShares
            }
            linklistObj.add(allValue);
            console.log(`--------Company Added--------`);
            CompanyLinklist();
        }
        else if (choice == 2) {
            let array = [];
            array = linklistObj.printListStock();
            console.log(array);
            let currentVal = linklistObj.head;
            const removeCompanyName = read.question(`Enter The Name Of Comapny Which You Want To Delete :: `);
            let n = 0;
            let flag = true;
            while (currentVal && flag) {
                n++;
                if (currentVal.data.symbol === removeCompanyName) {
                    console.log(`Current Data ${currentVal.data.symbol}\n`);
                    linklistObj.popIndex(n);
                    flag = false;
                }
                currentVal = currentVal.next;
            }
            if (flag) {
                console.log(`Index not found`);
            }
            console.log(`Updated List\n`);
            let array1 = [];
            array1 = linklistObj.printListStock();
            console.log(array1);
            CompanyLinklist();
        }
        else if (choice == 3) {
            let arrayOutput = [];
            arrayOutput = linklistObj.printListStock();
            console.log(arrayOutput);
            let data = { "company": arrayOutput };
            fs.writeFileSync('./maintainCompanyShares.json', JSON.stringify(data), 'utf8', function () {
                console.log('done');
            });
            console.log(` ----Data Save to file-----`);
            CompanyLinklist();

        }
        else if (choice == 4) {
            let array = [];
            array = linklistObj.printListStock();
            console.log('----All Company------')
            console.log(array);
            CompanyLinklist();
        }
        else if (choice == 5) {
            console.log("Exit");
            process.exit();

        }
        else {
            console.log('-----Invalid choice-----');
            CompanyLinklist();
        }
    }
}
CompanyLinklist();