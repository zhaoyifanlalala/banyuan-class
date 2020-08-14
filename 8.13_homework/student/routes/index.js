const user = require('./users')

module.exports =  (router) => {

  user(router)
  
  router.get('/', async (ctx, next) => {
    // ctx.body = 'Hello World'
    ctx.state = {
      title: 'Koa2'
    }
    await ctx.render('index', ctx.state)
  })
}
