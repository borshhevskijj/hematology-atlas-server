import express from "express";
// import dotenv from "dotenv";
import cors from "cors";
// import {
//   getBloodCellsByHematopoiesisHandler,
//   getBloodCellsByNameHandler,
//   getAllBloodCellsNamesHandler,
// } from "./controller/controller.js";

// dotenv.load();
const app = express();
// const PORT = 4000;
app.use(express.json(), cors({ origin: "*" }));

app.get("/", (request, response) => {
  // getBloodCellsByHematopoiesisHandler(request, response);
  response.send("Express on Vercel");
});

// app.get("/search/:name", (request, response) => {
//   getBloodCellsByNameHandler(request, response);
// });

// app.get("/allCells", (request, response) => {
//   getAllBloodCellsNamesHandler(request, response);
// });

// app.listen(PORT, () => console.log(`SERVER STARTED ON ${PORT} PORT`));
export default app;
