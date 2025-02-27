"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const testimonials_controller_1 = require("../controllers/testimonials.controller");
const testimonialsRoutes = express_1.default.Router();
testimonialsRoutes.post("/load-testimonial", testimonials_controller_1.loadTestimonials);
testimonialsRoutes.delete("/delete-all-testimonials", testimonials_controller_1.deleteAllTestimonials);
testimonialsRoutes.get("/get-testimonials", testimonials_controller_1.getTestimonials);
exports.default = testimonialsRoutes;
