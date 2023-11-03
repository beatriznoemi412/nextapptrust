import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse(
      JSON.stringify({ status: "fail", message: "No estás logueado" }),
      { status: 401 }
    );
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: session.user?.email ?? '',
      },
    });

    return NextResponse.json({
      user,
    });
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

export async function PUT(request: Request) {
  const session = await getServerSession(authOptions);


  if (!session) {
    return new NextResponse(
      JSON.stringify({ status: "fail", message: "No estás logueado" }),
      { status: 401 }
    );
  }

  try {
    const { payload } = await request.json(); 
    if (!payload) {
      return NextResponse.json(
        JSON.stringify({
          status: "error",
          message: "La información enviada no es la correcta",
        }),
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: {
        email: session.user?.email ?? '',
      },
    });

    if (!user) {
      return new NextResponse(
        JSON.stringify({ status: "fail", message: "No existe el usuario" }),
        { status: 401 }
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
