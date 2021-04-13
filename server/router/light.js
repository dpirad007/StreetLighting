const express = require("express");
const { updateOne } = require("../model/light");
const light = require("../model/light");
const Light = require("../model/light");

const router = express.Router();

router.get("/lights", async (req, res) => {
  try {
    const lights = await Light.find({});
    res.status(201).send(lights);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post("/dev-al", async (req, res) => {
  console.log(req.body);
  const light = new Light({
    ...req.body,
  });
  try {
    const lightr = await light.save();
    res.status(201).send({ lightr });
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post("/updateLight", async (req, res) => {
  console.log(req.body);
  const filter = req.body.location;
  const update = req.body;
  try {
    const updatedLight = await Light.findOneAndUpdate(
      { location: filter },
      update,
      {
        new: true,
      }
    );
    res.status(201).send({ updatedLight });
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
