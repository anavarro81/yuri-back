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
exports.getTestimonials = exports.deleteAllTestimonials = exports.loadTestimonials = void 0;
const testimonials_model_1 = __importDefault(require("../models/testimonials.model"));
const loadTestimonials = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Borramos la base de datos para volver a cargarla de nuevo. 
        const deletedTestimonials = yield testimonials_model_1.default.deleteMany({});
        if (deletedTestimonials) {
            console.log('Se ha borrado la base de datos de testimonios');
        }
        const insertedTestimonials = yield testimonials_model_1.default.insertMany(req.body);
        console.log('insertedTestimonials ', insertedTestimonials);
        if (insertedTestimonials) {
            res.status(201).json({
                message: `Se han insertado ${insertedTestimonials.length} testimonios`,
                data: insertedTestimonials
            });
        }
    }
    catch (error) {
        console.log('error al insertar testimonios', error);
        res.status(500).json({ message: error });
    }
});
exports.loadTestimonials = loadTestimonials;
const deleteAllTestimonials = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedTestimonials = yield testimonials_model_1.default.deleteMany({});
        if (deletedTestimonials) {
            res.status(200).json({
                message: `Se han eliminado ${deletedTestimonials.deletedCount} testimonios`,
                data: deletedTestimonials
            });
        }
    }
    catch (error) {
        console.log('error al eliminar testimonios', error);
        res.status(500).json({ message: error });
    }
});
exports.deleteAllTestimonials = deleteAllTestimonials;
const getTestimonials = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const testimonials = yield testimonials_model_1.default.find({});
        res.status(200).json(testimonials);
    }
    catch (error) {
        console.log('error al obtener testimonios', error);
        res.status(500).json({ message: error });
    }
});
exports.getTestimonials = getTestimonials;
