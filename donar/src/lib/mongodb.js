const { MONGODB_USERNAME, MONGODB_PASSWORD } = process.env;

export const paymentStr = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.7beqiva.mongodb.net/payments?retryWrites=true&w=majority&appName=Cluster0`;

 