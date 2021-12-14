import { EventEmitter } from 'events';

class MyEmiter extends EventEmitter{};

const myEmitter = new MyEmiter();

myEmitter.on('hello', () => {
  console.log('hello 有人喊你啦');
});

myEmitter.on('error', (e) => {
  console.log(e)
})

myEmitter.emit('hello');
myEmitter.emit('error', new Error('an error happen'))