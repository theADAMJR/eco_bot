import authClient from './auth-client.js';

export async function updateUser(req, res, next) {
  const key = res.cookies.get('key');
  if (key)
    res.locals.user = await authClient.getUser(key);

  return next();
} 

export async function validateUser(req, res, next) {
  return (res.locals.user)
    ? next()
    : res.render('errors/401');

} 