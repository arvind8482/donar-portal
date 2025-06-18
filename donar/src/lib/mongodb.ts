// lib/mongodb.ts
import mongoose from 'mongoose';
 
let MONGODB_USERNAME="arvind_kumar"
let MONGODB_PASSWORD="KDPCTO1UnDAEbMql"

const MONGODB_URI_PAYMENTS = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.7beqiva.mongodb.net/payments?retryWrites=true&w=majority&appName=Cluster0`;
const MONGODB_URI_CAMPAIGNS = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.7beqiva.mongodb.net/campaigns?retryWrites=true&w=majority&appName=Cluster0`;
const MONGODB_URI_DONORS = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.7beqiva.mongodb.net/donors?retryWrites=true&w=majority&appName=Cluster0`;
const MONGODB_URI_MARKETING = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.7beqiva.mongodb.net/marketings?retryWrites=true&w=majority&appName=Cluster0`;
const MONGODB_URI_PRODUCTS = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.7beqiva.mongodb.net/products?retryWrites=true&w=majority&appName=Cluster0`;
const MONGODB_URI_SETTINGS = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.7beqiva.mongodb.net/settings?retryWrites=true&w=majority&appName=Cluster0`; 
const MONGODB_URI_USERS = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.7beqiva.mongodb.net/users?retryWrites=true&w=majority&appName=Cluster0`;
const MONGODB_URI_GIFTS = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.7beqiva.mongodb.net/gifts?retryWrites=true&w=majority&appName=Cluster0`;
const MONGODB_URI_ORGUSERS = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.7beqiva.mongodb.net/orgusers?retryWrites=true&w=majority&appName=Cluster0`;


export const connections: {
  payments?: mongoose.Connection;
  campaigns?: mongoose.Connection;
  donors?: mongoose.Connection;
  marketings?: mongoose.Connection;
    products?: mongoose.Connection;
     settings?: mongoose.Connection;
      users?: mongoose.Connection; 
      gifts?: mongoose.Connection;
      orgusers?: mongoose.Connection;
            
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


export async function connectToDBMarketing() {
  if (connections.marketings) return connections.marketings; 
  const conn = await mongoose.createConnection(MONGODB_URI_MARKETING).asPromise();
  console.log("✅ Connected to donors DB");
  connections.marketings = conn;
  return conn;
}

export async function connectToDBProducts() {
  if (connections.products) return connections.products; 
  const conn = await mongoose.createConnection(MONGODB_URI_PRODUCTS).asPromise();
  console.log("✅ Connected to products DB");
  connections.products = conn;
  return conn;
}

export async function connectToDBSettings() {
  if (connections.settings) return connections.settings; 
  const conn = await mongoose.createConnection(MONGODB_URI_SETTINGS).asPromise();
  console.log("✅ Connected to settings DB");
  connections.settings = conn;
  return conn;
}


export async function connectToDBUsers() {
  if (connections.users) return connections.users; 
  const conn = await mongoose.createConnection(MONGODB_URI_USERS).asPromise();
  console.log("✅ Connected to users DB");
  connections.users = conn;
  return conn;
}


export async function connectToDBGifts() {
  if (connections.gifts) return connections.gifts; 
  const conn = await mongoose.createConnection(MONGODB_URI_GIFTS).asPromise();
  console.log("✅ Connected to gifts DB");
  connections.gifts = conn;
  return conn;
}

export async function connectToDBOrgUsers() {
  if (connections.orgusers) return connections.orgusers; 
  const conn = await mongoose.createConnection(MONGODB_URI_ORGUSERS).asPromise();
  console.log("✅ Connected to orgusers DB");
  connections.orgusers = conn;
  return conn;
}
