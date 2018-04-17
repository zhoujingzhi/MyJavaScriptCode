"use strict";
/**
 * 队列
 */
function Enqueue(){
    let items = [];
    this.enqueue = function(e){//添加项目
        items.push(e);
    };
    this.dequeue = function(){//删除项
         return items.shift();
    };
    this.isEmpty = function(){//是否为空
        return items.length == 0;
    };
    this.front = function(){//查看队列第一项目
        return items[0];
    };
    this.size = function(){
        return items.length;
    }
    this.print = function(){
        console.log(items)
    }
};
//var queue = new Enqueue();
//console.log(queue);

function breakDemo(){
    let arr = []
    for(let i=0;i<10;i++){
        arr.push(i)
        //if(i==5) break;
        //console.log(i);
        var bb= 'd';
    };
    console.log(bb)
    // console.log(arr);
    arr.forEach(function(v){
        if(v==5) break;
        console.log(v);
    })
    console.log('hello word')
};
// breakDemo()
function PriorityQueue(){
    let items = [];
    /**
     * 
     * @param {数据} item 
     * @param {优先级} priority 
     */
    this.enqueue = function(item,priority){
        let queueItem = {
            item : item,
            priority : priority
        };
        let added = false;
        items.forEach(function(v,k,arr){
            if(queueItem.priority < v.priority){
                items.splice(k,0,queueItem);
                added = true;
                
                return;
            }
        })
        if(!added) items.push(queueItem);
    };
    this.print = function(){
        console.log(items);
    }

};
let priorityQueue = new PriorityQueue();
priorityQueue.enqueue('harry',1);
priorityQueue.enqueue('harry2',2);
priorityQueue.enqueue('harry3',1);
priorityQueue.print();
let arr = ['2','4','5'];
for(let i = 0;i<arr.length;i++){
    console.log(i)
};
arr.forEach(function(v,k,arr){
    console.log(k)
})