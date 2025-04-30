// backend/server.ts
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoutes from './routes/authRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

mongoose
    .connect(process.env.MONGO_URI!)
    .then(() => {
        console.log('🟢 Conectado a MongoDB');
        app.listen(PORT, () => console.log(`🚀 Servidor en puerto ${PORT}`));
    })
    .catch((err) => console.error('❌ Error de conexión:', err));
