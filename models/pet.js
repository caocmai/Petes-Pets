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
}, {
  timestamps: true
});

PetSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Pet', PetSchema);
