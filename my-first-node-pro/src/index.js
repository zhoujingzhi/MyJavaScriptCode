import _ from 'lodash';
import './style.css';
// import myImgIcon from './delete.gif';
import printMe from './print.js';
  function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.appendChild(btn);
    element.classList.add('hello');
    // 将图像添加到我们现有的 div。
    // var myimg = new Image();
    // myimg.src = myImgIcon;
    // element.appendChild(myimg);
    // console.log('ss阿')
    return element;
  }

  document.body.appendChild(component());