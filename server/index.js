const express = require("express");
require("./db/mongoose");
const cors = require("cors");
const LightRouter = require("./router/light");
const ClusterRouter = require("./router/cluster");
const RecordsRouter = require("./router/records");

const port = 5000;

const app = express();
app.use(cors());

app.use(express.json());

app.use(LightRouter);
app.use(ClusterRouter);
app.use(RecordsRouter);

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
