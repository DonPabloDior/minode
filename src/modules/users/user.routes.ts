import type { FastifyInstance } from 'fastify';
import { getUsers, addUsers } from './user.controller.ts';

export async function userRoutes(fastify: FastifyInstance) {
  fastify.get('/users', async (request, reply) => {
    // @ts-ignore
    return getUsers(request, reply, 2);
  });

  fastify.post('/users', async (request, reply) => {
    // @ts-ignore
    return addUsers(request, reply);
  });
}
