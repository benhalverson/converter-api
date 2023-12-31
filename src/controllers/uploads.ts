import { Request, Response } from "express";
import { createReadStream } from "fs";
import csv from "csv-parser";
import { convertTemperature } from "../utils/tempature";
import { convertVolume } from "../utils/volume";

export const uploads = (req: Request, res: Response) => {
	// Check if the file was successfully uploaded by multer.
	if (!req?.file) {
		return res.status(400).json({
			status: "error",
			message: "No file uploaded",
		});
	}

	// Read the uploaded CSV file.
	const csvFile = req.file?.path;

	const responseArray: ResponseObj[] = [];

	// Read and process the CSV file.
	try {
		createReadStream(csvFile)
			.pipe(csv())
			.on("data", (row) => {
				const inputNumbericalValue = parseInt(row["Input value"]);
				const inputUnitOfMeasure = row["Unit of Measure"];
				const targetUnitOfMeasure = row["Target Unit of Measure"];
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

				responseArray.push({
					"questionNumber": responseArray.length + 1,
					"actualValue": actualTemp 
						? actualTemp
						: volumeIsCorrect
							? actualVolume
							: actualVolume,
					"studentResponse": studentResponse,
					"output": output,
				});
			})
			.on("end", () => {
				res.json(responseArray);	
			});
	} catch (error) {
		res.status(500).json({
			status: "error",
			message: "Something went wrong",
		}); 
	}
};


type ResponseObj = {
	"questionNumber": number;
	"actualValue": number | string;
	"studentResponse": number;
	"output": string;
}