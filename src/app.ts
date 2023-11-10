import express, { Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import multer from "multer";
import { uploads } from "./controllers/uploads";
import { list } from "./controllers/list";

const app = express();
const upload = multer({ dest: "uploads/" });

app.use(express.json());
app.use(morgan("dev"));
app.use(cors({ origin: "*" }));
app.use(helmet());

app.get("/health", (_req: Request, res: Response) => {
	res.json({
		status: "ok",
	});
});

app.post("/upload", upload.single("csvFile"), uploads);
app.get("/list", list);

export default app;