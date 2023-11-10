import request from "supertest";
import app from "../../../src/app";

describe("POST /upload", () => {
	it("should return an array of responses", async () => {
		const csvData = `Input value,Unit of Measure,Target Unit of Measure,Student Response,Output
1,liters,tablespoons,67.628,
1,liters,cubic-inches,61.0237,
32,fahrenheit,celsius,0,
32,fahrenheit,kelvin,273.15,
32,fahrenheit,rankine,491.67,
0,rankine,kelvin,0,
0,rankine,fahrenheit,-459.67,
`;

		const response = await request(app)
			.post("/upload")
			.attach("csvFile", Buffer.from(csvData), "test.csv");

		expect(response.status).toBe(200);
		expect(response.body).toEqual(
			[
				"Question 1: correct",
				"Question 2: incorrect",
				"Question 3: correct",
				"Question 4: correct",
				"Question 5: correct",
				"Question 6: correct",
				"Question 7: correct"
			]
		);
		expect(response.body.length).toBe(7);
	});

	it("should handle no file uploaded", async () => {
		const response = await request(app).post("/upload").attach("file", "", "");

		expect(response.status).toBe(400);
		expect(response.body).toEqual({
			status: "error",
			message: "No file uploaded",
		});
	});

	it("should test the /health endpoint", async () => {
		const response = await request(app).get("/health");
		expect(response.status).toBe(200);
		expect(response.body).toEqual({ status: "ok" });
	});

	it("should return a 404 for an unknown route", async () => {
		const response = await request(app).get("/unknown");
		expect(response.status).toBe(404);
	});

	it.skip("should return a 500 for an unknown error", async () => {
		const csvData = `Input value,Unit of Measure,Target Unit of Measure,Student Response,Output
		1,dog,cat,67.628,
		`;
		const response = await request(app).post("/upload").attach("csvFilee", Buffer.from(csvData), "test.csv");
		expect(response.status).toBe(500);
		expect(response.body.error).toEqual({
			status: "error",
			message: "Something went wrong",
		});
	});
});
