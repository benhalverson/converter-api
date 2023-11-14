import bigNumber from "bignumber.js";

/**
 * Mapping of supported volume units of measure to their conversion rates
 */
const CONVERSION_RATES: ConversionRates = {
	"milliliters-liters": 0.001,
	"liters-milliliters": 1000,
	"liters-gallons": 0.26417,
	"liters-cubic-inches": 61.0237,
	"liters-cubic-feet": 0.0353147,
	"liters-cups": 4.22675,
	"gallons-liters": 3.78541,
	"liters-tablespoons": 67.628,
	"tablespoons-liters": 0.01479,
	"cubic-inches-cubic-feet": 0.00058,
	"cubic-feet-cubic-inches": 1728,
	"cubic-inches-liters": 0.0163871,
	"cups-liters": 0.236588,
	"cubic-feet-liters": 28.3168,
	"tablespoons-gallons": 0.00390625,
	"tablespoons-liter": 0.0147868,
	"tablespons-cubic-inches": 1.10823,
	"tablespoons-cubic-feet": 0.00052219,
	"gallons-tablespoons": 256,
};

/**
 * Utilty functon to covert volume from one unit to another
 * @param inputValue numerical value
 * @param fromUnit starting unit of measure
 * @param toUnit converted unit of measure
 * @returns value converted to the target unit of measure
 */
export function convertVolume(inputValue: number, fromUnit: VolumeUnitOfMeasureType, toUnit: VolumeUnitOfMeasureType): string | number {
	if (inputValue < 0) {
		return "invalid input";
	}

	if (fromUnit === toUnit) {
		return inputValue;
	}

	if (inputValue > 1e20 && inputValue !== undefined) {
		const bigInputValue = new bigNumber(inputValue);
		const conversionRate = CONVERSION_RATES[`${fromUnit}-${toUnit}`];
		const bigResult = bigInputValue.times(conversionRate as number);
		return bigResult.toString();
	}

	const conversionRate = CONVERSION_RATES[`${fromUnit}-${toUnit}`];
	if (conversionRate === undefined) {
		return "invalid input";
	}

	const result = inputValue * conversionRate;
	return Math.round(result * 100000) / 100000;
}

type VolumeUnitOfMeasure = "liters" | "gallons" | "tablespoons" | "cubic-inches" | "cubic-feet" | "cups"
type UnSupportedVolumeUnitOfMeasure = "milliliters" | "pints" | "quarts" | "cubic-centimeters" | "cubic-meters" | "cubic-yards";
type InvalidTypes = "invalid input" | "dog" | "";
type VolumeUnitOfMeasureType = VolumeUnitOfMeasure | UnSupportedVolumeUnitOfMeasure | InvalidTypes;
type ConversionRates = {
  [key: string]: number;
};
