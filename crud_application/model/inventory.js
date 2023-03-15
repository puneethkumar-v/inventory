const mongoose = require("mongoose");
const InventorySchema = mongoose.Schema({
  item_id: { type: Number, required: true },
  item_name: { type: String, required: true },
  item_description: { type: String, required: true },
  item_price: { type: Number, required: true },
  item_qty: { type: Number, required: true },
});

module.exports = mongoose.model("Inventory", InventorySchema);
