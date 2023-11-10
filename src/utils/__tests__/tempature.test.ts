import { convertTemperature } from "../tempature";


describe("convertTemperature", () => {
	it("should convert fahrenheit to celsius", () => {
		expect(convertTemperature(32, "fahrenheit", "celsius")).toBeCloseTo(0.00);
		expect(convertTemperature(68, "fahrenheit", "celsius")).toBeCloseTo(20);
		expect(convertTemperature(212, "fahrenheit", "celsius")).toBe(100);
		expect(convertTemperature(-459.67, "fahrenheit", "celsius")).toBeCloseTo(-273.15);

	});

	it("should convert celsius to fahrenheit", () => {
		expect(convertTemperature(0, "celsius", "fahrenheit")).toBe(32);
		expect(convertTemperature(20, "celsius", "fahrenheit")).toBe(68);
		expect(convertTemperature(100, "celsius", "fahrenheit")).toBe(212);
		expect(convertTemperature(-273.15, "celsius", "fahrenheit")).toBeCloseTo(-459.67);
	});

	it("should convert celsius to kelvin", () => {
		expect(convertTemperature(0, "celsius", "kelvin")).toBe(273.15);
		expect(convertTemperature(20, "celsius", "kelvin")).toBe(293.15);
		expect(convertTemperature(100, "celsius", "kelvin")).toBe(373.15);
		expect(convertTemperature(-273.15, "celsius", "kelvin")).toBe(0);
	});

	it("should convert kelvin to celsius", () => {
		expect(convertTemperature(273.15, "kelvin", "celsius")).toBe(0);
		expect(convertTemperature(293.15, "kelvin", "celsius")).toBe(20);
		expect(convertTemperature(373.15, "kelvin", "celsius")).toBe(100);
		expect(convertTemperature(-19, "kelvin", "celsius")).toBe(-292.15);
		expect(convertTemperature(0, "kelvin", "celsius")).toBe(-273.15);
	});

	it("should convert fahrenheit to kelvin", () => {
		expect(convertTemperature(32, "fahrenheit", "kelvin")).toBe(273.15);
		expect(convertTemperature(68, "fahrenheit", "kelvin")).toBe(293.15);
		expect(convertTemperature(212, "fahrenheit", "kelvin")).toBe(373.15);
		expect(convertTemperature(-459.67, "fahrenheit", "kelvin")).toBe(0);
	});

	it("should convert kelvin to fahrenheit", () => {
		expect(convertTemperature(273.15, "kelvin", "fahrenheit")).toBe(32);
		expect(convertTemperature(293.15, "kelvin", "fahrenheit")).toBe(68);
		expect(convertTemperature(373.15, "kelvin", "fahrenheit")).toBeCloseTo(212);
		expect(convertTemperature(0, "kelvin", "fahrenheit")).toBeCloseTo(-459.67);
		expect(convertTemperature(-100, "kelvin", "fahrenheit")).toBeCloseTo(-639.67);
	});

	it("should convert rankine to kelvin", () => {
		expect(convertTemperature(0, "rankine", "kelvin")).toBe(0);
		expect(convertTemperature(459.67, "rankine", "kelvin")).toBeCloseTo(255.37);
		expect(convertTemperature(100, "rankine", "kelvin")).toBeCloseTo(55.56);
		expect(convertTemperature(671.67, "rankine", "kelvin")).toBeCloseTo(373.15);
	});

	it("should convert kelvin to rankine", () => {
		expect(convertTemperature(0, "kelvin", "rankine")).toBe(0);
		expect(convertTemperature(255.37, "kelvin", "rankine")).toBeCloseTo(459.67);
		expect(convertTemperature(372.03, "kelvin", "rankine")).toBeCloseTo(669.65);
    
	});

	it("should convert rankine to fahrenheit", () => {
		expect(convertTemperature(0, "rankine", "fahrenheit")).toBe(-459.67);
		expect(convertTemperature(459.67, "rankine", "fahrenheit")).toBe(0);
		expect(convertTemperature(671.67, "rankine", "fahrenheit")).toBeCloseTo(212);
	});

	it("should convert fahrenheit to rankine", () => {
		expect(convertTemperature(-459.67, "fahrenheit", "rankine")).toBe(0);
		expect(convertTemperature(0, "fahrenheit", "rankine")).toBe(459.67);
		expect(convertTemperature(212, "fahrenheit", "rankine")).toBeCloseTo(671.67);
		expect(convertTemperature(84.2, "fahrenheit", "rankine")).toBeCloseTo(543.87);
	});

	it("should throw an error for invalid input", () => {
		expect(convertTemperature(0, "invalid", "invalid")).toBe(NaN);
	});

	it("should handle upper bounds", () => {
		expect(convertTemperature(50000000, "fahrenheit", "celsius")).toBeCloseTo(27777760);
	});

	it("should handle lower bounds", () => {
		expect(convertTemperature(-500, "fahrenheit", "celsius")).toBeCloseTo(-295.56);
	});

	it("should handle absolute zero (Kelvin)", () => {
		expect(convertTemperature(0, "kelvin", "celsius")).toBe(-273.15);
	});

});