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

const config = require('./config')
const routes = require('./routes')

const session = require('koa-session')

const port = process.env.PORT || config.port

// error handler
onerror(app)

app.keys = ['zhao']

const CONFIG = {
    key: 'koa.sess',
    // maxAge: 4000
}

// middlewares
app.use(bodyparser())
    .use(json())
    .use(logger())
    .use(require('koa-static')(__dirname + '/public'))
    .use(views(path.join(__dirname, '/views'), {
        options: { settings: { views: path.join(__dirname, 'views') } },
        map: { 'njk': 'nunjucks' },
        extension: 'njk'
    }))
    .use(session(CONFIG, app))
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

    let news = [{ name: 'news1', id: '1' }, { name: 'news2', id: '2' }, { name: 'news3', id: '3' }]

    ctx.state = {
        // title: 'banyuan',
        title: ['banyuan', '12345'],
        content: '半圆',
        test: 'demo',
        flag: 'true',
        gender: 0,
        // hungry: 'false',
        // tired: 'true'
        news: news

    }

    // ctx.session.user = { name: 'tom' }
    // console.log(ctx.session.user)
    // ctx.session.password = '12345'
    // console.log(ctx.session.password)



    await ctx.render('index', ctx.state)
})




router.get('/todoList', async(ctx, next) => {
    // ctx.body = 'Hello World'

    ctx.state = {
        tasks

    }
    await ctx.render('todoList', ctx.state)
})

let tasks = [{ name: '任务1', checked: true }, { name: '任务2', checked: true }, { name: '任务3', checked: false }]

router.post('/checkTask', async(ctx, next) => {

    const { name, checked } = ctx.request.body;
    tasks.forEach((item) => {
        if (item.name === name) {
            item.checked = !item.checked
        }
    })


    // console.log(tasks)
    ctx.response.body = { status: 'success' }

})

router.post('/addTask', async(ctx, next) => {

    const { name } = ctx.request.body;
    tasks.push({
        name,
        checked: false
    })

    ctx.response.body = { status: 'success' }

})


router.post('/deleteTask', async(ctx, next) => {

    const { name } = ctx.request.body;
    // tasks.pop({
    //     name
    // })
    let index
    tasks.forEach((item, i) => {
        if (item.name === name) {
            index = i
        }
    })
    tasks.splice(index, 1)

    ctx.response.body = { status: 'success' }

})


router.get('/login', async(ctx, next) => {

    // const { name } = ctx.request.query
    // ctx.session.user = { name }
    // console.log('user', ctx.session.user)


    await ctx.render('login')

})

router.post('/login', (ctx, next) => {
    const { name, password } = ctx.request.body

    let data = JSON.stringify({ name, gender: 0 })

    let content = JSON.stringify({ password, gender: 0 })


    // ctx.cookies.set('user', data)
    // ctx.cookies.set('user', data, { maxAge: 7 * 24 * 60 * 60 * 1000 }); //过期时间：一周
    ctx.session.user = data

    ctx.session.password = content


    // ctx.cookies.set('user', 'zhao');

    // ctx.response.body = { name, password };
    ctx.response.body = { status: 'success' };
})

router.get('/loginTest', async(ctx, next) => {

    let user = ctx.session.user;

    let password = ctx.session.password;

    // if (ctx.cookies.get('user')) {
    //     user = JSON.parse(ctx.cookies.get('user'));
    // }

    // console.log(user.name)

    if (user) {
        await ctx.render('test') //test是test.njk页面
    } else {
        ctx.redirect('/login')
    }

    if (password) {
        await ctx.render('test') //test是test.njk页面
    } else {
        ctx.redirect('/login')
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