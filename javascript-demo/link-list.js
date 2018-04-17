"use strict";
function LinkedList(){
    let Node = function(item){
        this.item = item;
        this.next = null;
    }
    let length = 0;//链表长度
    let head = null;//列表中的第一个节点
    /**
     * 在链表尾部追加元素
     * @param {*} item 
     */
    this.append = function(item){
        let node = new Node(item);
        let current = null;
        if(head === null){//如果第一个节点为空,将这个节点作为第一个节点 
            head = node;
        }else{//如果第一个节点不为空
            current = head;
            //循环访问列表
            //只要还有下一项就继续
            //直到找到最后一项目
            while(current.next){
                current = current.next;
            };
            current.next = node;
        };
        length++;//更新链表长度
    };
    this.getHead = function(){
        return head
    };
    this.insert = function(position,item){
            
    };
};
var linkedList = new LinkedList();
linkedList.append('box');
linkedList.append('box1');
linkedList.append('box2');
console.log(linkedList.getHead())