const express = require('express');
const { check } = require('express-validator');
const { register, login } = require('../controllers/authController');
const validate = require('../middleware/validate');
const router = express.Router();

router.post(
  '/register',
  [
    check('email').isEmail().withMessage('Enter a valid email address').normalizeEmail(),
    check('username').notEmpty().withMessage('Username is required').trim().escape(),
    check('password').isLength({ min: 8 }).withMessage('Password must be at least 8 chars'),
  ],
  validate,
  register
);

router.post('/login', login);

module.exports = router;
