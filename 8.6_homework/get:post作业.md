# 作业

1. 新生成一个koa服务器

   ```
   在终端进入文件夹内并输入：
   
   koa2 testServer
   cd testServer 
   npm i
   nodemon app.js
   
   ```

   

2. 写一个对应的get请求，路径为‘/add’，传入参数a与b，返回a与b的和

   ```json
   {
     "sum": a+b
   }
   ```

   ```js
   router.get('/add', async(ctx, next) => {
       let { a, b } = ctx.request.query
       let sum = Number(a) + Number(b)
       let obj = {
           sum
       }
       ctx.response.body = obj
   
   })
   
   url 中输入 http://localhost:3000/add?a=5&b=5
   结果为：
   {
     "sum": 10
   }
   ```

   

3. 写一个对应的post的请求，路径为‘/isPrime’，传入任意一个数字，返回是不是一个质数，如果是返回：

   ```json
   {
     "isPrime":true
   }
   ```

   如果不是，请返回false，并返回比他大的数字中，离他最近的那个质数

   ```json
   {
   	"isPrime":true，
     "number":xxxx
   }
   ```

   ```js
   router.post('/isPrime', async(ctx, next) => {
       let { num } = ctx.request.body;
       num = Number(num)
       const flag = isPrime(Number(num));
   
       let data = {}
       if (flag) {
           data.isPrime = true;
       } else {
           data.isPrime = false;
   
           while (!isPrime(num)) {
               num++;
           }
           data.num = num;
       }
   
       ctx.response.body = data
   })
   
   function isPrime(n) {
       for (var i = 2; i < n; i++) {
           if (n % i == 0) {
               return false;
           }
       }
       return true;
   }
   ```

   

4. 复习课堂内容

   1. 3次握手与4次挥手
   2. get与post区别
   3. tcp与udp区别
   4. 长连接与短连接

