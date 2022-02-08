
class DoneSuccessPlugin {
  constructor (options) {
    this.options = options;
  }

  apply(compiler){
    console.log('DoneSuccessPlugin runing')
    compiler.hooks.done.tap('DoneSuccessPlugin', compilation => {
      console.log(this.options.msg)
    })
  }
}

module.exports = DoneSuccessPlugin;