import { Request, Response } from "express";
import User from "../models/user";

// 🔐 REGISTRAR USUARIO
export const registerUser = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "El usuario ya existe" });
        }

        const newUser = new User({ name, email, password });
        await newUser.save();
        console.log("🔐 Usuario creado:", newUser);


        res.status(201).json({ message: "Usuario registrado exitosamente 🎉" });
    } catch (error) {
        res.status(500).json({ message: "Error al registrar usuario", error });
    }
};


// 🔓 LOGIN
export const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user || user.password !== password) {
            return res.status(401).json({ message: "Credenciales inválidas" });
        }

        res.status(200).json({
            message: "Login exitoso",
            user: { name: user.name, email: user.email },
        });
    } catch (error) {
        res.status(500).json({ message: "Error al iniciar sesión", error });
    }
};
