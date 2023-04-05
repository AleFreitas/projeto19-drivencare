import pool from "../config/database.js"

async function findPatient(email,cpf) {
    const result = await pool.query(`
        SELECT * FROM patients
        WHERE email=$1 OR cpf=$2;         
    `, [email, cpf]);
    return result.rows;
}

async function findDoctor(email,crm) {
    const result = await pool.query(`
        SELECT * FROM doctors
        WHERE email=$1 OR crm=$2;         
    `, [email, crm]);
    return result.rows;
}

async function findPatientByEmail(email){
    const result = await pool.query(`
        SELECT * FROM patients
        WHERE email=$1;         
    `, [email]);
    return result;
}

async function findDoctorByEmail(email){
    const result = await pool.query(`
        SELECT * FROM doctors
        WHERE email=$1;         
    `, [email]);
    return result;
}

async function createPatient(name, email, cpf, password) {
    const result = await pool.query(`
        insert into patients (name,email,cpf,password)
        VALUES ($1,$2,$3,$4);    
        `, [name, email, cpf, password]);
     return result.rows[0];
}

async function createDoctor(name, email, crm, password, cityId, specialtyId) {
    const result = await pool.query(`
        insert into doctors (name,email,crm,password,city_id,specialty_id)
        VALUES ($1,$2,$3,$4,$5,$6);    
        `, [name, email, crm, password, cityId, specialtyId]);
     return result.rows[0];
}

export default {createPatient, createDoctor, findPatient, findDoctor,findPatientByEmail, findDoctorByEmail}