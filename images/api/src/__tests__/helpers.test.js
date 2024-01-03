const {
    checkString
} = require('./../helpers/helper.js');

//write a test for the helper function
test("check string", () => {
    expect(checkString("hello")).toBe(true);
    expect(checkString("Seppe Verbeken")).toBe(true);

    expect(checkString(1)).toBe(false);
    expect(checkString(true)).toBe(false);
    expect(checkString("uwenfowengf34lwejvdsnbcnweoioncds n9-0g3revjnlwerfv")).toBe(false);
    expect(checkString("i")).toBe(false);
    expect(checkString(null)).toBe(false);
    expect(checkString(undefined)).toBe(false);
    expect(checkString(NaN)).toBe(false);
})