let assert = require(`assert`);
let {sum} = require(`./sumNew.js`)
describe (`sumNew`, ()=>{
    it (`first test`,()=>{
        expect(sum(1,2)).to.equal(3)
    })
})

