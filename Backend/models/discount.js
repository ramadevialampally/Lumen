const mongoose = require("mongoose");

const discountSchema = new mongoose.Schema({
  planId: { type: mongoose.Schema.Types.ObjectId, ref: "Plan", required: true },
  code: { type: String, required: true, unique: true },
  description: { type: String },
  percentage: { type: Number },
  flatAmount: { type: Number },
  validFrom: { type: Date },
  validTill: { type: Date },
  conditions: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("Discount", discountSchema);
