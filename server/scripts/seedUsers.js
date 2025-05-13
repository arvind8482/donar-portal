const mongoose = require('mongoose');
const User = require('../models/user');

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: 'admin123',
    type: 'admin',
    createdAt: new Date('2025-05-09T10:00:00.000Z')
  },
  {
    name: 'Helping Hands Org',
    email: 'org@example.com',
    password: 'org123',
    type: 'organization',
    createdAt: new Date('2025-05-09T10:00:00.000Z')
  },
  {
    name: 'John Donor',
    email: 'donor@example.com',
    password: 'donor123',
    type: 'donor',
    createdAt: new Date('2025-05-09T10:00:00.000Z')
  }
];

mongoose.connect('mongodb://127.0.0.1:27017/webenor', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    return User.insertMany(users);
  })
  .then(() => {
    console.log('Users inserted successfully');
    mongoose.disconnect();
  })
  .catch(err => {
    console.error('Error inserting users:', err);
    mongoose.disconnect();
  });
