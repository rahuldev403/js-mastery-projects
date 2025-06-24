const express = require('express');
const { updateScore, getTopPlayers } = require('../services/leaderboardManager');
const router = express.Router();

router.post('/update', async (req, res) => {
  const { username, score } = req.body;
  await updateScore(username, score);
  res.json({ success: true });
});

router.get('/top', async (req, res) => {
  const top = await getTopPlayers(10);
  res.json(top);
});

module.exports = router;
