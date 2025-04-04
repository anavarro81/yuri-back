
 
// A partir del tamaño del archivo devuelve un string con el tamaño en KB o MB segun corresponda.
export const formatFileSize = (bytes: number): string => {

    if (bytes < 1024 * 1024) {
        // redondea al entero más cercano y lo devuelve como un string sin decimales.
        return `${(bytes / 1024).toFixed(0)} KB`;
      } else {
        // redondea al entero más cercano y lo devuelve como un string con dos decimales.
        return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
      }
}
  
  