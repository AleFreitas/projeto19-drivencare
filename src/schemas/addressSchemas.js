import Joi from 'joi';

const registerStateSchema = Joi.object({
  name: Joi.string().required()
});


const registerCitySchema = Joi.object({
  name: Joi.string().required(),
  stateName: Joi.string().required()
});


export { registerStateSchema, registerCitySchema };