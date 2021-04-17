const express = require("express");
const Light = require("../model/light");
const Cluster = require("../model/cluster");

const router = express.Router();

router.get("/lights/:cluster", async (req, res) => {
  const clusterName = req.params.cluster;
  try {
    const lights = await Cluster.findOne({ name: clusterName }).populate(
      "lights"
    );

    res.status(200).send(lights.lights);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post("/dev-al", async (req, res) => {
  const clusterName = req.body.cluster;
  let lightDetails = req.body;
  delete lightDetails["cluster"];

  try {
    const clusterDetails = await Cluster.find({ name: clusterName });
    const light = new Light({
      ...lightDetails,
      cluster: clusterDetails[0]._id,
    });

    await Cluster.findByIdAndUpdate(clusterDetails[0]._id, {
      $push: { lights: light._id },
    });
    const lightr = await light.save();
    res.status(201).send({ lightr });
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post("/updateLight", async (req, res) => {
  const filter = req.body.id;
  const update = req.body;
  try {
    const updatedLight = await Light.findOneAndUpdate({ id: filter }, update, {
      new: true,
    });
    res.status(201).send({ updatedLight });
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
