'use strict';

const express = require('express');
const app = express();
const PORT = 5000;
const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://changhoon:1234@boilerplate.gi6r0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(console.log());

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(PORT, () => {
  console.log(`Server Start on at ${PORT}`);
});
