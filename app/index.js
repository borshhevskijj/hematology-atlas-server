import express from "express";
import cors from "cors";
import {
  getBloodCellsByHematopoiesisHandler,
  getBloodCellsByNameHandler,
  getAllBloodCellsNamesHandler,
} from "../controller/controller.js";

const app = express();
app.use(express.json(), cors({ origin: "*" }));
app.use(express.static('public'))


app.get("/hematopoiesis/:type", (request, response) => {
  getBloodCellsByHematopoiesisHandler(request, response);
});

app.get("/search/:name", (request, response) => {
  getBloodCellsByNameHandler(request, response);
});

app.get("/allCells", (request, response) => {
  getAllBloodCellsNamesHandler(request, response);
});

export default app;
// module.exports = app
