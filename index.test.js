const { calculator1 } = require("./index");

describe("calculator1", () => {
    //1.1
    test("has no arguments in function parameter", () => {
        expect(calculator1()).toBe(false);
    });

    //1.2
    test("parameter is number and multiplyed by it self", () => {
        expect(calculator1()).toBe(val);
    });
});
