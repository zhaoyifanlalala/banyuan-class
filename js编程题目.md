# 题目

1. ```js
   var val = 'c';
   var str = 'Value is' + (val === 'c') ? 'a':'b';
   console.log(str);
   ```

   结果是什么，为什么？

   ```
   结果是a
   三元运算符优先级是最低的，其次是加号，最后是括号，先执行val === 'c'结果为true,再执行条件判断，以为前面是字符串，所以条件判断结果是字符串，字符串返回的布尔也是true，最后结果为a。
   ```
   
   
   
2. 一个物体从1000米高的地方落下，每次弹起的高度是前一次高度的0.6倍，问多少次之后，高度小于1米。

   ```js
   		var count = 0;
       for (var i = 1000; i > 1; i *= 0.6) {
           count = count + 1;
       }
       console.log(count);
   ```

   

3. 物品a 2元，b 5元，c 15元，请问刚好花完100元有多少种情况？

   ```js
   		var num = 0;
       for (var a = 0; a <= 50; a++) {
           for (var b = 0; b <= 20; b++) {
               for (var c = 0; c <= 6; c++) {
                   if (2 * a + 5 * b + 15 * c == 100) {
                       num++;
                   }
               }
           }
       }
       console.log(num);
   ```

   

4. 求s=a+aa+aaa+aaaa+aaa aa ( 一共5个数字 )的值，其中a为一个数字，如 s = 1 + 11 + 111 + 1111 + 11111 （5个数字）

   ```js
   		var a = 1;
       var s = a + (a * 10 + a) 
       					+ (a * 100 + a * 10 + a) 
       					+ (a * 1000 + a * 100 + a * 10 + a) 
       					+ (a * 10000 + a * 1000 + a * 100 + a * 10 + a);
       console.log(s);
   ```

   

5. 孩子吃糖，第一天你给孩子买了一些糖，孩子每天吃糖的一半多一个，到了第10天的时候，发现只剩下一个糖了，问当初第一天买了多少糖？

   ```js
   		var num = 1;
       for (var i = 1; i < 10; i++) {
           num = (num + 1) / 0.5;
       }
       console.log(num);
   ```

   

6. 最近抖音有对折纸挑战，在不考虑难度的情况下，一张普通的0.0001米厚度的纸，多少次对折后，可以达到最高峰珠穆拉玛峰的高度8848米？

   ```js
   		var h = 0.0001;
       var height = 8848;
       var count = 0;
       while (h <= height) {
           count++;
           h = h * 2;
       }
       console.log(count);
   ```

   

7. 

   - 输入一个数字，首先判断是否为质数

     ```js
     		var number = Number(prompt('请输入一个整数'));
         var flag = true;
         if (number === 1 || number === 0) {
             console.log('不是质数');
         } else if (number === 2) {
             console.log('是质数');
         } else {
             for (var i = 2; i < number; i++) {
                 if (number % i == 0) {
                     flag = false;
                 }
             }
             if (flag == true) {
                 console.log('是质数');
             } else {
                 console.log('不是质数');
             }
         }
     ```

     

   - 如果不是质数，将其分解质因数 如：24 = 2 * 2 * 2 * 3，将分解出的质数打印出来。

     ```js
     		var number = Number(prompt('请输入一个整数'));
         var flag = true;
         var temp = number;
         if (number === 1 || number === 0) {
             console.log('不是质数');
         } else if (number === 2) {
             console.log('是质数');
         } else {
             for (var i = 2; i < number; i++) {
                 if (number % i == 0) {
                     flag = false;
                 }
             }
             if (flag == true) {
                 console.log('是质数');
             } else {
                 console.log('不是质数');
                 var str = '';
                 for (var j = 2; j <= number; j++) {
                     while (number % j == 0) {
                         number /= j;
                         str = str + j + '*';
                     }
                 }
                 var newStr = str.substring(0, str.length - 1)
                 console.log(temp + '=' + newStr);
             }
         }
     ```

     

