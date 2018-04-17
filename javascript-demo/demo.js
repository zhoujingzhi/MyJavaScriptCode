"use strict";
/**
 * 数组迭代器
 */
function iterator() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push({
            str: 'str' + i,
            code: 'code' + i
        })
    };
    for (let n of arr) {
        //console.log(n)
    };
    let iterator = arr[Symbol.iterator]();
    console.log(arr);
    console.log(iterator);
    console.log(iterator.next().value);
    console.log(iterator.next().value);

    let aEntries = arr.entries();
    aEntries.next()
    console.log(aEntries.next().value);
    console.log(aEntries.next().value);
    console.log(aEntries.next().value);
    console.log(aEntries.next().value);
    console.log(aEntries.next().value);

    // let numbers = [0,1,2,3,4];
    // let aKeys = numbers.keys();
    // console.log(aKeys.next());
    // console.log(aKeys.next());
    // console.log(aKeys.next());

    let numbers = [0, 1, 2, 3, 4];
    console.log(numbers.keys().next());
    console.log(numbers.keys().next())
    console.log(numbers.keys().next())
}

function Tform() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push({
            str: 'str' + i,
            code: 'code' + i,
            index: i
        })
    };
    console.log(arr);
    let newArr = Array.from(arr, (x, y) => {
        if (y > 5) {
            return x
        } else {
            return false
        }
    });

    console.log(arr);
    console.log(newArr);
}
//Tform()

function Tof() {
    let arr = Array.of(1, { i: 3 }, 3);
    //传参构建数组
    console.log(arr);
};
//Tof();

function copyWithIn() {
    let arr = [1, 2, 3, 4, 5, 6, 7];
    arr.copyWithin(0, 3);
    console.log(arr)
}
// copyWithIn()
//排序
function reverse() {
    let arr = [1, 2, 3, 4, 5, 0];
    //arr.reverse();
    arr.sort(function (a, b) {
        return true;
    });
    console.log(arr);
}
//reverse()

function indexOfTest() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, {
        code: 10
    }];
    let index = arr.indexOf({ code: 10 });
    console.log(index);
}
// indexOfTest();

function find() {
    let arr = [1, 'zhou', 3, 4, 5, 6, 7, 8, 9, 10, {
        code: 10
    }];
    // let z = arr.find(function(v,k,arr){
    //     return (v=='zhou')
    // });
    // console.log(z);
    console.log(arr.includes({ code: 10 }));

}
/**
 * 栈对象
 */
function Stack() {
    let items = [];
    this.push = function (element) {
        items.push(element);
    };
    //移除顶端元素
    this.pop = function () {
        return items.pop();
    };
    //查看顶端元素
    this.peek = function () {
        return items[items.length - 1];
    };
    //是否为空
    this.isEmpty = function () {
        return items.length == 0;
    };
    this.clear = function () {
        items = [];
    };
    this.size = function () {
        return items.length
    };
    this.print = function () {
        console.log(items)
    }

};
let stack = new Stack();
let stack2 = new Stack();
console.log(stack);
stack.push({item:'box'});
stack.push({name:'Harry'});
stack.print();
console.log(stack.isEmpty());
console.log(stack.peek());
stack2.print()

/**
 * 将十进制数转换为二进制数
 * @param {*} decNumber 十进制数值
 */
function divideBy2 (decNumber){
    var remStask = new Stack(),
    rem,
    binaryString = '';
    while(decNumber>0){
        rem = Math.floor(decNumber%2);
        remStask.push(rem);
        decNumber=Math.floor(decNumber/2)
    };
    
    while(!remStask.isEmpty()){//如果栈里面还有数据
        binaryString += remStask.pop().toString();//把最顶端的数据拿出来
    }
    return binaryString
};
console.log(divideBy2(233));

/**
 * 十进制转任意进制数
 * @param {*} decNumber 十进制数
 * @param {*} base  输出进制
 */
function baseConverter (decNumber,base){
    var remStask = new Stack(),
    rem,
    baseString = '',
    digits = '0123456789ABCDEF';
    while(decNumber>0){
        rem = Math.floor(decNumber%base);
        remStask.push(rem);
        decNumber = Math.floor(decNumber/base);
    };
    remStask.print()
    while(!remStask.isEmpty()){//如果栈里面还有数据
        baseString += digits[remStask.pop()];//把最顶端的数据拿出来
    }
    return baseString
};
console.log(baseConverter(233,2));


