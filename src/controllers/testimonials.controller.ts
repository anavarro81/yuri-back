import { Request, Response } from "express";
import Testimonial from "../models/testimonials.model";


const loadTestimonials = async (req: Request, res: Response): Promise<void> => {

    try {
        
        const insertedTestimonials = await Testimonial.insertMany(req.body)

        if (insertedTestimonials) {
                res.status(201).json({
                message: `Se han insertado ${insertedTestimonials.length} testimonios`,                
                data: insertedTestimonials
            })
        }

    } catch (error) {
        console.log('error al insertar testimonios', error);
        res.status(500).json({ message: error });
    }

}

const deleteAllTestimonials = async (req: Request, res: Response): Promise<void> => {
    
    try {
        const deletedTestimonials = await Testimonial.deleteMany({})
        if (deletedTestimonials) {
            res.status(200).json({
                message: `Se han eliminado ${deletedTestimonials.deletedCount} testimonios`,
                data: deletedTestimonials
            })
        }
        
    } catch (error) {
        console.log('error al eliminar testimonios', error);
        res.status(500).json({ message: error });
    }
}

const getTestimonials = async (req: Request, res: Response): Promise<void> => {

    try {
        const testimonials = await Testimonial.find({})
        res.status(200).json(testimonials)
    } catch (error) {
        console.log('error al obtener testimonios', error);
        res.status(500).json({ message: error });
    }

} 

export { loadTestimonials, deleteAllTestimonials, getTestimonials };