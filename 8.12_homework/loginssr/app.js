const Koa = require('koa')
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
const cors = require('koa2-cors');

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
        options: { settings: { views: path.join(__dirname, 'views') } },
        map: { 'njk': 'nunjucks' },
        extension: 'njk'
    }))
    .use(router.routes())
    .use(router.allowedMethods())

// logger
app.use(async(ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - $ms`)
})

router.get('/', async(ctx, next) => {
    // ctx.body = 'Hello World'
    ctx.state = {
        title: 'Koa2'
    }
    await ctx.render('index', ctx.state)
})




router.get('/login', async(ctx, next) => {
    // ctx.body = 'Hello World'

    await ctx.render('login', ctx.state)
})




router.post('/regist', (ctx, next) => {
    const { name, password, checked } = ctx.request.body
    let namepartten = /^[a-zA-Z0-9_-]{4,16}$/
    let pwdpartten = /^\w{8,15}$/
    let nflag = namepartten.test(name)
    let pflag = pwdpartten.test(password)
    let cflag = false
    if (password === checked) {
        cflag = true;
    }
    if (cflag && nflag && pflag) {
        ctx.response.body = {
            status: 'success'
        }
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