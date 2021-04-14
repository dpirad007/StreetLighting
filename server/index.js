const express = require("express");
require("./db/mongoose");
const cors = require("cors");
const LightRouter = require("./router/light");

const port = 5000;

const app = express();
app.use(cors());

app.use(express.json());

app.use(LightRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
