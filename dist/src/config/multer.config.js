"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = exports.storage = void 0;
const multer_1 = __importDefault(require("multer"));
const dataSanitizer_1 = require("../utils/dataSanitizer");
exports.storage = multer_1.default.diskStorage({
    destination: 'public/documentation/',
    filename: (req, file, cb) => {
        console.log('>>>> file', file);
        // Sanitizar el nombre del archivo para evitar caracteres especiales
        cb(null, (0, dataSanitizer_1.sanitizeFileName)(file.originalname));
    }
});
exports.upload = (0, multer_1.default)({ storage: exports.storage });
