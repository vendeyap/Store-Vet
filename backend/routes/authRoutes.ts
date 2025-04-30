import express from "express";
import User from "../models/user";

const router = express.Router();

router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Verificar si ya existe
        const exists = await User.findOne({ email });
        if (exists) {
            return res.status(400).json({ message: "El usuario ya existe" });
        }

        // Crear nuevo usuario
        const newUser = new User({ name, email, password });
        await newUser.save();

        res.status(201).json({ message: "Usuario creado exitosamente 🎉" });
    } catch (error) {
        res.status(500).json({ message: "Error al registrar", error });
    }
});

export default router;
