import express from "express";
import cors from "cors";
import {
  getBloodCellsByHematopoiesisHandler,
  getBloodCellsByNameHandler,
  getAllBloodCellsNamesHandler,
} from "./controller/controller.js";

const app = express();
const PORT = 5000;
app.use(express.json(), cors({ origin: "*" }));

app.get("/hematopoiesis/:type", (request, response) => {
  getBloodCellsByHematopoiesisHandler(request, response);
});

app.get("/search/:name", (request, response) => {
  getBloodCellsByNameHandler(request, response);
});

app.get("/allCells", (request, response) => {
  getAllBloodCellsNamesHandler(request, response);
});

// -----

app.get("/api", (req, res) => {
  const path = `/api/item/${v4()}`;
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.get("/api/item/:slug", (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

app.listen(PORT, () => console.log(`SERVER STARTED ON ${PORT} PORT`));

module.exports = app;
