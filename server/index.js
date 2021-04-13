const express = require("express");
require("./db/mongoose");
const LightRouter = require("./router/light");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const port = 5000;

app.use(LightRouter);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
