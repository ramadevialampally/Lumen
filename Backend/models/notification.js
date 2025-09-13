const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  message: { type: String, required: true },
  type: { type: String, enum: ["renewal", "discount", "upgrade"], required: true },
  status: { type: String, enum: ["read", "unread"], default: "unread" },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Notification", notificationSchema);
