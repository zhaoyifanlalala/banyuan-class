const controller = require('../controller/users')

module.exports = (router) => {
  router.get('/welcome', controller.welcome)
  router.post('/login', controller.login)
  router.post('/selector', controller.selector)
}

// module.exports =  (router) => {
//   router.get('/login', async function (ctx, next) {
//     // ctx.state = {
//     //   title: 'koa2 title'
//     // }

//     await ctx.render('login', ctx.state)
//   })
// }
