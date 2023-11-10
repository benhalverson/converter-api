import { Request, Response } from "express";
import { createReadStream } from "fs";
import csv from "csv-parser";
import { convertTemperature } from "../utils/tempature";
import { convertVolume } from "../utils/volume";

export const uploads = (req: Request, res: Response) => {
	// Check if the file was successfully uploaded by multer.
	if (!req?.file) {
		return res.json({
			status: "error",
			message: "No file uploaded",
		});
	}

	// Read the uploaded CSV file.
	const csvFile = req.file?.path;

	// Initialize an array to store the response for each row.
	const responseArray: string[] = [];

	// Read and process the CSV file.
	try {
		createReadStream(csvFile)
			.pipe(csv())
			.on("data", (row) => {
				const inputNumbericalValue = parseFloat(row["Input value"]);
				const inputUnitOfMeasure = row["Unit of Measure"].trim().toLowerCase();
				const targetUnitOfMeasure = row["Target Unit of Measure"]
					.trim()
					.toLowerCase();
				const studentResponse = parseFloat(row["Student Response"]);
				// const expectedOutput = row["Output"].trim().toLowerCase();

				// compare the student response with the expected output
				const tempIsCorrect =
          convertTemperature(inputNumbericalValue, inputUnitOfMeasure, targetUnitOfMeasure) === studentResponse;
				const volumeIsCorrect =
          convertVolume(inputNumbericalValue, inputUnitOfMeasure, targetUnitOfMeasure) === studentResponse;

				const output =
          tempIsCorrect || volumeIsCorrect ? "correct" : "incorrect";

				const actualTemp = convertTemperature(
					inputNumbericalValue,
					inputUnitOfMeasure,
					targetUnitOfMeasure
				);
				const actualVolume = convertVolume(
					inputNumbericalValue,
					inputUnitOfMeasure,
					targetUnitOfMeasure
				);
				console.log("actualTemp", actualTemp, "actualVolume", actualVolume);

				responseArray.push(output);
			})
			.on("end", () => {
				const responseArrayWithQuestionNumber = responseArray.map(
					(response, index) => {
						return `Question ${index + 1}: ${response}`;
					}
				);

				res.json(responseArrayWithQuestionNumber);
			});
	} catch (error) {
		console.log(error);
	}
};
