import type { FastifyRequest, FastifyReply } from 'fastify';
import pool from '../../db/index.ts';
import type { UserParams, UserBody } from './user.types.ts';

export const getUsers = async (
  request: FastifyRequest<{ Params: UserParams }>,
  reply: FastifyReply
) => {
  try {
    const userId = request.params.id;
    const queryText = 'SELECT * FROM users WHERE id = $1';
    const { rows } = await pool.query(queryText, [userId]);

    if (rows.length === 0) {
      return reply.status(404).send({ error: 'User not found' });
    }

    return reply.status(200).send(rows[0]);
  } catch (err) {
    request.log.error(err);
    return reply.status(500).send({ error: 'Internal Server Error' });
  }
};

export const addUsers = async (
  request: FastifyRequest<{ Body: UserBody }>,
  reply: FastifyReply
) => {
  try {
    const { name, email } = request.body || {};

    if (!name || !email || !name.trim().length) {
      return reply.status(400).send({ error: 'Name and email are required' });
    }

    const queryText = 'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *';
    const { rows } = await pool.query(queryText, [name, email]);

    return reply.status(201).send(rows[0]);
  } catch (err) {
    request.log.error(err);
    return reply.status(500).send({ error: 'Internal Server Error' });
  }
};
