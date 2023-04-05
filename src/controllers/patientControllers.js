import patientService from "../services/patientService.js";
import errors from '../errors/index.js';

async function getDoctorInfo(req, res, next) {
    try {
      const {name, specialty, city} = req.body;
      if(name){
        const doctor = await patientService.getDoctorsByName(name);
        return res.status(200).json(doctor);
      }else if(specialty){
        const doctor = await patientService.getDoctorsBySpecialty(specialty);
        return res.status(200).json(doctor);
      }else if(city){
        const doctor = await patientService.getDoctorsByCity(city);
        return res.status(200).json(doctor);
      }
      return res.sendStatus(404)
    } catch (err) {
        console.log(err.message)
      return next(err);
    }
}

export default {getDoctorInfo}