// lib/mongodb.ts
import mongoose from 'mongoose';
 
let MONGODB_USERNAME="arvind_kumar"
let MONGODB_PASSWORD="KDPCTO1UnDAEbMql"

const MONGODB_URI_PAYMENTS = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.7beqiva.mongodb.net/payments?retryWrites=true&w=majority&appName=Cluster0`;
const MONGODB_URI_CAMPAIGNS = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.7beqiva.mongodb.net/campaigns?retryWrites=true&w=majority&appName=Cluster0`;
const MONGODB_URI_DONORS = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.7beqiva.mongodb.net/donors?retryWrites=true&w=majority&appName=Cluster0`;



export const connections: {
  payments?: mongoose.Connection;
  campaigns?: mongoose.Connection;
  donors?: mongoose.Connection;
} = {};

export async function connectToDBPayments() {
  if (connections.payments) return connections.payments;

  const conn = await mongoose.createConnection(MONGODB_URI_PAYMENTS).asPromise();
  console.log('✅ Connected to Payments DB');
  connections.payments = conn;
  return conn;
}

export async function connectToDBCampaign() {
  if (connections.campaigns) return connections.campaigns; 
  const conn = await mongoose.createConnection(MONGODB_URI_CAMPAIGNS).asPromise();
  console.log("✅ Connected to Campaigns DB");
  connections.campaigns = conn;
  return conn;
}


export async function connectToDBDonar() {
  if (connections.donors) return connections.donors; 
  const conn = await mongoose.createConnection(MONGODB_URI_DONORS).asPromise();
  console.log("✅ Connected to donors DB");
  connections.donors = conn;
  return conn;
}
