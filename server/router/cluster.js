const express = require("express");
const Cluster = require("../model/cluster");

const router = express.Router();

router.post("/dv-cl", async (req, res) => {
  const cluster = new Cluster({
    ...req.body,
  });
  try {
    const clusterr = await cluster.save();
    res.status(201).send({ clusterr });
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/clusterswl", async (req, res) => {
  try {
    const clusters = await Cluster.find({});
    res.status(200).send(clusters);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/clusters", async (req, res) => {
  try {
    const clusters = await Cluster.find({}).populate("lights");
    res.status(200).send(clusters);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/customClusters/:cluster", async (req, res) => {
  const clusterName = req.params.cluster;
  try {
    const clusters = await Cluster.find({ clusterName }).populate("lights");
    res.status(200).send(clusters);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
