import { App } from './App';

const port = process.env.APP_PORT ? Number(process.env.APP_PORT) : 3000;
const app = new App(port);

export default app.start();