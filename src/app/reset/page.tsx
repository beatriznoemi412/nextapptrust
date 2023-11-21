import ResetPasswordForm from "./form";
import Header from "@/components/common/Header/header";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import { METADATA } from "../metadata";


export const metadata: Metadata = METADATA;

export default async function ResetPasswordPage({ searchParams }: any) {
    const { verificationRequest } = searchParams;
  
    if (
    verificationRequest &&
    verificationRequest.userId &&
    new Date() < verificationRequest.expires
  ) {
    try {

      const user = await prisma.user.findFirst({
        where: {
          id: verificationRequest.userId,
        },
      });

      if (!user) {

        console.error("User data is null.");

        return (
          <>
            <Header />
            <p>Error: User data is null.</p>
          </>
        );
      }

      return (
        <>
          <Header />
          <ResetPasswordForm user={user} />
        </>
      );
    } catch (error) {
      console.error("Error fetching user data:", error);
      // Handle the error, redirect, or display an error message as needed
      return (
        <>
          <Header />
          <p>Error fetching user data. Please try again.</p>
        </>
      );
    }
  }
  return (
    <>
      <Header />

      <p>Verification parameters are not valid.</p>
    </>
  );
}

