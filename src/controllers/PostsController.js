const { Post } = require('../models');

module.exports = {
  list: async ctx => {
    const { rows: posts, count } = await Post.findAndCountAll();
    ctx.body = {
      success: true,
      posts,
      count,
    };
  },

  create: async ctx => {
    const { title, content } = ctx.request.body;
    const post = await Post.create({ title, content });
    ctx.body = {
      success: true,
      post,
    };
  },

  delete: async ctx => {
    const { id } = ctx.params;
    const post = await Post.destroy({ where: { id } });
    ctx.body = {
      success: !!post,
    };
  },
};
