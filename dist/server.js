"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const bd_1 = require("./src/config/bd");
const cors_2 = require("./src/config/cors");
const testimonials_route_1 = __importDefault(require("./src/routes/testimonials.route"));
const services_route_1 = __importDefault(require("./src/routes/services.route"));
const documentation_routes_1 = __importDefault(require("./src/routes/documentation.routes"));
// Realizamos la conexión a la base de datos
(0, bd_1.connectDB)();
const app = (0, express_1.default)();
// Cors
app.use((0, cors_1.default)(cors_2.corsConfig));
// Leer datos de formularios
app.use(express_1.default.json());
// app.get('/', (req, res) => {
//   res.send('Servidor funcionando!!!')  
// })
app.use('/services', services_route_1.default);
app.use('/testimonials', testimonials_route_1.default);
app.use('/doc', documentation_routes_1.default);
exports.default = app;
