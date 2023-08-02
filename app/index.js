// import express from "express";
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json(), cors({ origin: "*" }));

app.get("/hematopoiesis/:type", (request, response) => {
  // getBloodCellsByHematopoiesisHandler(request, response);
  res.send(`working!!! ${req.params.type}`);
});

app.get("/search/:name", (request, response) => {
  // getBloodCellsByNameHandler(request, response);
  res.send(`working!!! ${req.params.name}`);
});

app.get("/allCells", (request, response) => {
  // getAllBloodCellsNamesHandler(request, response);
  res.send(`working!!!`);
});

app.listen(4000, () => {
  console.log("Running on port 4000.");
});

export default app;
