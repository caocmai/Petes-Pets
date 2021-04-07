"use strict";
// Pagination library
const mongoosePaginate = require('mongoose-paginate');
mongoosePaginate.paginate.options = {
  limit: 3 // how many records on each page
};

const mongoose = require('mongoose'),
        Schema = mongoose.Schema;

// const PetSchema = new Schema({
//     name            : { type: String, required: true }
//   , species         : { type: String }
//   , birthday        : { type: Date }
//   , picUrl          : { type: String }
//   , picUrlSq        : { type: String }
//   , favoriteFood    : { type: String }
//   , description     : { type: String }
// },
// {
//   timestamps: true
// });

// NEW SCHEMA for validation
const PetSchema = new Schema({
  name: { type: String, required: true }
  , birthday: {type: String, required: true }
  , species: { type: String, required: true }
  , picUrl: { type: String }
  , picUrlSq: { type: String }
  , avatarUrl: { type: String, required: true }
  , favoriteFood: { type: String, required: true }
  , description: { type: String, minlength: 14, required: true }
  , price: {type: Number, required: true }
  , purchasedOn: { type: Date }
  , isPurchased: { type: Boolean, default: false }
}, {
  timestamps: true
});

PetSchema.index({ name: 'text', species: 'text', favoriteFood: 'text', description: 'text' }, {name: 'My text index', weights: {name: 10, species: 4, favoriteFood: 2, description: 1}});


PetSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Pet', PetSchema);
