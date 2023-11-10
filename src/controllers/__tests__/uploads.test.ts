import request from "supertest";
import app from "../../../src/index";
// import fs from "fs";

describe.skip("POST /uploads", () => {
	let csvContent: Buffer;
  
	// beforeAll(() => {
	// 	// read the sample CSV file

	// 	csvContent = fs.readFileSync("../../../sample-data.csv");
	// });
	it("should return an array of responses", async () => {
		const response = await request(app)
			.post("/upload")
			.attach("file", csvContent, "sample-data.csv");

		expect(response.status).toBe(200);
		expect(response.body).toEqual(
			// Replace with the expected response
			[
				"Question 1: correct",
				"Question 2: incorrect",
				// Add more expected responses here
			]
		);
	});

	it("should handle no file uploaded", async () => {
		const response = await request(app).post("/upload").attach("file", "", "");

		expect(response.status).toBe(200); // Update with the actual status code your code returns
		expect(response.body).toEqual({
			status: "error",
			message: "No file uploaded",
		});
	});

	it("should test the /health endpoint", async () => {
		const response = await request(app).get("/health");
		expect(response.status).toBe(200);
		expect(response.body).toEqual({status: "ok"});
	});
	// Add more test cases as needed
});
