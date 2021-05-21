const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LightSchema = new Schema(
  {
    cluster: {
      type: Schema.ObjectId,
      ref: "ClusterModel",
    },
    id: {
      type: Number,
      required: true,
      uniquie: true,
    },
    location: {
      unique: true,
      type: String,
      required: true,
    },
    status: {
      type: Number,
      enum: [0, 1, 2, 3, 4],
    },
    watts: {
      type: Number,
    },
    i: {
      type: Number,
    },
    j: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("LightModel", LightSchema);
