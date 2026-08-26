import { Pool } from 'pg';
import { env } from '../config/env.ts';

const pool = new Pool({
  user: env.db.user,
  password: env.db.password,
  database: env.db.database,
  host: env.db.host,
  port: env.db.port,
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  console.log('DB Connected!');
  release();
});

export default pool;
