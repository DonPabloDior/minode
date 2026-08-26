import type { IncomingMessage, ServerResponse } from 'node:http';
import pool from "./db.ts";

const getUsers = async function (req: IncomingMessage, res: ServerResponse, userId: number) {

    const queryText = 'SELECT * FROM users WHERE id = $1';
    const values = [userId]

    let response = await pool.query(queryText, values);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
}

export default getUsers