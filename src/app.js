const Koa = require('koa')
const Router = require('koa-router')
var router = new Router();

class App {
  constructor (userController) {
    this.userController = userController
    this.routing()
    this.app = new Koa()
      .use(require('koa-bodyparser')())
      .use(router.routes())
      .use(router.allowedMethods());
  }

  routing () {
    const validateCollection = async (ctx, next) => {
      // const { collection } = ctx.params;
      // if (!(collection in ctx.state.collections)) {
      //   return ctx.throw(404);
      // }
      await next()
    }

    const validateKey = async (ctx, next) => {
      // const { authorization } = ctx.request.headers;
      // if (authorization !== ctx.state.authorizationHeader) {
      //   return ctx.throw(401);
      // }
      await next()
    }

    router.post('/items/:login',
      // First, validate auth key
      validateKey,
      // Then, validate that the provided collection exists
      validateCollection,
      // Handle adding the new item to the collection
      async (ctx, next) => {
        // Use ES6 destructuring to extract the collection param
        const {collection} = ctx.params
        console.log(collection)
        ctx.body = await this.userController.insert(ctx, ctx.params.login)
      }
    )

    router.get('/items/:login',
      // First, validate auth key
      validateKey,
      // Then, validate that the provided collection exists
      validateCollection,
      // Handle adding the new item to the collection
      async (ctx, next) => {
        // Use ES6 destructuring to extract the collection param
        const {collection} = ctx.params
        console.log(collection)
        ctx.body = await this.userController.show(ctx, ctx.params.login)
      }
    )
  }

  listen (port, callback) {
    this.app.listen(port, callback)
  }
}

module.exports = App
