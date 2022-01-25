import './styles/main.css';
import {showTestHtml} from './js/testHtml.js';
import {showAnthorTestHtml} from './js/anthorTestHtml.js';
window.onload = function () {
  const target = document.getElementById('app');
  function showTitle() {
    const element = document.createElement('h3');
    const titleName = 'webpack5'
    element.innerHTML = `hello ${titleName}`;
    target.appendChild(element);
  }
  // 显示标题
  showTitle();
  // 检测1
  showTestHtml(target);
  // 检测2
  showAnthorTestHtml(target);
};
