import Fastify from 'fastify';
import { userRoutes } from './modules/users/user.routes.ts';

const app = Fastify({ logger: true });

app.register(userRoutes);

export default app;
