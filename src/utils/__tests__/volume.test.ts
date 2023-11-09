import {convertVolume} from '../volume';

describe('convertVolume', () => {

  it('the function should be defined', () => {
    expect(convertVolume).toBeDefined();
  });
  it('should convert liters to gallons', () => {
    expect(convertVolume(1, 'liters', 'gallons')).toBe(0.26417);
    expect(convertVolume(2, 'liters', 'gallons')).toBe(0.52834);
    expect(convertVolume(3, 'liters', 'gallons')).toBe(0.79251);
  });
  it('should convert gallons to liters', () => {
    expect(convertVolume(1, 'gallons', 'liters')).toBe(3.78541);
    expect(convertVolume(2, 'gallons', 'liters')).toBe(7.57082);
    expect(convertVolume(3, 'gallons', 'liters')).toBe(11.35623);
  });


  it('should convert liters to tablespoons', () => {
    expect(convertVolume(1, 'liters', 'tablespoons')).toBeCloseTo(67.628);
    expect(convertVolume(2, 'liters', 'tablespoons')).toBeCloseTo(135.256);
    expect(convertVolume(3, 'liters', 'tablespoons')).toBeCloseTo(202.884);
  });

  it('should convert tablespoons to liters', () => {
    expect(convertVolume(1, 'tablespoons', 'liters')).toBeCloseTo(0.01479);
    expect(convertVolume(2, 'tablespoons', 'liters')).toBeCloseTo(0.02957);
    expect(convertVolume(3, 'tablespoons', 'liters')).toBeCloseTo(0.04436);
  });

  it('should convert cubic-inches to cubic-feet', () => {
    expect(convertVolume(1, 'cubic-inches', 'cubic-feet')).toBe(0.00058);
    expect(convertVolume(2, 'cubic-inches', 'cubic-feet')).toBe(0.00116);
    expect(convertVolume(3, 'cubic-inches', 'cubic-feet')).toBe(0.00174);
  });

  it('should convert cubic-feet to cubic-inches', () => {
    expect(convertVolume(1, 'cubic-feet', 'cubic-inches')).toBe(1728);
    expect(convertVolume(2, 'cubic-feet', 'cubic-inches')).toBe(3456);
    expect(convertVolume(3, 'cubic-feet', 'cubic-inches')).toBe(5184);
  });

  it('should convert cups to liters', () => {
    expect(convertVolume(1, 'cups', 'liters')).toBeCloseTo(0.236588);
    expect(convertVolume(2, 'cups', 'liters')).toBeCloseTo(0.473176);
    expect(convertVolume(3, 'cups', 'liters')).toBeCloseTo(0.709764);
  });

  it('should convert cubic-feet to liters', () => {
    expect(convertVolume(0.0353147, 'cubic-feet', 'liters')).toBeCloseTo(1);
  });

  // write tests for these cases
//   0,Celsius,Fahrenheit,32,

// 0,Celsius,Kelvin,273.15,
// 0,Celsius,Rankine,491.67,
// 32,Fahrenheit,Celsius,0,
// 32,Fahrenheit,Kelvin,273.15,
// 32,Fahrenheit,Rankine,491.67,
// 273.15,Kelvin,Celsius,0,
// 273.15,Kelvin,Fahrenheit,32,
// 273.15,Kelvin,Rankine,491.67,
// 491.67,Rankine,Celsius,0,
// 491.67,Rankine,Fahrenheit,32,
// 491.67,Rankine,Kelvin,273.15,
// 1,liters,tablespoons,67.628,
// 1,liters,cubic-inches,61.0237,
// 1,liters,cups,4.16667,
// 1,liters,cubic-feet,0.0353147,
// 1,liters,gallons,0.264172,
// 67.628,tablespoons,liters,1,
// 67.628,tablespoons,cubic-inches,72.3434,
// 67.628,tablespoons,cups,4.73598,
// 67.628,tablespoons,cubic-feet,0.0472458,
// 67.628,tablespoons,gallons,0.0178606,
it('should convert tablespoons to gallons', () => {
  expect(convertVolume(67.628, 'tablespoons', 'gallons')).toBeCloseTo(0.0178606);
  expect(convertVolume(1, 'tablespoons', 'gallons')).toBeCloseTo(0.0001479);
  expect(convertVolume(2, 'tablespoons', 'gallons')).toBeCloseTo(0.02957);
  expect(convertVolume(3, 'tablespoons', 'gallons')).toBeCloseTo(0.04436);
  expect(convertVolume(-3, 'tablespoons', 'gallons')).toBeFalsy();
})
// 61.0237,cubic-inches,liters,1,
// 61.0237,cubic-inches,tablespoons,1.37499,
// 61.0237,cubic-inches,cups,0.004329,
// 61.0237,cubic-inches,cubic-feet,0.0000173,
// 61.0237,cubic-inches,gallons,0.000143,
// 4.16667,cups,liters,1,
// 4.16667,cups,tablespoons,16,
// 4.16667,cups,cubic-inches,239.833,
// 4.16667,cups,cubic-feet,0.148946,
// 4.16667,cups,gallons,0.03477,
// 0.0353147,cubic-feet,liters,1,
// 0.0353147,cubic-feet,tablespoons,1915.01,
// 0.0353147,cubic-feet,cubic-inches,1728,
// 0.0353147,cubic-feet,cups,7.48052,
// 0.0353147,cubic-feet,gallons,0.803563,
// 0.264172,gallons,liters,1,
// 0.264172,gallons,tablespoons,256,
// 0.264172,gallons,cubic-inches,231,
// 0.264172,gallons,cups,16.6535,
// 0.264172,gallons,cubic-feet,0.00378541,
// 84.2,Fahrenheit,Rankine,543.87,
// 317.33,Kelvin,Fahrenheit,111.52,
// 777,Rankine,Fahrenheit,317.33,
// 25.6,cups,liters,6.1,
});
