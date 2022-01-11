window.onload = function () {
  console.log(window.location)
  console.log(window.history)
  // history
  const historyButton = document.getElementById('history')
  historyButton.addEventListener('click', function() {
    window.location.href = 'history/index.html'
  })

  // history go
  const historyGo = document.getElementById('historyGo')
  historyGo.addEventListener('click', function () {
    window.history.go(1)
  })

  // historyForward
  const historyForward = document.getElementById('historyForward');
  historyForward.addEventListener('click', () => {
    window.history.forward()
  })
}