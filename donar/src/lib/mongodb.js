// /src/lib/mongodb.js
import { MongoClient } from 'mongodb';

const username = encodeURIComponent(process.env.MONGODB_USERNAME);
const password = encodeURIComponent(process.env.MONGODB_PASSWORD); 

const MONGODB_URI_PAYMENTS = `mongodb+srv://${username}:${password}@cluster0.7beqiva.mongodb.net/payments?retryWrites=true&w=majority&appName=Cluster0`;

const options = {
  tls: true, // Only keep supported options
};

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(MONGODB_URI_PAYMENTS, options);
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export default clientPromise;
