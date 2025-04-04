import express from "express";
import { getDocument, getAllDocuments, uploadDocument } from "../controllers/documentation.controller";
import {upload} from "../config/multer.config";
import {validateDocumentData} from "../utils/dataValidator";


const documentationRouter = express.Router();

documentationRouter.get("/all-documents", getAllDocuments);
documentationRouter.get("/:filename", getDocument);
documentationRouter.post(
    "/upload", 
    upload.single("doc"), 
    validateDocumentData, 
    uploadDocument );
    



export default documentationRouter;