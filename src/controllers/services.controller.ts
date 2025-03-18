import { Request, Response } from "express";
import ServiceModel from "../models/services.model";

export const loadServices = async (req: Request, res: Response): Promise<void> => {

    try {
        
        const insertedServices = await ServiceModel.insertMany(req.body)

        if (insertedServices) {
                res.status(201).json({
                message: `Se han insertado ${insertedServices.length} servicios`,                
                data: insertedServices
            })
        }

    } catch (error) {
        console.log('error al insertar los servicios', error);
        res.status(500).json({ message: error });
    }

}

export const getAllServices = async (req: Request, res: Response): Promise<void> => {

    try {
        const services = await ServiceModel.find();
        res.status(200).json(services);
    } catch (error) {
        console.log('error al obtener los servicios', error);
        res.status(500).json({ message: error });
    }
}