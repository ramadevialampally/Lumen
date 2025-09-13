const Subscription = require("../Models/subscription");

// Create Subscription
exports.createSubscription = async (req, res) => {
  try {
    const sub = new Subscription(req.body);
    await sub.save();
    res.status(201).json(sub);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get All Subscriptions
exports.getAllSubscriptions = async (req, res) => {
  try {
    const subs = await Subscription.find().populate("userId planId");
    res.json(subs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Single Subscription
exports.getSubscriptionById = async (req, res) => {
  try {
    const sub = await Subscription.findById(req.params.id).populate("userId planId");
    if (!sub) return res.status(404).json({ error: "Subscription not found" });
    res.json(sub);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Subscription
exports.updateSubscription = async (req, res) => {
  try {
    const sub = await Subscription.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!sub) return res.status(404).json({ error: "Subscription not found" });
    res.json(sub);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete Subscription
exports.deleteSubscription = async (req, res) => {
  try {
    const sub = await Subscription.findByIdAndDelete(req.params.id);
    if (!sub) return res.status(404).json({ error: "Subscription not found" });
    res.json({ message: "Subscription deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
