
const moduleA = require('../moduleA.js')();
jest.mock('../moduleA.js', () => () => {
    this.instance = this.instance || {
        add: jest.fn(),
        showValue: jest.fn().mockImplementation(() => 1000)
    };
    return this.instance;
});

/*BAD CASE
jest.mock('../moduleA.js', () => () => {
    return  {
        add: jest.fn(),
        showValue: jest.fn().mockImplementation(() => 1000)
    };
});
*/

describe("", () => {

    describe("", () => {
        test("", async () => {
            require("../app.js");
            expect(moduleA.add).toHaveBeenCalled();
            expect(moduleA.showValue).toHaveBeenCalled();
        });
    });
});