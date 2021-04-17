const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ClusterSchema = new Schema(
  {
    name: { type: String, require: true, unique: true },
    lights: [{ type: Schema.ObjectId, ref: "LightModel" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("ClusterModel", ClusterSchema);
