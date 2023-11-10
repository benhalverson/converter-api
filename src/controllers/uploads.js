"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploads = void 0;
var fs_1 = require("fs");
var csv_parser_1 = require("csv-parser");
var tempature_1 = require("../utils/tempature");
var volume_1 = require("../utils/volume");
var uploads = function (req, res) {
    var _a;
    // Check if the file was successfully uploaded by multer.
    if (!(req === null || req === void 0 ? void 0 : req.file)) {
        return res.json({
            status: "error",
            message: "No file uploaded",
        });
    }
    // Read the uploaded CSV file.
    var csvFile = (_a = req.file) === null || _a === void 0 ? void 0 : _a.path;
    // Initialize an array to store the response for each row.
    var responseArray = [];
    // Read and process the CSV file.
    (0, fs_1.createReadStream)(csvFile)
        .pipe((0, csv_parser_1.default)())
        .on("data", function (row) {
        var inputNumbericalValue = parseFloat(row["Input value"]);
        var inputUnitOfMeasure = row["Unit of Measure"].trim().toLowerCase();
        var targetUnitOfMeasure = row["Target Unit of Measure"]
            .trim()
            .toLowerCase();
        var studentResponse = parseFloat(row["Student Response"]);
        var expectedOutput = row["Output"].trim().toLowerCase();
        // compare the student response with the expected output
        var tempIsCorrect = (0, tempature_1.convertTemperature)(inputNumbericalValue, inputUnitOfMeasure, targetUnitOfMeasure) === studentResponse;
        var volumeIsCorrect = (0, volume_1.convertVolume)(inputNumbericalValue, inputUnitOfMeasure, targetUnitOfMeasure) === studentResponse;
        var output = tempIsCorrect || volumeIsCorrect ? "correct" : "incorrect";
        var actualTemp = (0, tempature_1.convertTemperature)(inputNumbericalValue, inputUnitOfMeasure, targetUnitOfMeasure);
        var actualVolume = (0, volume_1.convertVolume)(inputNumbericalValue, inputUnitOfMeasure, targetUnitOfMeasure);
        console.log("actualTemp", actualTemp, "actualVolume", actualVolume);
        console.log("studentResponse", studentResponse, "expectedOutput", expectedOutput);
        responseArray.push(output);
    })
        .on("end", function () {
        var responseArrayWithQuestionNumber = responseArray.map(function (response, index) {
            return "Question ".concat(index + 1, ": ").concat(response);
        });
        res.json(responseArrayWithQuestionNumber);
    });
    return res.json({
        status: "error",
        message: "Something went wrong",
    });
};
exports.uploads = uploads;
