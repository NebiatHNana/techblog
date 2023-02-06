const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'monde0',
    email: 'tnedge0@cbc.ca',
    password: 'password123'
  },
  {
    username: 'oughway1',
    email: 'es1@sogou.com',
    password: 'password123'
  },
  {
    username: 'dam2',
    email: 'ceman2@last.fm',
    password: 'password123'
  },
  {
    username: 'nmer3',
    email: 'lier3@goo.ne.jp',
    password: 'password123'
  },
  {
    username: 'ri4',
    email: 'dgley4@weather.com',
    password: 'password123'
  },
  {
    username: 'rague5',
    email: 'lut5@imdb.com',
    password: 'password123'
  },
  {
    username: 'gens6',
    email: 'hnon6@feedburner.com',
    password: 'password123'
  },
  {
    username: 'tpell7',
    email: 'kpo7@china.com.cn',
    password: 'password123'
  },
  {
    username: 'bbins8',
    email: 'lmain8@google.ru',
    password: 'password123'
  },
  {
    username: 'jarthur9',
    email: 'bsn9@epa.gov',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;