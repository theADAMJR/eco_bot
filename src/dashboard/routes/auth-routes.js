import express from 'express';
import authClient from '../modules/auth-client.js';

export const router = express.Router();

router.get('/login', (req, res) => res.redirect(authClient.authCodeLink.url));

router.get('/auth', async (req, res) => {
  try {
    const key = await authClient.getAccess(req.query.code);
    res.cookie.set('key', key);
  } finally {
    res.redirect('/dashboard');
  }
});

router.get('/logout', (req, res) => {
  res.cookies.set('key', undefined);
  res.redirect('/');
});
