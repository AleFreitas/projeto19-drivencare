import Joi from 'joi';

const getDoctorsSchema = Joi.object({
  name: Joi.required(),
  city: Joi.required(),
  specialty: Joi.required()
});

export { getDoctorsSchema };