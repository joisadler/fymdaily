import mongoose from 'mongoose';

const findOrCreate = require('mongoose-findorcreate');

const RecipeSchema = new mongoose.Schema({
  createdBy: String,
  name: String,
  calories: Number,
  proteins: Number,
  fats: Number,
  carbs: Number,
  ingredients: [
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
});
RecipeSchema.plugin(findOrCreate);

export default mongoose.model('Recipe', RecipeSchema);
