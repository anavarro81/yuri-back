import multer from 'multer';
import {sanitizeFileName} from '../utils/dataSanitizer';



export const storage = multer.diskStorage({
    destination: 'public/documentation/',
    filename: (req, file, cb) => {

        console.log('>>>> file', file);
        // Sanitizar el nombre del archivo para evitar caracteres especiales
        cb(null, sanitizeFileName(file.originalname))
    }
});

export const upload = multer({ storage });