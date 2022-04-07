window.onload = function () {
  const parser = new DOMParser();
  const str = '<h3 class="one">hello</h3><myComponent num="tom"><p>{{name}}</p><p class="p-one">段落</p></myComponent>';
  const getObj = parser.parseFromString(str, 'text/html');
  console.log(getObj.body.children)
}