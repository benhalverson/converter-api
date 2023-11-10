"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertVolume = void 0;
var bignumber_js_1 = require("bignumber.js");
/**
 * Mapping of supported volume units of measure to their conversion rates
 */
var CONVERSION_RATES = {
    "milliliters-liters": 0.001,
    "liters-milliliters": 1000,
    "liters-gallons": 0.26417,
    "gallons-liters": 3.78541,
    "liters-tablespoons": 67.628,
    "tablespoons-liters": 0.01479,
    "cubic-inches-cubic-feet": 0.00058,
    "cubic-feet-cubic-inches": 1728,
    "cups-liters": 0.236588,
    "cubic-feet-liters": 28.3168,
    "tablespoons-gallons": 0.00390625,
    "gallons-tablespoons": 256,
};
/**
 * Utilty functon to covert volume from one unit to another
 * @param inputValue numerical value
 * @param fromUnit starting unit of measure
 * @param toUnit converted unit of measure
 * @returns value converted to the target unit of measure
 */
function convertVolume(inputValue, fromUnit, toUnit) {
    if (inputValue < 0) {
        return "invalid input";
    }
    if (fromUnit === toUnit) {
        return inputValue;
    }
    if (inputValue > 1e20 && inputValue !== undefined) {
        var bigInputValue = new bignumber_js_1.default(inputValue);
        var conversionRate_1 = CONVERSION_RATES["".concat(fromUnit, "-").concat(toUnit)];
        var bigResult = bigInputValue.times(conversionRate_1);
        return bigResult.toString();
    }
    var conversionRate = CONVERSION_RATES["".concat(fromUnit, "-").concat(toUnit)];
    if (conversionRate === undefined) {
        return "invalid input";
    }
    var result = inputValue * conversionRate;
    return Math.round(result * 100000) / 100000;
}
exports.convertVolume = convertVolume;
