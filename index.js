import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use("/people", usersRoutes);
app.get("/", (req, res) => res.send("Rest Api: Список студентов!"));
app.all("*", (req, res) =>res.send("Ошибка. Повторите попытку!"));

app.listen(PORT, () =>console.log(`Сервер запущен: http://localhost:${PORT}`));
