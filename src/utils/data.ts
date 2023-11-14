export const sampleResponseData = 	[
	{
		"Question Number": 1,
		"Actual Value": 67.628,
		"Student Response": 67.628,
		"Correct?": "correct"
	},
	{
		"Question Number": 2,
		"Actual Value": 61.0237,
		"Student Response": 61.0237,
		"Correct?": "correct"
	},
	{
		"Question Number": 3,
		"Actual Value": "invalid input",
		"Student Response": 0,
		"Correct?": "correct"
	},
	{
		"Question Number": 4,
		"Actual Value": 273.15,
		"Student Response": 273.15,
		"Correct?": "correct"
	},
	{
		"Question Number": 5,
		"Actual Value": 491.67,
		"Student Response": 491.67,
		"Correct?": "correct"
	},
	{
		"Question Number": 6,
		"Actual Value": "invalid input",
		"Student Response": 0,
		"Correct?": "correct"
	},
	{
		"Question Number": 7,
		"Actual Value": -459.67,
		"Student Response": -459.67,
		"Correct?": "correct"
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