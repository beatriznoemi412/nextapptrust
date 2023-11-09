import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

interface ErrorResponse {
  error: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  console.log('Método de la solicitud:', req.method);
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      // Validación básica de contraseña
      if (!password) {
        throw new Error('La contraseña es obligatoria.');
      }
      console.log('Valor de password:', password);
       // Hash de la contraseña utilizando bcrypt
       const saltRounds = 10;
       const hashedPassword = await bcrypt.hash(password, saltRounds);

      // Crear el usuario en la base de datos
      const user = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
        },
      });

      res.status(200).json({ message: 'Usuario registrado con éxito', user });
    } catch (error: any) {
      const errorMessage: string = error instanceof Error ? error.message : 'Error desconocido';
      const responseError: ErrorResponse = { error: errorMessage };

      res.status(500).json(responseError);
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}
