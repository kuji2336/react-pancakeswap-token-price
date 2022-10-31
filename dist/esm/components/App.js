import React, { useState } from 'react';
var MyCounter = function (_a) {
    var _b = _a.value, value = _b === void 0 ? 0 : _b;
    var _c = useState(value), counter = _c[0], setCounter = _c[1];
    var onMinus = function () {
        setCounter(function (prev) { return prev - 1; });
    };
    var onPlus = function () {
        setCounter(function (prev) { return prev + 1; });
    };
    return (React.createElement("div", null,
        React.createElement("h1", null,
            "Counter: ",
            counter),
        React.createElement("button", { onClick: onMinus }, "-"),
        React.createElement("button", { onClick: onPlus }, "+")));
};
export default MyCounter;
//# sourceMappingURL=App.js.map