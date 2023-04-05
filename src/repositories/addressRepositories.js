import pool from "../config/database.js"

async function findState(name) {
    const result = await pool.query(`
        SELECT * FROM state
        WHERE name=$1;         
    `, [name]);
    return result.rows;
}

async function findCity(name) {
    const result = await pool.query(`
        SELECT * FROM city
        WHERE name=$1;         
    `, [name]);
    return result.rows;
}

async function createState(name) {
    const result = await pool.query(`
        insert into state (name)
        VALUES ($1);    
        `, [name]);
    return result.rows[0];
}

async function createCity(name, stateId) {
    const result = await pool.query(`
        insert into city (name,state_id)
        VALUES ($1,$2);    
        `, [name, stateId]);
    return result.rows[0];
}

export default { findState, findCity, createState, createCity }