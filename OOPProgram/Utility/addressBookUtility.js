const read = require('readline-sync');
const fs = require('fs');

nameRestriction = /[a-z]/g;
contactRestriction = /[0-9]/g;

class Address {
    constructor(address) {
        this.address = address;
    }

    createProfile(address) {
        let firstName = read.question(`Enter your First Name :: `);
        while (nameRestriction.test(firstName) == false) {
            console.log(`No Special characters ..Invalid Name! `);
            firstName = read.question(`ReEnter First Name:: `);
        };
        let lastName = read.question(`Enter your Last Name :: `);
        while (nameRestriction.test(lastName) == false) {
            console.log(`No Special Characters....Invalid Name!`);
            lastName = read.question(`ReEnter Last Name::  `);
        };
        console.log(`********Address details *********`);
        const street = read.question(`Enter your Street :: `);
        let city = read.question(`Enter your City :: `);
        while (nameRestriction.test(city) == false) {
            console.log(`No Special Character... Invalid City`);
            city = read.question(`ReEnter City Name :: `);
        };
        let state = read.question(`Enter your State :: `);
        while (nameRestriction.test(state) == false) {
            console.log(`No Special Character... Invalid State`);
            state = read.question(`ReEnter State Name :: `);
        };
        let nation = read.question(`Enter your Nation :: `);
        while (nameRestriction.test(nation) == false) {
            console.log(`No Special Character... Invalid Nation`);
            nation = read.question(`ReEnter Nation Name :: `);
        };
        let zip = read.question(`Enter your Zip :: `);
        while (contactRestriction.test(zip) == false && zip.length != 6) {
            console.log("Enter 6 digit Number..Invalid Zip Code! ");
            zip = read.question(`ReEnter zip Number :: `);
        };
        let moNum = read.question(`Enter your Mobile Number :: `);
        while (contactRestriction.test(moNum) == false && moNum.length != 10) {
            console.log("Enter 10 digit Mobile Number ..Invalid Name! ");
            moNum = read.question(`ReEnter Mobile Number :: `);
        };
        address.Person.push(
            {
                "Name": firstName,
                "LastName": lastName,
                "Address": {
                    "Street": street,
                    "City": city,
                    "State": state,
                    "Nationality": nation,
                    "Zip Code": zip,
                    "PhoneNum": moNum
                }
            });
        fs.writeFile('addressBook.json', JSON.stringify(address), 'utf-8', function (err) {
            if (err) throw err
            console.log(`Done!`);
        });
        console.log(`Your Information As Per Our Record is ::\nFirst Name is :: ${firstName}\nLast Name is :: ${lastName}`);
        console.log(`Address is :: ${street}, ${city}, ${state}, ${nation}, ${zip}`);
        console.log(`Mobile Number is :: ${moNum}`);
    }
    displayDetail(address) {
        if (address.Person.length > 0) {
            for (let i = 0; i < address.Person.length; i++) {
                console.log(address.Person[i]);
            }
        }
    }

    updateProfile(address) {
        // let temp = -1;
        if (address.Person.length > 0) {
            console.log(`Address book Details::\n`);
            for (let i = 0; i < address.Person.length; i++) {
                 console.log(address.Person[i]);
            }
            console.log(`*******Welcome***** \n`)
            const name = read.question("Enter the Name of the Profile:: ")
            for (let k = 0; k < address.Person.length; k++) {
                if (name == address.Person[k].Name) {
                    console.log(`What Do you Want to do ? `);
                    console.log(`1 : Update Address\n2 : Delete\n3 : Sort\n4 : Save \n5 : Exit`);
                    let key = read.question("Enter your Choice: ")
                    switch (parseInt(key)) {
                        case 1:
                            /**
                             * Update Address
                             */
                            console.log("What Do You want to Update ?")
                            console.log(`1 : Street\n2 : City\n3 : State\n4 : Nationality\n5 : Zip Code\n6 : Phone Number`);
                            var choice = read.question("Enter Your Choice: ")

                            this.Data(choice,address,k);
                            break;

                            
                        /**
                         * Delete Index
                         */
                        case 2:
                            var update = read.question("Enter the Name which You want to Delete: ")
                            for (let i = 0; i < address.Person.length; i++) {
                                if (address.Person[i].Name == update) {
                                    var index = address.Person.indexOf(address.Person[i])

                                    address.Person.splice(index, 1)



                                }

                            }
                            save()
                            console.log("Delete Sucessfully.......")
                            break;

                        /**
                         * Sort Last Name
                         */
                        case 3:
                            let temp;
                            for (let i = 0; i < address.Person.length; i++) {
                                for (let j = 0; j < address.Person.length - 1; j++) {
                                    if (address.Person[j].LastName.localeCompare(address.Person[j + 1].LastName) == 1) {
                                        temp = address.Person[j];
                                        address.Person[j] = address.Person[j + 1];
                                        address.Person[j + 1] = temp;


                                    }
                                }
                            }
                            console.log(address)
                            // address.Person[k] = obj;
                            save()
                            // file.writeFile('AddressBook.json', JSON.stringify(address), 'utf-8');
                            break;

                        /**
                         * Save new Updation
                         */
                        case 4:
                            function save() {
                                file.writeFile('AddressBook.json', JSON.stringify(address), 'utf-8', function (err) {
                                    if (err) throw err
                                    console.log('File Saved!!')
                                })
                                //file.writeFile('AddressBook.json', JSON.stringify(address), 'utf -8')

                            }
                            break;

                        case 5:

                            console.log('Thank You......')
                            break;
                        default:
                            console.log("Please enter valid option");
                            break;
                    }
                }



            }

        }
        else {

            console.log("Profile Unavilable ....Please create New One ")
            this.createProfile(address)

        }

    }

    deleteDetail(address) {
        const deletedName = read.question(`Enter the Name which You want to Delete::  `)
        for (let i = 0; i < address.Person.length; i++) {
            if (address.Person[i].Name == deletedName) {
                let index = address.Person.indexOf(address.Person[i])
                address.Person.splice(index, 1)
            }
        }
        console.log("Delete Sucessfully.......")
    }


    Data(choice,address,k){
        switch (parseInt(choice)) {
            case 1:
                //Street Update
                let streetUpdate = read.question("Enter New Street:: ")
                let obj = {
                    "Name": address.Person[k].Name,
                    "LastName": address.Person[k].LastName,
                    "Address": {
                        "Street": streetUpdate,
                        "City": address.Person[k]["Address"].City,
                        "State": address.Person[k]["Address"].State,
                        "Nationality": address.Person[k]["Address"].Nation,
                        "Zip": address.Person[k]["Address"].Zip,
                        "PhoneNum": address.Person[k]["Address"].moNum
                    }
                }
                address.Person[k] = obj;
                this.save(address)
                break;
            case 2:
                //City Update
                let cityUpdate = read.question(" Enter New City :: ")
                while (nameRestriction.test(cityUpdate) == false) {
                    console.log("No Special characters ..Invalid City! ");
                    cityUpdate = read.question(" ReEnter New City:: ")
                }
                 obj = {
                    "Name": address.Person[k].Name,
                    "LastName": address.Person[k].LastName,
                    "Address": {
                        "Street": address.Person[k]["Address"].Street,
                        "City": cityUpdate,
                        "State": address.Person[k]["Address"].State,
                        "Nationality": address.Person[k]["Address"].Nation,
                        "Zip": address.Person[k]["Address"].Zip,
                        "PhoneNum": address.Person[k]["Address"].moNum
                    }
    
                }
                address.Person[k] = obj;
                this.save()
                break;
            //State Update
            case 3:
                let StateUpadate = read.question("Enter the New State:: ")
                while (nameRestriction.test(StateUpadate) == false) {
                    console.log("No Special characters ..Invalid State! ");
                    StateUpadate = read.question("ReEnter New State:: ")
                }
                 obj = {
                    "Name": addressb.Person[k].Name,
                    "LastName": address.Person[k].LastName,
                    "Address": {
                        "Street": address.Person[k]["Street"].Street,
                        "City": address.Person[k]["City"].City,
                        "State": StateUpadate,
                        "Nationality": address.Person[k]["Nationality"].Nation,
                        "Zip": address.Person[k]["Zip Code"].Zip,
                        "PhoneNum": address.Person[k]["Phone Number"].moNum
                    }
    
                }
                address.Person[k] = obj;
                this.save()
                break;
            //Nationality Update
    
            case 4:
                var nationUpdate = read.question("Enter New Nationality:: ")
                while (nameRestriction.test(nationUpdate) == false) {
                    console.log("No Special characters ..Invalid Nationality! ");
                    nationUpdate = read.question(" ReEnter New Nationality: ")
                }
                 obj = {
                    "Name": address.Person[k].Name,
                    "LastName": address.Person[k].LastName,
                    "Address": {
                        "Street": address.Person[k]["Street"].Street,
                        "City": address.Person[k]["City"].City,
                        "State": address.Person[k]["State"].State,
                        "Nationality": nationUpdate,
                        "Zip": address.Person[k]["Zip Code"].Zip,
                        "PhoneNum": address.Person[k]["Phone Number"].moNum
                    }
    
                }
                address.Person[k] = obj;
                this.save()
                break;
    
            //Zip Code Update
            case 5:
                let zipUpdate = read.question("Enter New Zip Code:: ")
                while (contactRestriction.test(zipUpdate) == false && zipUpdate.length != 6) {
                    console.log("Enter 6 digit Number..Invalid Zip Code! ");
                    zipUpdate = read.question("ReEnter New Zip Code:: ")
                }
                 obj = {
                    "Name": address.Person[k].Name,
                    "LastName": address.Person[k].LastName,
                    "Address": {
                        "Street": address.Person[k]["Street"].Street,
                        "City": address.Person[k]["City"].City,
                        "State": address.Person[k]["State"].State,
                        "Nationality": address.Person[k]["Nationality"].Nation,
                        "Zip": zipUpdate,
                        "PhoneNum": address.Person[k]["Phone Number"].moNum
                    }
    
                }
                address.Person[k] = obj;
                this.save()
                break;
    
            //Phone number update
    
            case 6:
                let moNumUpdate = read.question("Enter New Phone Number:: ")
                while (contactRestriction.test(moNumUpdate) == false && moNumUpdate.length != 10) {
                    console.log("Enter 10 digit Phone Number ..Invalid Name! ");
                    moNumUpdate = read.question("ReEnter New Phone Number:: ")
                }
                 obj = {
                    "Name": address.Person[k].Name,
                    "LastName": address.Person[k].LastName,
                    "Address": {
                        "Street": address.Person[k]["Street"].Street,
                        "City": address.Person[k]["City"].City,
                        "State": address.Person[k]["State"].State,
                        "Nationality": address.Person[k]["Nationality"].Nation,
                        "Zip": address.Person[k]["Zip Code"].Zip,
                        "PhoneNum": moNumUpdate,
                    }
    
                }
                address.Person[k] = obj;
                this.save()
                fs.writeFile('AddressBook.json', JSON.stringify(address), 'utf-8');
                break;
    
            case 7:
                console.log("Thank You.....")
                break;
        }
    
    }

    save(address) {
        fs.writeFile('AddressBook.json', JSON.stringify(address), 'utf-8', function (err) {
            if (err) throw err
            console.log('File Saved!!')
        })



}
}
module.exports = {
    Address
}

