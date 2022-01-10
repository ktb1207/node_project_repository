import dgram from 'dgram';
// 创建指定 type 的 dgram.Socket 对象。type:udp4\udp6
const udpServer = dgram.createSocket('udp4');

/*****************dgram.Socket 事件***********************************/ 

// 在使用 close() 关闭套接字后会触发 'close' 事件。
udpServer.on('close', () => {
  console.log('server is closed')
})
// 在套接字关联到远程地址作为成功的 connect() 调用的结果之后触发
udpServer.on('connect', () => {
  console.log('有connect')
})
// 每当发生任何错误时都会触发 'error' 事件。
udpServer.on('error', (err) => {
  console.log(err)
})
udpServer.on('message', (msg,rinfo) => {
  console.log(`receive message from ${rinfo.address}:${rinfo.port}`);
  console.log(msg)
})
// 一旦 dgram.Socket 可寻址并且可以接收数据，则会触发 'listening' 事件。
udpServer.on('listening', () => {
  console.log('socked 正在监听中')
})

/*******************dgram.Socket 方法******************************/
// 绑定服务端口
udpServer.bind(8866)
// 返回包含套接字地址信息的对象。
const address = udpServer.address();
// 套接字接收缓冲区大小
const recvBufferSize = udpServer.getRecvBufferSize();
// 套接字发送缓冲区大小
const sendBufferSize = udpServer.getSendBufferSize();
// 
udpServer.send('将要发送的消息', 41235, 'localhost', (err) => {
  if (err) return;
  console.log('消息已发送')
})
// 关闭底层套接字并停止监听其上的数据。
udpServer.close()
// 广播
udpServer.on('listening', () => {
  // 开启广播
  udpServer.setBroadcast(true);
  // 发送指定广播地址
  udpServer.send('各位注意，这是广播消息', 88124, '1.1.1.255')
})

// 组播
const multicalAddress = '224.10.10.1';
udpServer.on('listening', () => {
  // 添加组播
  udpServer.addMembership(multicalAddress)
  // 发送组播消息
  udpServer.send('各位成员好，这是组内消息', 88124, multicalAddress);
})