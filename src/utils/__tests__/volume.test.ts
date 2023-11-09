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
});
