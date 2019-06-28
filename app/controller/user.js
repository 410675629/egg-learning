// app/controller/user.js

const Controller = require('egg').Controller;

class UserController extends Controller {
    async info() {
      const { ctx } = this;
      // ctx.body = `1111111111`
      await ctx.render('news/user.tpl', { content: '212121' });
    }
  }

module.exports = UserController;