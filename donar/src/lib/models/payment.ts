import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
  donationNumber: String,
  donationStatus: String,
  donationDate: Date,
  donorName: String,
  birthday: Date,
  pan: String,
  completeAddress: String,
  stateName: String,
  city: String,
  postcode: String,
  email: String,
  mobileNumber: String,
  itemName: String,
  transactionId: String,
  paymentMethodTitle: String,
  orderTotalAmount: Number,
  settlementAmount: Number,
  settlementDate: Date,
}, {
  collection: 'payment',
  timestamps: true
});

export const Payment = mongoose.models.Payment || mongoose.model("Payment", paymentSchema);
