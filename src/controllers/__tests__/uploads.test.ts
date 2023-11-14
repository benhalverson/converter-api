import request from "supertest";
import app from "../../../src/app";
import { sampleCSVInput, sampleResponseData } from "../../utils/__tests__/data";

describe("POST /upload", () => {
	it("should return an array of responses", async () => {
		const csvData = sampleCSVInput;

		const response = await request(app)
			.post("/upload")
			.attach("csvFile", Buffer.from(csvData), "test.csv");

		expect(response.status).toBe(200);
		expect(response.body).toEqual(
			sampleResponseData
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
