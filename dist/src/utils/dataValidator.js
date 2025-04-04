"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDocumentData = void 0;
const validateDocumentData = (req, res, next) => {
    const { description } = req.body;
    const { mimetype, originalname, size, filename } = req.file || {};
    if (!req.file) {
        res.status(400).json({ message: 'El archivo es obligatorio' });
    }
    if (!mimetype) {
        res.status(400).json({ message: 'El tipo de archivo no es válido' });
    }
    if (!originalname) {
        res.status(400).json({ message: 'El nombre del archivo es obligatorio' });
    }
    if (!size) {
        res.status(400).json({ message: 'El tamaño del archivo es obligatorio' });
    }
    if (!filename) {
        res.status(400).json({ message: 'El nombre del archivo es obligatorio' });
    }
    if (!description) {
        res.status(400).json({ message: 'La descripción es obligatoria' });
    }
    // Si todas las validaciones pasan, continuar con la siguiente función del middleware
    next();
};
exports.validateDocumentData = validateDocumentData;
