module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });

    // 커스텀 소켓 이벤트 예시
    socket.on('message', (data) => {
      io.emit('message', data); // 모든 클라이언트에 브로드캐스트
    });

    // 기존에 있던 다른 소켓 이벤트가 있다면 여기에 추가
  });
}; 