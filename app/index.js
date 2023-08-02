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
  getAllBloodCellsNamesHandler(request, response);
  // res.send(`working!!!`);
});

export default app;
