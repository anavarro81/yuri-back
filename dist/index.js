"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const server_1 = __importDefault(require("./server"));
const port = process.env.PORT || 3000;
server_1.default.listen(3000, () => {
    console.log(`[Server]: Server is running at port ${port}`);
});
