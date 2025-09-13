const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  subscriptionId: { type: mongoose.Schema.Types.ObjectId, ref: "Subscription", required: true },
  amount: { type: Number, required: true },
  method: { type: String, enum: ["Card", "UPI", "Wallet"], default: "Card" },
  status: { type: String, enum: ["Success", "Failed", "Pending"], default: "Pending" },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Payment", paymentSchema);
