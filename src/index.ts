import express from "express";
import { router } from "./routes";

const app = express();
const PORT = process.env.POCHITA_PORT

app.listen(PORT, ()=> console.log(`>>>>> 👻 Pochita API running on port ${PORT} 👻 <<<<<`) );

app.use(express.json())

app.use(router);