let {expect}  = require(`chai`);
let rgbToHex = require(`./rgbToHexColor.js`)
describe("rgbToHex", () => {
    it("converts black to hex", () => {
     expect(rgbToHexColor(0, 0, 0)).to.equal("#000000");
    });
});