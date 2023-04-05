import Joi from 'joi';

const signUpPatientSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  cpf: Joi.string().required()
});

const signUpDoctorSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  crm: Joi.string().required(),
  city: Joi.string().required(),
  specialty: Joi.string().required()
});

const signInPatientSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
})

export { signUpPatientSchema, signInPatientSchema , signUpDoctorSchema};