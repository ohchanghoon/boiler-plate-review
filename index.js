'use strict';

const express = require('express');
const app = express();
const PORT = 5000;
const mongoose = require('mongoose');
const { User } = require('./models/User');

// application/json
app.use(express.json());
// application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

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

app.post('/register', (req, res) => {
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server Start on at ${PORT}`);
});
