
var assert = require('chai').assert
const fs = require('fs');

/*   
*  Test case for Inventory Data Management
*/
const filedata = fs.readFileSync('../OOPProgram/inventoryDatManagement.json');
const text = JSON.parse(filedata);

describe('Stock', () => {
    it(' Data must be JSON object', () => {
        assert.isObject(text);
    });
    describe(' JSON input for Rice ', () => {

        it("Name should be string only", () => {

            for (let i = 0; i < text.Rice.length; i++) {
                let arr = text.Rice[i].name;
                assert.typeOf(arr, 'string');
            }
        });

        it("price value should be number only", () => {

            for (let i = 0; i < text.Rice.length; i++) {
                var arr = text.Rice[i].price;
                assert.typeOf(arr, 'number');
            }
        });

    });
    describe('JSON input for Wheats ', () => {

        it("Name should be string only", () => {

            for (let i = 0; i < text.Wheats.length; i++) {
                let arr = text.Wheats[i].name;
                assert.typeOf(arr, 'string');
            }
        });

        it("price value should be number only", () => {

            for (let i = 0; i < text.Wheats.length; i++) {
                var arr = text.Wheats[i].price;
                assert.typeOf(arr, 'number');
            }
        });

    });
});