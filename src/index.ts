import express, { Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import fs from "fs";
import csv from "csv-parser";
import multer from "multer";
import { convertTemperature } from './utils/tempature';

const app = express();
const upload = multer({ dest: 'uploads/' }); // Define the destination directory for uploaded files.

const PORT = 3000;

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(helmet());

app.get("/health", (req: Request, res: Response) => {
  res.json({
    status: "ok",
  });
});

app.post('/temp', upload.single('csvFile'), (req, res) => {
  // Check if the file was successfully uploaded by multer.
  if (!req?.file) {
    return res.json({
      status: 'error',
      message: 'No file uploaded',
    });
  }

  // Read the uploaded CSV file.
  const csvFile = req.file?.path;

  // Initialize an array to store the response for each row.
  const responseArray:string[] = [];
  

  // Read and process the CSV file.
  fs.createReadStream(csvFile)
    .pipe(csv())
    .on('data', (row) => {
      const inputNumbericalValue = parseFloat(row['Input value']);
      const inputUnitOfMeasure = row['Unit of Measure'].trim().toLowerCase();
      const targetUnitOfMeasure = row['Target Unit of Measure'].trim().toLowerCase();
      const studentResponse = parseFloat(row['Student Response']);
      const expectedOutput = row['Output'].trim().toLowerCase();

      // compare the student response with the expected output
      const isCorrect = convertTemperature(inputNumbericalValue, inputUnitOfMeasure, targetUnitOfMeasure) === studentResponse;
      const correctValue = convertTemperature(inputNumbericalValue, inputUnitOfMeasure, targetUnitOfMeasure);

      console.log('calculated Value', correctValue, 'student response: ', studentResponse)
      // update the csv output row with correct or incorrect
      const output = isCorrect ? 'Correct' : 'Incorrect';

      // add the response to the response array
      responseArray.push(output);

    })
    .on('end', () => {
      const responseArrayWithQuestionNumber = responseArray.map((response, index) => {
        return `Question ${index + 1}: ${response}`;
      });

      res.json(responseArrayWithQuestionNumber);
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
