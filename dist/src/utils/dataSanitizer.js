"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizeFileName = void 0;
// Para guardar el archivo en la carpeta public, sin caracteres especiales, espacios o acentos en el nombre del archivo, 
// se utiliza la función sanitizeFileName. 
// Esta función toma el nombre del archivo como argumento y devuelve un nombre de archivo seguro para usar en el sistema de archivos.
const sanitizeFileName = (filename) => {
    // Si se manda desde postmnan se interpretan mal los caracteres especiales como los guiones. 
    // Reinterpreta el string mal decodificado
    const buffer = Buffer.from(filename, 'latin1');
    // Lo convierte a UTF-8
    const utf8Name = buffer.toString('utf8');
    // Obtener la extensión del archivo (incluyendo el punto)
    const extension = utf8Name.substring(utf8Name.lastIndexOf('.'));
    let name = utf8Name.substring(0, utf8Name.lastIndexOf('.'));
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
