import ResetPasswordForm from "./form";
import Header from "@/components/common/Header/header";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import { METADATA } from "../metadata";


export const metadata: Metadata = METADATA;

export default async function ResetPasswordPage({ searchParams }: any) {
 
  const { verificationRequest } = searchParams;

  // Ensure that verificationRequest is an object with necessary properties
  if (
    verificationRequest &&
    verificationRequest.userId &&
    new Date() < verificationRequest.expires
  ) {
    try {
      // Assuming verificationRequest is an object, you might want to validate its structure
      const user = await prisma.user.findFirst({
        where: {
          id: verificationRequest.userId,
        },
      });

      if (!user) {
        // Handle the case where user is null
        console.error("User data is null.");
        // You might want to redirect, display an error message, or handle it in some way
        return (
          <>
            <Header />
            <p>Error: User data is null.</p>
          </>
        );
      }

      

      // Render the component with the user data
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
          <Header  />
          <p>Error fetching user data. Please try again.</p>
        </>
      );
    }
  }

  // Render the component without user data or handle the case where the parameters are not valid
  return (
    <>
      <Header />
     
      <p>Verification parameters are not valid.</p>
    </>
  );
}

