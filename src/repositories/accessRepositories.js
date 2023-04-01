import pool from "../config/database.js"

async function findPatient(email,cpf) {
    const result = await pool.query(`
        SELECT * FROM patients
        WHERE email=$1 OR cpf=$2;         
    `, [email, cpf]);
    return result.rows;
}

async function createPatient(name, email, cpf, password) {
    const result = await pool.query(`
        insert into patients (name,email,cpf,password)
        VALUES ($1,$2,$3,$4);    
        `, [name, email, cpf, password]);
     return result.rows[0];
}

export default {createPatient,findPatient}