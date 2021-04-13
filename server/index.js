const express = require("express");
require("./db/mongoose");
const LightRouter = require("./router/light");

const app = express();
app.use(express.json());

const port = 5000;

app.use(LightRouter);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
