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
    required: false,
    maxlength: [30, 'El tipo de buzo no puede tener mas de 30 caracteres'], 
  },
  testimonial: { 
    type: String, 
    required: [true, 'El testimonio es requerido']
    
  }

},
{
    timestamps: true,
});

const TestimonialModel = model("Testimonial", TestimonialSchema);

export default TestimonialModel;
