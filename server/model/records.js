const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RecordSchema = new Schema(
  {
    light: { type: Schema.ObjectId, ref: "LightModel" },
    records: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("RecordsModel", RecordSchema);
