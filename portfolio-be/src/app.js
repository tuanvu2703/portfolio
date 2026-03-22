'use strict';
import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import db from './models/index.js';
import router from './routes/router.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors({
  origin: ['portfolio-9dklxusg4-phamtuanvukg2703s-projects.vercel.app', 'http://localhost:3000'], // Thay bằng domain Vercel sau khi deploy FE
  credentials: true
}));
app.use(express.json()); // Để đọc được body kiểu JSON
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', router);


// Khởi động Server
const startServer = async () => {
  try {
    // Kiểm tra kết nối database
    await db.sequelize.authenticate();
    console.log('✅ Kết nối PostgreSQL thành công!');
    app.listen(PORT, () => {
      console.log(`🚀 Server đang chạy tại: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Lỗi kết nối database:', error);
    process.exit(1);
  }
};
startServer();
