import bcrypt from 'bcrypt';
import accessService from '../services/accessService.js';


async function signUpPatient(req, res, next) {
  try {
    const {email, password, name, cpf} = req.body;
    const hashPassword = bcrypt.hashSync(password, 10);
    const patient = await accessService.registerPatient(name, email, cpf, hashPassword);
    return res.status(201).json(patient);
  } catch (err) {
    return next(err);
  }
}

async function signUpDoctor(req, res, next) {
  try {
    const {email, password, name, crm, city, specialty} = req.body;
    const hashPassword = bcrypt.hashSync(password, 10);

    console.log("aqui")
    const doctor = await accessService.registerDoctor(name, email, crm, hashPassword, city, specialty);
    return res.status(201).json(doctor);
  } catch (err) {
    console.log(err.message)
    return next(err);
  }
}

async function signInPatient(req,res,next){
  try{
    const {email, password} = req.body;
    const token = await accessService.loginPatient(email, password);
    return res.status(200).json(token)
  }catch(err){
    return next(err)
  }
}

export default { signUpPatient ,signInPatient, signUpDoctor};