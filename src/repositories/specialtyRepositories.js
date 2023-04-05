import pool from "../config/database.js"

async function findSpecialty(name) {
    const result = await pool.query(`
        SELECT * FROM specialties
        WHERE name=$1;         
    `, [name]);
    return result.rows;
}

async function createSpecialty(name) {
    const result = await pool.query(`
        insert into specialties (name)
        VALUES ($1);    
        `, [name]);
     return result.rows[0];
}

async function deleteSpecialty(name){
    const result = await pool.query(`
        DELETE FROM specialties
        WHERE name=$1;    
        `, [name]);
     return result.rows[0];
}


export default {findSpecialty, createSpecialty,deleteSpecialty}