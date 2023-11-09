import { Request, Response } from "express";
import fs from "fs";

export const list = (req: Request, res: Response) => {
  res.json(
    fs
      .readdirSync("./uploads")
      .filter((file) => file !== ".gitkeep")
      .map((file) => `${file}.csv`)
  );
};
