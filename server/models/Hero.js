const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: String,
  avatar: String,
  title: String,
  categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }],
  scores: {
    difficult: { type: Number },
    skills: { type: Number },
    attack: { type: Number },
    survive: { type: Number },
  },
  //英雄介绍
  skills: [{
    icon: { type: String },
    name: { type: String },
    description: { type: String },
    tips: { type: String }
  }],
  items1: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Item' }], //顺风出装
  items2: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Item' }], //逆风出装
  usageTips: { type: String },
  battleTips: { type: String },
  teamTips: { type: String },
  partners: [{
    hero: { type: mongoose.SchemaTypes.ObjectId, ref: 'Hero' },
    dicription: { type: String }
  }],

})

module.exports = mongoose.model('Hero', schema)