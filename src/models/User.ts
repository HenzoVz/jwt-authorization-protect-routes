import { Schema, model } from 'mongoose';

import IUser from '../Interfaces/IUser';

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 50,
  },
  email: {
    type: String,
    required: true,
    min: 3,
    max: 100,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 200,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default model<IUser>("User", userSchema);
