import Joi from 'joi';

const registerSpecialtySchema = Joi.object({
  name: Joi.string().required()
});

export { registerSpecialtySchema };