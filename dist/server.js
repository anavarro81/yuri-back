"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
// import router from './router'
const bd_1 = require("./src/config/bd");
const cors_2 = require("./src/config/cors");
// Realizamos la conexión a la base de datos
(0, bd_1.connectDB)();
const app = (0, express_1.default)();
// Cors
app.use((0, cors_1.default)(cors_2.corsConfig));
// Leer datos de formularios
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// app.use('/', router)
exports.default = app;
