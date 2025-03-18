import {loadServices} from "../controllers/services.controller";
import { Router } from "express";

const serviceRouter = Router();

serviceRouter.post('/load-services', loadServices);

export default serviceRouter;
