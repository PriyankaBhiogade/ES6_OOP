
var assert = require('chai').assert
const fs = require('fs');

/* 
*  Test case for Stock Report
*/
const filedata = fs.readFileSync('../OOPProgram/stockReport.json');
const text = JSON.parse(filedata);

describe('Stock Report', () => {
    it('Content of file should neither NULL nor UNDEFINED', () => {
        assert.exists(filedata);
    });
    it('Data must be JSON object', () => {
        assert.isObject(text);
    });

    it("StockNames should be string ", () => {
        for (let i = 0; i < text.Stock.length; i++) {
            const arr = text.Stock[i].StockNames;
            assert.isString(arr, 'string'); 
        }
    });
    it("Number of Share should be number ", () => {
        for (let i = 0; i < text.Stock.length; i++) {
            let arr = text.Stock[i].NumberofShare;
            assert.typeOf(arr, 'number');
        }
    });

});