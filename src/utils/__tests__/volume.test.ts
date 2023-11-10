import BigNumber from "bignumber.js";
import { convertVolume } from "../volume";

describe("convertVolume", () => {
	it("convertVolume function should be defined", () => {
		expect(convertVolume).toBeDefined();
	});

	it("should convert liters to gallons", () => {
		expect(convertVolume(1, "liters", "gallons")).toBeCloseTo(0.26417);
		expect(convertVolume(2, "liters", "gallons")).toBeCloseTo(0.52834);
		expect(convertVolume(3, "liters", "gallons")).toBeCloseTo(0.79251);
	});

	it("should convert gallons to liters", () => {
		expect(convertVolume(1, "gallons", "liters")).toBeCloseTo(3.78541);
		expect(convertVolume(2, "gallons", "liters")).toBeCloseTo(7.57082);
		expect(convertVolume(3, "gallons", "liters")).toBeCloseTo(11.35623);
	});

	it("should convert liters to tablespoons", () => {
		expect(convertVolume(1, "liters", "tablespoons")).toBeCloseTo(67.628);
		expect(convertVolume(2, "liters", "tablespoons")).toBeCloseTo(135.256);
		expect(convertVolume(3, "liters", "tablespoons")).toBeCloseTo(202.884);
	});

	it("should convert tablespoons to liters", () => {
		expect(convertVolume(1, "tablespoons", "liters")).toBeCloseTo(0.01479);
		expect(convertVolume(2, "tablespoons", "liters")).toBeCloseTo(0.02957);
		expect(convertVolume(3, "tablespoons", "liters")).toBeCloseTo(0.04436);
	});

	it("should convert cubic-inches to cubic-feet", () => {
		expect(convertVolume(1, "cubic-inches", "cubic-feet")).toBeCloseTo(
			0.0005787
		);
		expect(convertVolume(2, "cubic-inches", "cubic-feet")).toBeCloseTo(
			0.0011574
		);
		expect(convertVolume(3, "cubic-inches", "cubic-feet")).toBeCloseTo(
			0.0017361
		);
	});

	it("should convert cubic-feet to cubic-inches", () => {
		expect(convertVolume(1, "cubic-feet", "cubic-inches")).toBeCloseTo(1728);
		expect(convertVolume(2, "cubic-feet", "cubic-inches")).toBeCloseTo(3456);
		expect(convertVolume(3, "cubic-feet", "cubic-inches")).toBeCloseTo(5184);
	});

	it("should convert cups to liters", () => {
		expect(convertVolume(1, "cups", "liters")).toBeCloseTo(0.236588);
		expect(convertVolume(2, "cups", "liters")).toBeCloseTo(0.473176);
		expect(convertVolume(3, "cups", "liters")).toBeCloseTo(0.709764);
	});

	it("should convert cubic-feet to liters", () => {
		expect(convertVolume(0.0353147, "cubic-feet", "liters")).toBeCloseTo(1);
		expect(convertVolume(0.0706294, "cubic-feet", "liters")).toBeCloseTo(2);
		expect(convertVolume(1, "cubic-inches", "liters")).toBeCloseTo(0.0163871);
		expect(convertVolume(2, "cubic-inches", "liters")).toBeCloseTo(0.0327742);
		expect(convertVolume(3, "dog", "liters")).toBe("invalid input");
	});

	it("should convert tablespoons to gallons", () => {
		expect(convertVolume(67, "tablespoons", "gallons")).toBeCloseTo(
			0.264171875
		);
		expect(convertVolume(1, "tablespoons", "gallons")).toBeCloseTo(0.0001479);
		expect(convertVolume(2, "tablespoons", "gallons")).toBeCloseTo(0.007);
		expect(convertVolume(3, "tablespoons", "gallons")).toBeCloseTo(0.011);
	});

	it("should handle extremely large values", () => {
		// expect(convertVolume(1e20, "gallons", "liters")).toBeCloseTo(3785410000000000300000);
		const inputValue = new BigNumber("1e20");
		const result = convertVolume(inputValue.toNumber(), "gallons", "liters");
		const expectedResult = new BigNumber("378541000000000030000");

		expect(result).toBe(expectedResult.toNumber());
	});

	it("should handle non-integer values", () => {
		expect(convertVolume(0.5, "gallons", "liters")).toBeCloseTo(1.892705);
	});

	it("should handle unsupported units", () => {
		const result = convertVolume(1, "milliliters", "gallons");
		console.log("result", result);
		// expect(convertVolume(1, "gallons", "milliliters")).toBe("Unsupported unit");
	});

	it("should handle same units", () => {
		expect(convertVolume(42, "cubic-feet", "cubic-feet")).toBe(42);
	});

	it("should handle negative inputs", () => {
		expect(convertVolume(-1, "liters", "gallons")).toBe("invalid input");
	});

	it("should handle cases where no conversion is needed", () => {
		expect(convertVolume(1, "cubic-inches", "cubic-inches")).toBe(1);
	});
});
