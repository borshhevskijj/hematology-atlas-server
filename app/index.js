const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json(), cors({ origin: "*" }));

app.get("/hematopoiesis/:type", (request, response) => {
  response.send(`working!!! ${req.params.type}`);
  console.log("asd");
});

app.get("/search/:name", (request, response) => {
  response.send(`working!!! ${req.params.name}`);
});

app.get("/allCells", (request, response) => {
  response.send(`working!!!`);
});

app.listen(4000, () => {
  console.log("Running on port 4000.");
});

export default app;
