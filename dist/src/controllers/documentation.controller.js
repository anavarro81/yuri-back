"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadDocument = exports.getAllDocuments = exports.getDocument = void 0;
const documentation_model_1 = __importDefault(require("../models/documentation.model"));
const dataConverter_1 = require("../utils/dataConverter");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const dataSanitizer_1 = require("../utils/dataSanitizer");
const getDocument = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filename = req.params.filename;
    if (!filename) {
        res.status(400).json({ message: 'El nombre del archivo el obligatorio' });
        return;
    }
    // A partir de la raiz del proyecto:  process.cwd() buscamos en la carpeta public/documentation el ficero.
    const filePath = path_1.default.join(process.cwd(), 'public/documentation', filename);
    try {
        // Verificamos si el archivo existe antes de intentar descargarlo
        yield fs_1.default.promises.access(filePath, fs_1.default.constants.F_OK);
        res.download(filePath, (err) => {
            if (err) {
                console.error('Error descargando el archivo:', err);
                res.status(500).json({ message: 'Error descargando el arcivo' });
            }
            else {
                console.log('Archivo descargado:', filename);
            }
        });
    }
    catch (error) {
        console.error('archivo no encontrado', filePath);
        res.status(404).json({ message: 'El archivo no existe' });
    }
});
exports.getDocument = getDocument;
const getAllDocuments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const documents = yield documentation_model_1.default.find();
        res.status(200).json({ documents });
    }
    catch (error) {
        console.error('Error al obtener los documentos:', error);
        res.status(500).json({ message: 'Error al obtener los documentos', error: error });
    }
});
exports.getAllDocuments = getAllDocuments;
const uploadDocument = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const file = req.file;
    let { mimetype, originalname, size, filename } = file;
    const { description } = req.body;
    try {
        // Se indica a TS que req.file es de tipo Express.Multer.File para hacer el destructuring | Type Assertion
        const fileData = {
            type: mimetype.split('/')[1],
            name: (0, dataSanitizer_1.sanitizeDocumentName)(originalname),
            description,
            size: (0, dataConverter_1.formatFileSize)(size),
            filename,
            downloadLink: `/download/${filename}`
        };
        console.log('fileData >> ', fileData);
        const newDoc = new documentation_model_1.default(fileData);
        const createdDoc = yield newDoc.save();
        res.status(200).json({ message: 'Archivo subido correctamente', data: createdDoc });
    }
    catch (error) {
        console.error('Error al subir el archivo:', error);
        res.status(500).json({ message: 'Error al subir el archivo' });
    }
});
exports.uploadDocument = uploadDocument;
// export { getDocument };
