import bcrypt from 'bcrypt';
import { registerPatient } from '../services/accessService.js';


async function signUpPatient(req, res, next) {
  try {
    const {email, password, name, cpf} = req.body;
    const hashPassword = bcrypt.hashSync(password, 10);
    const patient = await registerPatient(name, email, cpf, hashPassword);
    return res.status(201).json(patient);
  } catch (err) {
    return next(err);
  }
}

export { signUpPatient };