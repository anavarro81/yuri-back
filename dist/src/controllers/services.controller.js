"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllServices = exports.loadServices = void 0;
const services_model_1 = __importDefault(require("../models/services.model"));
const loadServices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const insertedServices = yield services_model_1.default.insertMany(req.body);
        if (insertedServices) {
            res.status(201).json({
                message: `Se han insertado ${insertedServices.length} servicios`,
                data: insertedServices
            });
        }
    }
    catch (error) {
        console.log('error al insertar los servicios', error);
        res.status(500).json({ message: error });
    }
});
exports.loadServices = loadServices;
const getAllServices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Estoy en getAllServices');
    try {
        const services = yield services_model_1.default.find();
        res.status(200).json(services);
    }
    catch (error) {
        console.log('error al obtener los servicios', error);
        res.status(500).json({ message: error });
    }
});
exports.getAllServices = getAllServices;
