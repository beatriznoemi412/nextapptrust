import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

const checkValidEmailString = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export async function POST(req: Request) {
  try {
    const { email, password} = (await req.json()) as {
     
      email: string;
      password: string;
     
    };

    if (!email || !password ) {
      throw new Error("Por favor, complete todos los campos.");
    }

    if (password.length < 8) {
      throw new Error("La contraseña debe tener al menos 8 caracteres.");
    }

    if (!checkValidEmailString(email)) {
      throw new Error("El correo electrónico no es válido.");
    }

    const hashed_password = await hash(password, 12);

   
    const newUser = await prisma.user.create({
      data: {
      
        email: email.toLowerCase(),
        password: hashed_password,
      },
    });

    
    return NextResponse.json({
      user: {
        email: newUser.email,
      },
    });
  } catch (error: any) {
    let message = error.message;
    if (error.code === "P2002") {
      message = "El correo electrónico ya está registrado";
    }
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: message,
      }),
      { status: 500 }
    );
  }
}

