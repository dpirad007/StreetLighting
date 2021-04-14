const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LightSchema = new Schema(
  {
    location: {
      type: String,
      required: true,
      unique: true,
    },
    status: {
      type: Number,
      enum: [0, 1, 2],
    },
    watts: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("LightModel", LightSchema);
