const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const Register = require('./Models/registration');
const memoModel = require('./Models/memos');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/registration');

app.post('/signup', async (req, res) => {
  try {
    const regData = new Register({
      userName: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    const registered = await regData.save();
    res.status(202).send('Success');
  } catch (err) {
    res.status(400).send('Error');
  }
});

app.post('/login', async (req, res) => {
  try {
    const userName = req.body.username;
    const password = req.body.password;
    const userEmail = await Register.findOne({ userName: userName });
    const isMatch = await bcrypt.compare(password, userEmail.password);
    if (isMatch) {
      res.status(202).send('Success');
    } else {
      res.send('Invalid Login details');
    }
  } catch (err) {
    res.status(400).send('Error');
  }
});

app.get('/get', (req, res) => {
  memoModel
    .find()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.get('/sorted', (req, res) => {
  memoModel
    .find()
    .sort({ priority: 1 }) // 1 for ascending order, -1 for descending order
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.post('/add', (req, res) => {
  const title = req.body.title;
  const priority = req.body.priority;
  memoModel
    .create({
      title: title,
      priority: priority,
    })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.put('/update/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { memo } = req.body;

    // Find the memo by ID and update its content
    const updatedMemo = await memoModel.findByIdAndUpdate(
      id,
      { memo },
      { new: true }
    );

    res.json(updatedMemo);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  memoModel
    .findByIdAndDelete({ _id: id })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log('Server is runnning');
});
