# 作业

1. 给定insert语句

   ```
   db.banyuan.insertMany([{
       name:'isen',
       role:'teacher',
       age:28
   },{
       name:'tom',
       role:'student',
       age:20
   },{
       name:'lucy',
       role:'student',
       age:25
   },{
       name:'lily',
       role:'student',
       age:27
   },{
       name:'jack',
       role:'student',
       age:19
   },{
       name:'mike',
       role:'student',
       age:21
   }])
   ```

   更新每位student成员的信息，添加study字段，字段内容为，class为前端，teacher为isen，room为5号教室

   ```
   db.banyuan.updateMany({role:'student'},{$set:{study:{class:'前端',teacher:'isen',room:'5号教室'}}})
   ```

   找到所有学生的人数

   ```
   db.banyuan.find({role:'student'}).count()
   ```

   找到年龄小于24的学生人数

   ```
   db.banyuan.find({role:'student'},{age:{$lt:24}}).count()
   ```

   找到年龄小于等于20的学生，增加一个字段为important，值为true，意义在于年龄小需要重点关注，同时更新大于20的学生，important为false

   ```
   db.banyuan.find({
       $and:[
           db.banyuan.updateMany({role:'student',age:{$lte:20}},{$set:{important:true}}),
           db.banyuan.updateMany({role:'student',age:{$gt:20}},{$set:{important:false}})
       ]
   })
   ```

   

2. 根据所给的html文件，完成基本的注册流程。（前端与服务器端）

   1. 在检查完成前，不能点击button
   2. 检查用户名是否符合（大小写字母_-）4到16位
   3. 密码是否符合(字母或数字或下划线) 8 到 15位
   4. 并且确认用户密码俩次输入内容一致
   5. 如果检查完成，可以点击button发送post请求'/regist'
   6. koa服务器上，完成regist的请求，同样需要做name与password的验证，如果验证通过，返回{status:'success'}
   7. 前端收到{ status: success }之后，弹窗出 ‘注册成功’（alert('注册成功')）

3. 完成mongodb端的注册流程（对应的mongdb 语句）

   1. 假设需要检查用户名是否重复，给定用户名，查找collection中是否已经存在此用户名
   2. 如果注册流程ok，最后将用户名和密码，存入数据库。

