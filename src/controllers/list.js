"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.list = void 0;
var fs_1 = require("fs");
var list = function (_req, res) {
    res.json(fs_1.default
        .readdirSync("./uploads")
        .filter(function (file) { return file !== ".gitkeep"; })
        .map(function (file) { return "".concat(file, ".csv"); }));
};
exports.list = list;
