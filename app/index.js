import express from "express";
import cors from "cors";
// import {
//   getBloodCellsByHematopoiesisHandler,
//   getBloodCellsByNameHandler,
//   getAllBloodCellsNamesHandler,
// } from "../controller/controller.js";

const app = express();

// app.use(express.json(), cors({ origin: "*" }));

app.get("/hematopoiesis/:type", (request, response) => {
  // getBloodCellsByHematopoiesisHandler(request, response);
  res.send(`working!!! ${req.params.type}`);
});

app.get("/search/:name", (request, response) => {
  // getBloodCellsByNameHandler(request, response);
  res.send(`working!!! ${req.params.name}`);
});

app.get("/allCells", (request, response) => {
  getAllBloodCellsNamesHandler(request, response);
  // res.send(`working!!!`);
});

export default app;
