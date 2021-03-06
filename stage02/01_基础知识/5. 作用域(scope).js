/*
一、基本概念
    一个变量的作用的范围

二、作用域区分
    1. 全局作用域
        - 直接编写在 script标签 内的代码都在全局作用域

        - 全局作用域在页面打开的时候创建，页面关闭的时候销毁

        - 在全局作用域中有一个全局对象 window
          我们可以直接使用它，它代表的是一个浏览器的窗口

        - 在全局作用域中：
            创建的变量都会作为window对象的属性保存
            创建的函数都会作为window的方法保存

            注意：关于变量的定义
                    var a = 10;
                    所有使用var关键字声明的变量，会在该作用域所有代码执行之前被声明

                    b = 10;
                    如果不用var关键字声明变量，则变量不会被提前声明


    2. 函数作用域
        var func = () => {
            // 这里面就是一个函数作用域
        }

三、关于全局作用域的污染 参考链接： https: //www.cnblogs.com/mmykdbc/p/6485984.html
    在js中， 如果某个变量没有var声明， 会自动移到上一层作用域中去找这个变量的声明语句， 如果找到， 就是用， 如果没找到，
    就继续向上寻找， 一直查找到全局作用域为止， 如果全局中仍然没有这个变量的声明语句， 那么自动在全局作用域进行声明， 这个就
    是js中的作用域链， 也叫变量提升



*/

console.log(a);

for (var a = 100; a > 0; a--) {

}