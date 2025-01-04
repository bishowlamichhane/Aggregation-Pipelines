import mongoose from 'mongoose'
// Define the Subscription Schema
const subscriptionSchema = new mongoose.Schema({
  subscriber: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', // Refers to the User model
    required: true 
  },
  channel: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', // Refers to the User model (channel being subscribed to)
    required: true 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

// Create the Subscription Model
export const Subscription = mongoose.model('Subscription', subscriptionSchema);


