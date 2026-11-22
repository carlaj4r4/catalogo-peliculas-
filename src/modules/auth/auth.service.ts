import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../users/user.model";

export const register = async (
  name: string,
  email: string,
  password: string
) => {

  const existingUser =
    await User.findOne({ email });

  if (existingUser) {
    throw new Error(
      "El email ya está registrado"
    );
  }

  const hashedPassword =
    await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  return user;
};
export const login = async (
  email: string,
  password: string
) => {

  const user =
    await User.findOne({ email });

  if (!user) {
    throw new Error(
      "Usuario no encontrado"
    );
  }

  const isValidPassword =
    await bcrypt.compare(
      password,
      user.password
    );

  if (!isValidPassword) {
    throw new Error(
      "Contraseña incorrecta"
    );
  }

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET as string,
    {
      expiresIn: "1h",
    }
  );

  return token;
};