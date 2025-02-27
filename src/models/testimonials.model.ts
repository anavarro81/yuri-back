import { Schema, model } from "mongoose";

const TestimonialSchema = new Schema({
  image: { 
    type: String, 
    required: false, 
  },
  name: { 
    type: String, 
    required: [true, 'El nombre es requerido'],
    maxlength: [20, 'El nombre no puede tener mas de 20 caracteres'], 
  },
  diverType: {
    type: String, 
    required: [true, 'El tipo de buzo es requerido'],
    maxlength: [30, 'El tipo de buzo no puede tener mas de 30 caracteres'], 
  },
  testimonial: { 
    type: String, 
    required: [true, 'El testimonio es requerido'],
    maxlength: [300, 'El testimonio no puede tener mas de 200 caracteres'], 
  }

},
{
    timestamps: true,
});

const TestimonialModel = model("Testimonial", TestimonialSchema);

export default TestimonialModel;
