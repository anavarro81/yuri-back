import { Schema, model } from "mongoose";

const ServiceSchema = new Schema({
        serviceName : {
            type: String,
            required: [true, 'El nombre del servicio es requerido'],
            maxlength: [50, 'El nombre del servicio no puede tener mas de 50 caracteres'],
            trim: true
            
        },

        image: {
            type: String,
            required: false,
            default: ''
        },

        divingType: {
            type: String,
            required: [true, 'El tipo de buceo es requerido'],
            enum: ['Recreativo', 'Técnico', 'Recreativo/Técnico'],
        },

        description: {
            type: String,
            required: [false, 'La descripción es requerida'],
            trim: true
        },

        location: {
            type: String,
            required: [true, 'La ubicación es requerida'],
            maxlength: [50, 'La ubicación no puede tener mas de 50 caracteres'],
            trim: true
        },

        maxDepth: {
            type: [Number],
            required: [true, 'La profundidad máxima es requerida'],
            // Se valida que cada elemento del array sea mayor que cero
            validate: {
                validator: function(value: number[]) {
                    return value.every(num => num < 0);
                },
                message: 'La profundidad máxima debe negativa'
            }
        },

        notes: {
            type: String,
            required: false,
            maxlength: [300, 'Las notas no pueden tener mas de 300 caracteres'],
            trim: true,
            default: ''
        },

        price: {
            type: Number,
            required: [true, 'El precio es requerido'],
            min: [0, 'El precio no puede ser menor a 0']
        }
    },
    {
        timestamps: true,
 });

const ServiceModel = model("Service", ServiceSchema);

export default ServiceModel;
      


