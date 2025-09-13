const Notification = require("../Models/notification");

// Create a notification
exports.createNotification = async (req, res) => {
  try {
    const notification = new Notification(req.body);
    await notification.save();
    res.status(201).json(notification);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all notifications
exports.getAllNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find().populate("userId");
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single notification
exports.getNotificationById = async (req, res) => {
  try {
    const notification = await Notification.findById(req.params.id).populate("userId");
    if (!notification) return res.status(404).json({ error: "Notification not found" });
    res.json(notification);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a notification
exports.updateNotification = async (req, res) => {
  try {
    const notification = await Notification.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!notification) return res.status(404).json({ error: "Notification not found" });
    res.json(notification);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a notification
exports.deleteNotification = async (req, res) => {
  try {
    const notification = await Notification.findByIdAndDelete(req.params.id);
    if (!notification) return res.status(404).json({ error: "Notification not found" });
    res.json({ message: "Notification deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
