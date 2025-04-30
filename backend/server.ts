// backend/server.ts
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/authRoutes";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
    res.send("Servidor funcionando 🚀");
});

const PORT = process.env.PORT || 4000;
// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI || "")
    .then(() => console.log("Conectado a MongoDB"))
    .catch((err) => console.error("Error al conectar MongoDB", err));
// Rutas
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

