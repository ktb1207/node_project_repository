window.onload = function () {
  function addContent() {
    const target = document.getElementById('app');
    const element = document.createElement('h3');
    element.innerHTML = 'hello webpack5';
    target.appendChild(element);
  }
  addContent();
};
