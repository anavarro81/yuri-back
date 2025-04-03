import { Schema, model } from "mongoose";

const DocumentationSchema = new Schema({
    type: {
        type: String,
        required: [true, 'El tipo de documento es requerido'],
        enum: ['pdf', 'docx', 'xlsx', 'pptx'],
    },

    name: {
        type: String,
        required: [true, 'El nombre del documento es requerido'],
        maxlength: [50, 'El nombre del documento no puede tener mas de 50 caracteres'],
        trim: true
    },

    description: {
        type: String,
        required: [false, 'La descripción es requerida'],
        maxlength: [50, 'La descripcion del documento no puede tener mas de 50 caracteres'],
        trim: true
    },

    size: {
        type: Number,
        required: [true, 'El tamaño del documento es requerido'],
        min: [0, 'El tamaño del documento no puede ser menor a 0']
    },

    filename: {
        type: String,
        required: [true, 'El nombre del archivo es requerido'],
    },

    downloadLink: {
        type: String,
        required: [true, 'El link de descarga es requerido'],
    }
})

const DocumentationModel = model("Documentation", DocumentationSchema);

export default DocumentationModel;
