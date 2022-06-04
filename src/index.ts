import express from "express";
//import { router } from "./routes";

import routes from "./routes/routes";

const app = express();
const PORT = process.env.POCHITA_PORT ?? '8000';

app.listen(PORT, ()=> console.log(`>>>>> 👻 Pochita API running on port ${PORT} 👻 <<<<<`) );

app.use(express.json())

Object.keys(routes).forEach((route) =>
  app.use(routes[route]["endpoint"], routes[route]["router"])
);
