import Joi from 'joi';

const signUpPatientSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  cpf: Joi.string().required()
});

export { signUpPatientSchema };