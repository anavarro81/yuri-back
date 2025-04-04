"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizeFileName = void 0;
// Para guardar el archivo en la carpeta public, sin caracteres especiales, espacios o acentos en el nombre del archivo, 
// se utiliza la función sanitizeFileName. 
// Esta función toma el nombre del archivo como argumento y devuelve un nombre de archivo seguro para usar en el sistema de archivos.
const sanitizeFileName = (filename) => {
    // Separar nombre y extensión
    const extension = filename.substring(filename.lastIndexOf('.'));
    let name = filename.substring(0, filename.lastIndexOf('.'));
    // Reemplazar espacios por guiones
    name = name.replace(/\s+/g, '-');
    // Eliminar acentos y caracteres especiales
    name = name.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    // Eliminar cualquier otro caracter no alfanumérico (excepto guiones)
    name = name.replace(/[^a-zA-Z0-9\-]/g, '');
    // Convertir a minúsculas (opcional)
    name = name.toLowerCase();
    return name + extension.toLowerCase();
};
exports.sanitizeFileName = sanitizeFileName;
