const mongoose = require("mongoose");

const ProductSchema = new mongoose.connect({
  name: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
  image: String,
  Descprition: String,
});
module.exports = mongoose.model("Product", ProductSchema);
