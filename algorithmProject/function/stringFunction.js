

function getFunByStr(str) {
  if (typeof str !== 'string') {
    return;
  }

  const ab = {
    methods: {
      add: `${function (a, b) {return a + b}}`
    }
  }

  console.log(ab.methods.add(1,2))

}

getFunByStr('456789');