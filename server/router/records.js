const express = require("express");
const Records = require("../model/records");
const Light = require("../model/light");

const router = express.Router();

router.post("/dv-ar", async (req, res) => {
  const lightId = req.body.lightId;
  let rec = req.body.record;
  const date = new Date();
  rec = rec + "," + date;
  try {
    const light = await Light.findOne({ id: lightId });
    const recordr = new Records({
      light: light._id,
    });

    recordr.records.push(rec);

    const recordSave = await recordr.save();

    res.status(201).send(recordSave);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post("/recordsUpdate", async (req, res) => {
  const lightId = req.body.lightId;
  let rec = req.body.record;
  const date = new Date();
  rec = rec + "," + date;

  try {
    const light = await Light.findOne({ id: lightId });
    const recordr = await Records.findOneAndUpdate(
      { light: light._id },
      { $push: { records: rec } }
    );
    res.status(201).send(recordr);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/records/:id", async (req, res) => {
  const lightId = req.params.id;

  try {
    const record = await Records.findOne({ light: lightId });
    res.status(201).send(record.records);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
