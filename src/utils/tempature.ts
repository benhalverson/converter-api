import { BigNumber } from "bignumber.js";

/**
 * Utility function to convert temperature from one unit of measure to another
 * @param inputValue numerical value
 * @param fromUnit starting unit of measure
 * @param toUnit converted unit of measure
 * @returns value converted to the target unit of measure
 */
export function convertTemperature(inputValue: number, fromUnit: string, toUnit: string): number {
	const bigInputValue = new BigNumber(inputValue);

	const conversions: { [key: string]: (value: BigNumber) => BigNumber } = {
		"fahrenheit-celsius": (value) => value.minus(32).times(5).dividedBy(9),
		"celsius-fahrenheit": (value) => value.times(9).dividedBy(5).plus(32),
		"celsius-kelvin": (value) => value.plus(273.15),
		"kelvin-celsius": (value) => value.minus(273.15),
		"fahrenheit-kelvin": (value) => value.minus(32).times(5).dividedBy(9).plus(273.15),
		"kelvin-fahrenheit": (value) => value.minus(273.15).times(9).dividedBy(5).plus(32),
		"rankine-kelvin": (value) => value.times(5).dividedBy(9),
		"kelvin-rankine": (value) => value.times(9).dividedBy(5),
		"rankine-fahrenheit": (value) => value.minus(459.67),
		"fahrenheit-rankine": (value) => value.plus(459.67),
	};

	const conversionKey = `${fromUnit}-${toUnit}`;
	const conversionFunction = conversions[conversionKey];

	if (conversionFunction) {
		const result = conversionFunction(bigInputValue);
		return result.toNumber(); 
	} else {
		return NaN;
	}
}