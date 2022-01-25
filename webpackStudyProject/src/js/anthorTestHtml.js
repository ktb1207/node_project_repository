import { isHtml } from '../utils/index.js';
import { defineComponent } from 'vue';
('vue');
export function showAnthorTestHtml(target) {
  var testStr = 'school.css';
  const divElement = document.createElement('div');

  const p1 = document.createElement('p');
  p1.innerText = `被检测字符：${testStr}`;

  const p2 = document.createElement('p');
  p2.innerText = `检测结果：${isHtml(testStr)}`;

  divElement.appendChild(p1);
  divElement.appendChild(p2);
  console.log(defineComponent);
  target.appendChild(divElement);
}
