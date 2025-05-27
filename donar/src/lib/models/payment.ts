import { Schema, Connection, Model, Document } from 'mongoose';

interface IPayment extends Document {
  donationNumber: string;
  donationStatus: string;
  donationDate: Date;
  donorName: string;
  birthday: Date;
  pan: string;
  completeAddress: string;
  stateName: string;
  city: string;
  postcode: string;
  email: string;
  mobileNumber: string;
  itemName: string;
  transactionId: string;
  paymentMethodTitle: string;
  orderTotalAmount: number;
  settlementAmount: number;
  settlementDate: Date;
}

const paymentSchema = new Schema<IPayment>(
  {
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
  },
  {
    collection: 'payment',
    timestamps: true,
  }
);

export const getPaymentModel = (conn: Connection): Model<IPayment> => {
  return conn.models.Payment || conn.model<IPayment>('Payment', paymentSchema);
};
