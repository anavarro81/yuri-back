import express from "express";
import {loadTestimonials, deleteAllTestimonials, getTestimonials} from "../controllers/testimonials.controller"

const testimonialsRoutes = express.Router();

testimonialsRoutes.post("/load-testimonial", loadTestimonials);
testimonialsRoutes.delete("/delete-all-testimonials", deleteAllTestimonials);
testimonialsRoutes.get("/get-testimonials", getTestimonials);

export default testimonialsRoutes;