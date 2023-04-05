import pool from "../config/database.js"

async function findDoctorsByName(name) {
    const result = await pool.query(`
        SELECT name,email,crm FROM doctors
        WHERE name LIKE $1;         
    `, ['%' + name + '%']);
    return result.rows;
}

export default {findDoctorsByName}