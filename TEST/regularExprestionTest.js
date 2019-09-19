var assert = require('chai').assert
const fs = require('fs');

/*   
*  Test case for Regular Exprestion
*/
const input = fs.readFileSync('../OOPProgram/String.text');

describe('RegularExpression', () => {
    it(`Content of File is exists`, () => {
        assert.exists(input);
    });
    it('Content of File is Not Empty', () => {
        assert.isNotEmpty(input);
    });
});
  