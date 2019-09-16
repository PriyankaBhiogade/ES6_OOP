
var assert = require('chai').assert
 const obj = require('../OOPProgram/regularExpression')
const fileStream = require('fs');
describe('RegularExpression' ,() => {
    it('Content of File Should neither NULL nor UNDEFINED', () =>{
       const input = fileStream.readFileSync('./String.text');
        assert.exists(input);
        assert.isNotEmpty(input)
    });
});




