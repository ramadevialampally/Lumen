const express = require("express");
const router = express.Router();
const Subscription = require("../Models/subscription");

// Create
router.post("/", async (req, res) => {
  try {
    const sub = new Subscription(req.body);
    await sub.save();
    res.status(201).json(sub);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Read all
router.get("/", async (req, res) => {
  try {
    const subs = await Subscription.find().populate("userId planId");
    res.json(subs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Read one
router.get("/:id", async (req, res) => {
  try {
    const sub = await Subscription.findById(req.params.id).populate("userId planId");
    if (!sub) return res.status(404).json({ error: "Subscription not found" });
    res.json(sub);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update
router.put("/:id", async (req, res) => {
  try {
    const sub = await Subscription.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!sub) return res.status(404).json({ error: "Subscription not found" });
    res.json(sub);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    const sub = await Subscription.findByIdAndDelete(req.params.id);
    if (!sub) return res.status(404).json({ error: "Subscription not found" });
    res.json({ message: "Subscription deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
