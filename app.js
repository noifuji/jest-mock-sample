const moduleA = require("./moduleA.js")();

module.exports = (()=>{
    console.log(moduleA.showValue());
    moduleA.add(10);
    console.log(moduleA.showValue());
})();