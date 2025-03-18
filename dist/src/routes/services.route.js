"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const services_controller_1 = require("../controllers/services.controller");
const serviceRouter = express_1.default.Router();
console.log('Estoy en services.route.ts');
serviceRouter.post('/load-services', services_controller_1.loadServices);
serviceRouter.get("/get-services", services_controller_1.getAllServices);
exports.default = serviceRouter;
