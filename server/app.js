const mongoose = require('mongoose');
const env = require('dotenv');
const express = require(express);

env.config();
const MONGO_URL = process.env.MONGO_ATLAS_URL;
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

mongoose.connect(MONGO_URL, options);

export default (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ username: 'John Doe' }));
};
