import mongoose from 'mongoose';
const { model, Schema } = mongoose;

export const SavedGuild = model('guild', new Schema({
  _id: String,
  prefix: { type: String, default: '.' }
}));
