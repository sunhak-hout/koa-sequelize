const { User } = require('../models');

module.exports = {
  list: async (ctx, next) => {
    const users = await User.findAll();
    ctx.body = {
      success: true,
      users,
    };
  },

  login: (ctx, next) => {
    ctx.body = {
      success: true,
      message: 'You are trying to login user without any credentials! :D',
    };
  },

  signup: async (ctx, next) => {
    const { firstName, lastName, email, age } = ctx.request.body;
    const user = await User.create({ firstName, lastName, email, age });
    ctx.body = {
      success: true,
      message: 'New user successfully signed up!',
      user,
    };
  },
};
