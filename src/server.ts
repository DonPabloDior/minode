import app from './app.ts';
import { env } from './config/env.ts';

app.listen({ port: env.port, host: env.host }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server running at ${address}`);
});
