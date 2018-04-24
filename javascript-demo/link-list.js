"use strict";
function LinkedList() {
    let Node = function (item) {
        this.item = item;
        this.next = null;
    }
    let length = 0;//链表长度
    let head = null;//列表中的第一个节点
    /**
     * 在链表尾部追加元素
     * @param {*} item 
     */
    this.append = function (item) {
        let node = new Node(item);
        let current = null;
        if (head === null) {//如果第一个节点为空,将这个节点作为第一个节点 
            head = node;
        } else {//如果第一个节点不为空
            current = head;
            //循环访问列表
            //只要还有下一项就继续
            //直到找到最后一项目
            while (current.next) {
                current = current.next;
            };
            current.next = node;
        };
        length++;//更新链表长度
    };
    this.getHead = function () {
        return head
    };
    this.insert = function (position, item) {

    };
    /**
     * 删除目标元素的索引
     * @param {*} index 
     */
    this.removeAt = function (index) {
        if (typeof index != 'number' || index % 1 != 0 && index < 0 || index > length) return head;
        let i = 0,
            current = head,//目标
            previous;//目标的上一个元素
        if (index == 0) { //如果是删除第一个
            head = current.next//直接把它的下一个元素变成它
        } else {
            //否则找到目标元素的上一个元素
            while (i++ < index) {
                previous = current;//目标的上一个元素
                current = current.next//目标
            }
            previous.next = current.next;//将目标上一个元素的next指向目标下一个元素
        };
        return head
    }
};
var linkedList = new LinkedList();
linkedList.append('box');
linkedList.append('box1');
linkedList.append('box2');
console.log(linkedList.getHead());