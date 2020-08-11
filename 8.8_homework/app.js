const Koa = require('koa')
const cors = require('koa2-cors');
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

const views = require('koa-views')
const co = require('co')
const convert = require('koa-convert')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const debug = require('debug')('koa2:server')
const path = require('path')

const config = require('./config')
const routes = require('./routes')

const port = process.env.PORT || config.port

// error handler
onerror(app)

// middlewares
app.use(bodyparser())
  .use(json())
  .use(logger())
  .use(cors({
    credentials: true,
  }))
  .use(require('koa-static')(__dirname + '/public'))
  .use(views(path.join(__dirname, '/views'), {
    options: {settings: {views: path.join(__dirname, 'views')}},
    map: {'njk': 'nunjucks'},
    extension: 'njk'
  }))
  .use(router.routes())
  .use(router.allowedMethods())

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - $ms`)
})

router.get('/', async (ctx, next) => {
  // ctx.body = 'Hello World'
  ctx.state = {
    title: 'Koa2'
  }
  await ctx.render('index', ctx.state)
})


router.post('/checkName', async (ctx, next) => {
  const {name}=ctx.request.body;
  let names=["zhao","qian","wang","shixt"]
  let data={}
  let partten = /^[a-zA-Z0-9_-]{4,16}$/;
  let flag = partten.test(name);
  if(flag){
    data.flag=true;
    if(names.indexOf(name)===-1){
      data.include=false;
      data.nameTestResult=true;
    }else{
      data.include=true;
      data.nameTestResult=false;
    }
}else{
    data.flag=false;
    data.nameTestResult=false;
}
  ctx.response.body=data;
})



router.post('/post', async (ctx, next) => {
  const {name,password}=ctx.request.body;
  let names=["zhao","qian","wang","shixt"]
  let partten = /^[a-zA-Z0-9_-]{4,16}$/;
  let flag = partten.test(name);
  let data={}
  if(flag){
    data.flag=true;
    if(names.indexOf(name)===-1){
      data.include=false;
      data.nameTestResult=true;
    }else{
      data.include=true;
      data.nameTestResult=false;
    }
}else{
    data.flag=false;
    data.nameTestResult=false;
}
  let partten1 = /^\w{8,15}$/;
  var key = partten1.test(password);
  if(key){
    data.key=true;
  }else{
    data.key=false;
  }
  if(data.flag&&data.key&&(!data.include)){

    ctx.response.body={
      name,
      password
    }
  }else{
    ctx.response.body="输入错误"
  }
})




routes(router)
app.on('error', function(err, ctx) {
  console.log(err)
  logger.error('server error', err, ctx)
})

module.exports = app.listen(config.port, () => {
  console.log(`Listening on http://localhost:${config.port}`)
})
