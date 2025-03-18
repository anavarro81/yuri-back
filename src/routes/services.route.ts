import express from "express";
import {loadServices, getAllServices} from "../controllers/services.controller";


const serviceRouter = express.Router();

console.log('Estoy en services.route.ts')

serviceRouter.post('/load-services', loadServices);
serviceRouter.get("/get-services", getAllServices);



export default serviceRouter;
