const Koa = require('koa')
const KoaRoute = require('koa-route')

class App {
  constructor(userController) {
    this.userController = userController
    this.app = new Koa()
    this.app.use(require('koa-bodyparser')())
    this.routing()
  }

  routing() {
    this.app.use(KoaRoute.get('/users/:id', function(ctx, id) {
      ctx.body = this.userController.show(ctx, id)
    }))
  }

  listen(port, callback) {
    this.app.listen(port, callback)
  }
}

module.exports = App
