import { authOptions } from "@/lib/auth";

import { prisma } from "@/lib/prisma";

import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
export async function POST() {
  try {
    
    const session = await getServerSession(authOptions);
  
    if (!session) {
      return new NextResponse(
        JSON.stringify({
          error: 'No estás autenticado'
        }),
        { status: 401 }
      );
    }

    // Obtener el userId del correo electrónico de la sesión
    const userEmail = session?.user?.email;
    const user = await prisma.user.findUnique({
      where: { email: userEmail ?? 'noUser' },
    });

    if (!user) {
      return new NextResponse(
        JSON.stringify({
          error: 'No se encontró el usuario.',
        }),
        { status: 404 }
      );
    }
   
   
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: error.message,
      }),
      { status: 500 }
    );
  }
}