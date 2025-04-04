"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatFileSize = void 0;
// A partir del tamaño del archivo devuelve un string con el tamaño en KB o MB segun corresponda.
const formatFileSize = (bytes) => {
    if (bytes < 1024 * 1024) {
        // redondea al entero más cercano y lo devuelve como un string sin decimales.
        return `${(bytes / 1024).toFixed(0)} KB`;
    }
    else {
        // redondea al entero más cercano y lo devuelve como un string con dos decimales.
        return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
    }
};
exports.formatFileSize = formatFileSize;
