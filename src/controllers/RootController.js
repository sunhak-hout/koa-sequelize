module.exports = {
  root: ctx => {
    ctx.body = {
      success: true,
      message: 'Welcome to API example using KoaJS',
    };
  },
};
