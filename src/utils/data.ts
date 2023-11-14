export const sampleResponseData = [
	{
		"questionNumber": 1,
		"actualValue": 67.628,
		"studentResponse": 67.628,
		"output": "correct"
	},
	{
		"questionNumber": 2,
		"actualValue": 61.0237,
		"studentResponse": 61.0237,
		"output": "correct"
	},
	{
		"questionNumber": 3,
		"actualValue": "invalid input",
		"studentResponse": 0,
		"output": "correct"
	},
	{
		"questionNumber": 4,
		"actualValue": 273.15,
		"studentResponse": 273.15,
		"output": "correct"
	},
	{
		"questionNumber": 5,
		"actualValue": 491.67,
		"studentResponse": 491.67,
		"output": "correct"
	},
	{
		"questionNumber": 6,
		"actualValue": "invalid input",
		"studentResponse": 0,
		"output": "correct"
	},
	{
		"questionNumber": 7,
		"actualValue": -459.67,
		"studentResponse": -459.67,
		"output": "correct"
	}
];

export const sampleCSVInput = `Input value,Unit of Measure,Target Unit of Measure,Student Response,Output
1,liters,tablespoons,67.628,
1,liters,cubic-inches,61.0237,
32,fahrenheit,celsius,0,
32,fahrenheit,kelvin,273.15,
32,fahrenheit,rankine,491.67,
0,rankine,kelvin,0,
0,rankine,fahrenheit,-459.67,
`;