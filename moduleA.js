module.exports = function () {
    let value = 0;
    return {
        add: function (arg) {
            value += arg;
        },
        showValue: function () {
            return value;
        }
    };
};