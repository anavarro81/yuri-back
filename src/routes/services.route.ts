import {loadServices, getAllServices} from "../controllers/services.controller";
import { Router } from "express";

const serviceRouter = Router();

serviceRouter.post('/load-services', loadServices);
serviceRouter.get('/get-all-services', getAllServices);

export default serviceRouter;
