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
  // getBloodCellsByHematopoiesisHandler(request, response);
  response.setHeader('Content-Type', 'text/html');
  response.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  response.end(`Item: hello hematopoiesis/:type`);
  console.log('1');
});

app.get("/search/:name", (request, response) => {
  // getBloodCellsByNameHandler(request, response);
  response.setHeader('Content-Type', 'text/html');
  response.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  response.end(`Item: hello /search/:name`);
  console.log('2');
});

app.get("/allCells", (request, response) => {
  response.setHeader('Content-Type', 'text/html');
  response.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  response.end(`Item: hello /allCells`);
  console.log('3');
  // getAllBloodCellsNamesHandler(request, response);
});

// export default app;
module.exports = app
