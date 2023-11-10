"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertTemperature = void 0;
/**
 * Utility function to convert temperature from one unit of measure to another
 * @param inputValue numberical value
 * @param fromUnit starting unit of measure
 * @param toUnit converted unit of measure
 * @returns value converted to the target unit of measure
 */
function convertTemperature(inputValue, fromUnit, toUnit) {
    switch ("".concat(fromUnit, "-").concat(toUnit)) {
        case 'fahrenheit-celsius':
            var fahrenheitToCelsius = (inputValue - 32) * 5 / 9;
            return fahrenheitToCelsius;
        case 'celsius-fahrenheit':
            return (inputValue * 9 / 5) + 32;
        case 'celsius-kelvin':
            return inputValue + 273.15;
        case 'kelvin-celsius':
            return inputValue - 273.15;
        case 'fahrenheit-kelvin':
            return (inputValue - 32) * 5 / 9 + 273.15;
        case 'kelvin-fahrenheit':
            var kelvinToFahrenheit = (inputValue - 273.15) * 9 / 5 + 32;
            return Math.round((kelvinToFahrenheit + Number.EPSILON) * 100) / 100;
        case 'rankine-kelvin':
            var rankineToKelvin = inputValue * 5 / 9;
            return Math.round((rankineToKelvin + Number.EPSILON) * 100) / 100;
        case 'kelvin-rankine':
            var kelvinToRankine = inputValue * 9 / 5;
            return Math.round((kelvinToRankine + Number.EPSILON) * 100) / 100;
        case 'rankine-fahrenheit':
            return inputValue - 459.67;
        case 'fahrenheit-rankine':
            return inputValue + 459.67;
        default:
            return NaN;
    }
}
exports.convertTemperature = convertTemperature;
