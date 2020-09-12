import mongoose from 'mongoose';

const findOrCreate = require('mongoose-findorcreate');

const HistoryEntrySchema = new mongoose.Schema({
  userId: String,
  date: String,
  eaten_foods: [
    {
      name: String,
      brand: String,
      weight: Number,
      calories: Number,
      proteins: Number,
      fats: Number,
      carbs: Number,
    },
  ],
  info: {
    _id: false,
    bodyWeight: Number,
    height: Number,
    gender: String,
    waistCircumference: Number,
    neckCircumference: Number,
    hipCircumference: Number,
    physicalActivityLevel: String,
    goal: String,
  },
});
HistoryEntrySchema.plugin(findOrCreate);

export default mongoose.model('HistoryEntry', HistoryEntrySchema);
