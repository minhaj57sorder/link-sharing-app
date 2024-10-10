import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { createProxyMiddleware } from 'http-proxy-middleware';
import connectDB from './config/db.js';
import AuthRouter from './routes/user/auth/authRoutes.js';
import roleRoutes from './routes/roleRoutes.js';
import permissionRoutes from './routes/permissionRoutes.js';
import UserRouterSeq0 from './routes/user/user_list/userRoutes.js';
import user_linksRouterSeq1 from './routes/user_links/user_link_list/userLinksRoutes.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import { createServer } from 'http';
connectDB();
dotenv.config();
const app = express();
const httpServer = createServer(app);
const __dirname = path.resolve();
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.options('*', cors());
// This routes is example route to allaw react getting data from same origin
// This res.set route will remove Access-Control-Allow-OriginAccess
// to fetch at 'http://localhost:8080/' from origin 'http://localhost:9000'
// has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is
// present on the requested resource. If an opaque response serves your needs,
// set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
app.get('/cors', (req, res) => {
  res.send({ msg: 'This has CORS enabled 🎈' });
});
// Auth router
app.use('/api/user/auth', AuthRouter);
// Role router
app.use('/api/roles', roleRoutes);
// Permission router
app.use('/api/permissions', permissionRoutes);
// User router
app.use('/api/user/user_lists', UserRouterSeq0);
// UserLinks router
app.use('/api/user_links/user_link_lists', user_linksRouterSeq1);
// Upload router
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
// Custom error handler
app.use(errorHandler);
if (process.env.NODE_ENV === 'production') {
  // app.use('*', createProxyMiddleware({ target: 'http://localhost:5356', changeOrigin: true }));
  app.use(express.static(path.join(__dirname, '/production_frontend')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'production_frontend', 'index.html'));
    // res.send('Api is running now')
  });
} else {
  // hands up routes
  app.use(
    '*',
    createProxyMiddleware({
      target: 'http://localhost:5173',
      changeOrigin: true,
    }),
  );
  // app.get('/', (req, res) => {
  //     res.send('Api is running now')
  // })
}
app.use(notFound);
httpServer.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on http://localhost:${PORT}`,
  ),
);
// app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on http://localhost:${PORT}`))
