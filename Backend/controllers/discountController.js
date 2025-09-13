const Discount = require("../Models/discount");

// Create Discount
exports.createDiscount = async (req, res) => {
  try {
    const discount = new Discount(req.body);
    await discount.save();
    res.status(201).json(discount);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get All Discounts
exports.getAllDiscounts = async (req, res) => {
  try {
    const discounts = await Discount.find().populate("planId");
    res.json(discounts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Single Discount
exports.getDiscountById = async (req, res) => {
  try {
    const discount = await Discount.findById(req.params.id).populate("planId");
    if (!discount) return res.status(404).json({ error: "Discount not found" });
    res.json(discount);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Discount
exports.updateDiscount = async (req, res) => {
  try {
    const discount = await Discount.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!discount) return res.status(404).json({ error: "Discount not found" });
    res.json(discount);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete Discount
exports.deleteDiscount = async (req, res) => {
  try {
    const discount = await Discount.findByIdAndDelete(req.params.id);
    if (!discount) return res.status(404).json({ error: "Discount not found" });
    res.json({ message: "Discount deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
