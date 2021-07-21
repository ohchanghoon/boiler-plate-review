'use strict';

const express = require('express');
const app = express();
const PORT = 5000;
const mongoose = require('mongoose');
const { User } = require('./models/User');
const config = require('./config/key');

// application/json
app.use(express.json());
// application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
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
