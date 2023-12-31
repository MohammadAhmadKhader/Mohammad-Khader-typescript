"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mainRoute_js_1 = require("./routes/mainRoute.js");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 3001;
app.listen(PORT, () => console.log(`Server is running at Port : ${PORT}`));
app.use(mainRoute_js_1.router);
app.use((error, req, res, next) => {
    res.status(500).json(`Error : ${error}`);
});
