const mongoose = require("mongoose");

const usageSchema = new mongoose.Schema({
  subscriptionId: { type: mongoose.Schema.Types.ObjectId, ref: "Subscription", required: true },
  month: { type: String, required: true }, // e.g., "Sep-2025"
  dataUsed: { type: Number, required: true }, // in GB
  quota: { type: String },
  recommendation: { type: String }, // e.g., "Upgrade to 200 Mbps"
}, { timestamps: true });

module.exports = mongoose.model("Usage", usageSchema);
