const Redis = require('ioredis');
const redis = new Redis(); // configure as needed

const LEADERBOARD_KEY = 'leaderboard';

exports.updateScore = async (username, score) => {
  await redis.zadd(LEADERBOARD_KEY, score, username);
};

exports.getTopPlayers = async (count = 10) => {
  return await redis.zrevrange(LEADERBOARD_KEY, 0, count - 1, 'WITHSCORES');
};
