import pool from "../config/database.js"

async function findDoctorsByName(name) {
    const result = await pool.query(`
        SELECT name,email,crm FROM doctors
        WHERE name LIKE $1;         
    `, ['%' + name + '%']);
    return result.rows;
}

async function findDoctorsBySpecialty(specialtyId) {
    const result = await pool.query(`
        SELECT name,email,crm FROM doctors
        WHERE specialty_id=$1;         
    `, [specialtyId]);
    return result.rows;
}

async function findDoctorsByCity(cityId){
    const result = await pool.query(`
        SELECT name,email,crm FROM doctors
        WHERE city_id=$1;         
    `, [cityId]);
    return result.rows;
}

export default {findDoctorsByName, findDoctorsBySpecialty, findDoctorsByCity}