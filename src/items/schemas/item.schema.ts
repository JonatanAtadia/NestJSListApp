// item.schema.ts
import * as mongoose from 'mongoose';

export const ItemSchema = new mongoose.Schema({
  name: String,
  description: String,
});

export interface ItemDocument extends mongoose.Document {
  name: string;
  description: string;
}
