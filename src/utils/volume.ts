import bigNumber from 'bignumber.js'



const CONVERSION_RATES = {
  'liters-gallons': 0.26417,
  'gallons-liters': 3.78541,
  'liters-tablespoons': 67.628,
  'tablespoons-liters': 0.01479,
  'cubic-inches-cubic-feet': 0.00058,
  'cubic-feet-cubic-inches': 1728,
  'cups-liters': 0.236588,
  'cubic-feet-liters': 28.3168,
  'tablespoons-gallons': 0.00390625,
  'gallons-tablespoons': 256,
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
    return 'invalid input';
  }

  if (fromUnit === toUnit) {
    return inputValue;
  }

  if (inputValue > 1e20) {
    const bigInputValue = new bigNumber(inputValue);
    const conversionRate = CONVERSION_RATES[`${fromUnit}-${toUnit}`];
    const bigResult = bigInputValue.times(conversionRate);
    return bigResult.toString();
  }

  const conversionRate = CONVERSION_RATES[`${fromUnit}-${toUnit}`];
  if (conversionRate === undefined) {
    return 'invalid input';
  }

  const result = inputValue * conversionRate;
  return Math.round(result * 100000) / 100000;
}

export type VolumeUnitOfMeasure = 'liters' | 'gallons' | 'tablespoons' | 'cubic-inches' | 'cubic-feet' | 'cups'
export type UnSupportedVolumeUnitOfMeasure = 'milliliters' | 'pints' | 'quarts' | 'cubic-centimeters' | 'cubic-meters' | 'cubic-yards';
export type InvalidTypes = 'invalid input' | 'dog' | '';
export type VolumeUnitOfMeasureType = VolumeUnitOfMeasure | UnSupportedVolumeUnitOfMeasure | InvalidTypes;
export type PositiveNumberOnly = number | InvalidTypes;