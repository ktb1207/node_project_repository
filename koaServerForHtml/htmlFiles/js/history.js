window.onload = function () {
  console.log('history load')
  console.log(window.history.length)
  console.log(window.history.state)
  // 返回
  const back = document.getElementById('back');
  back.addEventListener('click', function () {
    window.history.back()
  })

  // forward
  const forward = document.getElementById('forward')
  forward.addEventListener('click', () => {
    window.history.forward();
  })

  // reload
  const reload = document.getElementById('reload');
  reload.addEventListener('click', function () {
    window.history.go(0)
  })

  // go back
  const goBack = document.getElementById('goBack');
  goBack.addEventListener('click', () => {
    window.history.go(-1)
  })

  // pushState
  const pushState = document.getElementById('pushState');
  pushState.addEventListener('click', () => {
    const state = {
      msg: 'test pushState'
    }

    window.history.pushState(state, 'null', 'stateOne')
  })

  // pushStateSecond
  const pushStateSecond = document.getElementById('pushStateSecond');
  pushStateSecond.addEventListener('click', () => {
    const state = {
      msg: 'push state two'
    }
    window.history.pushState(state, 'null', 'state/two')
  })


  // 监听history state变化
  window.onpopstate = function (state) {
    console.log(window.history.length)
    console.log(window.history.state)
    console.log(state)
  }
}