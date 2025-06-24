const express = require('express');
const {
  createTournament,
  getTournaments,
  getTournament,
  updateTournament,
  deleteTournament,
} = require('../controllers/tournamentController');

const router = express.Router();

// Public routes
router.get('/', getTournaments);
router.get('/:id', getTournament);

// Admin routes (add auth middleware in production)
router.post('/', createTournament);
router.put('/:id', updateTournament);
router.delete('/:id', deleteTournament);

module.exports = router;
