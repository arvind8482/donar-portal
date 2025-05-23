import mongoose from "mongoose";

// models/Product.js
const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  stock: Number,
  organizationId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
},
 {
    // ✅ Replace with the actual collection name in MongoDB
    collection: 'products', 
  });

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);