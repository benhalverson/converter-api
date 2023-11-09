/**
 * Utilty functon to covert volume from one unit to another
 * @param inputValue numerical value
 * @param fromUnit starting unit of measure
 * @param toUnit converted unit of measure
 * @returns value converted to the target unit of measure
 */

export function convertVolume(inputValue: number, fromUnit: string, toUnit: string) {
  switch(`${fromUnit}-${toUnit}`) {
    case 'liters-gallons':
      return inputValue * 0.26417;
    case 'gallons-liters':
      return inputValue * 3.78541;
    case 'liters-tablespoons':
      return inputValue * 67.628;
    case 'tablespoons-liters':
      return inputValue * 0.01479;
    case 'cubic-inches-cubic-feet':
      return inputValue * 0.00058;
    case 'cubic-feet-cubic-inches':
      return inputValue * 1728;
    default:
      return NaN;
  }
}