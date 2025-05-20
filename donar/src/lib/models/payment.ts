 import mongoose from "mongoose"
 const paymentModel =new mongoose.Schema({ 
"Donation Number":String,
"Donation Status" :String,
"Donation Date" :String,
"Donor Name" :String,
"Birthday" :String,
"PAN" :String,
"Complete Address":String,
"State Name":String,
"City" :String,
"Postcode":String,
"Email":String,
"Mobile Number":String,
"Item Name":String,
"Transaction ID":String,
"Payment Method Title":String,
"Order Total Amount":String,
"Settlement amount":String,
"settlement date":String
 })

 export const Payment = mongoose.models.payments || mongoose.model("payments" , paymentModel)
