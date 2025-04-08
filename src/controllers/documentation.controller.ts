import { Request, Response } from "express";
import DocumentationModel from "../models/documentation.model";
import {formatFileSize} from "../utils/dataConverter";
import path from "path";
import fs from "fs";
import {sanitizeDocumentName} from "../utils/dataSanitizer";
interface FileDataI {
    type: string;
    name: string;
    description: string;
    size: string;
    filename: string;
    downloadLink: string;
}



const getDocument = async (req: Request, res: Response): Promise<void> => {

    const filename = req.params.filename;   

    if (!filename) {
        res.status(400).json({ message: 'El nombre del archivo el obligatorio' });
        return;
    }    
    // A partir de la raiz del proyecto:  process.cwd() buscamos en la carpeta public/documentation el ficero.
    const filePath = path.join(process.cwd(), 'public/documentation', filename);      

    try {
        // Verificamos si el archivo existe antes de intentar descargarlo
        await fs.promises.access(filePath, fs.constants.F_OK);

        res.download(filePath, (err) => {
            if (err) {
                console.error('Error descargando el archivo:', err);
                res.status(500).json({ message: 'Error descargando el arcivo' });
            } else {
                console.log('Archivo descargado:', filename);            
            }
        });
    
    } catch (error) {
        console.error('archivo no encontrado', filePath);
        res.status(404).json({ message: 'El archivo no existe' });
    }
        

}

const getAllDocuments = async (req: Request, res: Response): Promise<void> => {

    try {        
        const documents = await DocumentationModel.find();       

        res.status(200).json({ documents });
        
    } catch (error) {
        console.error('Error al obtener los documentos:', error);
        res.status(500).json({ message: 'Error al obtener los documentos', error: error });
    }
    


}

const uploadDocument = async (req: Request, res: Response): Promise<void> => {

    const file = req.file as Express.Multer.File;
    let { mimetype, originalname, size, filename } = file;
    const { description } = req.body;

    
    try {       
    
        
        // Se indica a TS que req.file es de tipo Express.Multer.File para hacer el destructuring | Type Assertion
        const fileData: FileDataI = {
            type: mimetype.split('/')[1],
            name: sanitizeDocumentName(originalname),
            description,
            size: formatFileSize(size),
            filename,
            downloadLink: `/download/${filename}`
        };
        
         console.log('fileData >> ' , fileData) 

         const newDoc = new DocumentationModel(fileData);
         const createdDoc = await newDoc.save()       
         res.status(200).json({ message: 'Archivo subido correctamente', data: createdDoc});
    
        
    }  catch (error) {
        console.error('Error al subir el archivo:', error);
        res.status(500).json({ message: 'Error al subir el archivo' });
    }

}

export { getDocument,getAllDocuments, uploadDocument  };
// export { getDocument };