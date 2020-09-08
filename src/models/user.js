import mongoose from 'mongoose';

export default mongoose.model('User', {
  username: {
    type: String,
    unique: true,
  },
  password: String,
  email: {
    type: String,
    unique: true,
  },
  bodyWeight: Number,
  height: Number,
  gender: String,
  waistCircumference: Number,
  neckCircumference: Number,
  hipCircumference: Number,
  physicalActivityLevel: String,
  goal: String,
  language: {
    type: String,
    default: 'en',
  },
  region: {
    type: String,
    default: 'US',
  },
});
