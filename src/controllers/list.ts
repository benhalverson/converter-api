import { Request, Response } from "express";
import fs from "fs";

export const list = (_req: Request, res: Response) => {
	try {
		res.json(
			fs
				.readdirSync("./uploads")
				.filter((file) => file !== ".gitkeep")
				.map((file) => `${file}.csv`)
		);
	} catch (error) {
		console.error(error);
		res.json({
			status: "error",
			message: "Something went wrong",
		});
	}
};
