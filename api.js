const express = require('express');
const router = express.Router();

router.get('/api/socket-url', (req, res) => {
  res.json({ url: "https://ggggame-socket.onrender.com" });
});

module.exports = router; 