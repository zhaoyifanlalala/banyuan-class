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

const port = process.env.PORT || config.port

// error handler
onerror(app)




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
    var index = 0
    for (let i = 0; i < tasks.length; i++) {

        if (tasks[i].name == name) {
            index = i;
        }
    }
    tasks.splice(index, 1)

    ctx.response.body = {
        index
    }

    // ctx.response.body = { status: 'success' }

})


routes(router)
app.on('error', function(err, ctx) {
    console.log(err)
    logger.error('server error', err, ctx)
})

module.exports = app.listen(config.port, () => {
    console.log(`Listening on http://localhost:${config.port}`)
})