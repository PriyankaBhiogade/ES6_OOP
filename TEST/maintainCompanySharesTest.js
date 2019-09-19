
var assert = require('chai').assert
const fs = require('fs');

/*   
*  Test case for Maintain Company Shares
*/

const filedata = fs.readFileSync('../OOPProgram/maintainCompanyShares.json');
const text = JSON.parse(filedata);

describe('Maintain Company Shares', () => {
    it('Data must be JSON object', () => {
        assert.isObject(text);
    });

    it("Symbol should be string ", () => {
        for (let i = 0; i < text.company.length; i++) {
            const arr = text.company[i].symbol;
            assert.isString(arr, 'string'); 
        }
    });

    it("Price Per Shares should be number ", () => {
        for (let i = 0; i < text.company.length; i++) {
            let arr = text.company[i].pricePerShares;
            assert.typeOf(arr, 'number');
        }
    });

    it("Check File empty or not", () => {
        assert.isTrue(isNaN(filedata));
    });
});
