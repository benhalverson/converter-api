"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var morgan_1 = require("morgan");
var cors = require("cors");
var helmet_1 = require("helmet");
var multer_1 = require("multer");
var uploads_1 = require("./controllers/uploads");
var list_1 = require("./controllers/list");
var app = (0, express_1.default)();
var upload = (0, multer_1.default)({ dest: "uploads/" });
var PORT = 3000;
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
app.use(cors({ origin: "*" }));
app.use((0, helmet_1.default)());
app.get("/health", function (_req, res) {
    res.json({
        status: "ok",
    });
});
app.post("/upload", upload.single("csvFile"), uploads_1.uploads);
app.get("/list", list_1.list);
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
