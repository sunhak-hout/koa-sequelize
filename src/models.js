const sequelize = require('./libs/seqeulize');
const { Sequelize, Model } = require('sequelize');

class User extends Model {}
User.init(
  {
    firstName: { type: Sequelize.STRING },
    lastName: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    age: { type: Sequelize.INTEGER },
  },
  { sequelize, modelName: 'users' },
);

class Post extends Model {}
Post.init(
  {
    title: { type: Sequelize.STRING },
    content: { type: Sequelize.STRING },
  },
  { sequelize, modelName: 'posts' },
);

// Creating Database Table
sequelize.sync();

module.exports = { User, Post };
