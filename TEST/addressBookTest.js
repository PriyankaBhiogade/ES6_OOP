
var assert = require('chai').assert
const fs = require('fs');

const filedata = fs.readFileSync("../OOPProgram/addressBook.json");
const text = JSON.parse(filedata);

/*   
*  Test case for Address Book
*/
describe('AddressBook', () => {
    it('Data must be JSON object', () => {
        assert.isObject(text);
    });
    it('Name should be string', () => {
        for (let i = 0; i < text.Person.length; i++) {
            let arr = text.Person[i].Name;
            assert.isString(arr, 'string');
        }
    });
    it("Phone Number should be number ", () => {
        for (var i = 0; i < text.Person.length; i++) {
            var arr = text.Person[i].PhoneNum;
            assert.isNotNumber(arr, 'string');
        }
    });

    it("Check File empty or not", () => {
        assert.isTrue(isNaN(filedata));
    });
});
