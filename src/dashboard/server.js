import cookies from 'cookies';
import express from 'express';
import { resolve } from 'path';
import { updateUser } from './modules/middleware.js';

import { router as authRoutes } from './routes/auth-routes.js';
import { router as dashboardRoutes } from './routes/dashboard-routes.js';
import { router as rootRoutes } from './routes/root-routes.js';

const app = express();

app.set('view engine', 'pug');
app.set('views', resolve('./src/dashboard/views'));

app.use(cookies.express(['132490yh21384y12']));

const assetsPath = resolve('./src/dashboard/assets');
app.use(express.static(assetsPath));
app.locals.basedir = assetsPath;

app.use(authRoutes, updateUser, rootRoutes, dashboardRoutes);

app.get('*', (req, res) => res.render(`errors/404`, {
  subtitle: '404'
}));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Dashboard is live on port ${port}`));
