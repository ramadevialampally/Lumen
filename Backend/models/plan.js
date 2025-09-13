const mongoose = require("mongoose");

const planSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ["Fibernet", "Copper"], required: true },
  price: { type: Number, required: true },
  quota: { type: String, required: true }, // e.g., "100GB" or "Unlimited"
  features: [{ type: String }], // array of features
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model("Plan", planSchema);
