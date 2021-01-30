import mongoose from 'mongoose';
const { model, Schema } = mongoose;

export const SavedUser = model('user', new Schema({
  _id: String,
  coins: { type: Number, default: 0 }
}));
