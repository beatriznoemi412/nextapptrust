import PageContainer from "@/components/common/pageContainer";
import { LoginForm } from "./form";
import Header from "@/components/common/header";
import PageTitle from "@/components/common/pageTitle";
import { Metadata } from "next";
import { METADATA } from "../metadata";

export const metadata: Metadata =  METADATA;

export default function LoginPage() {
  return (
    <>
      <Header />
      <PageContainer>
        <PageTitle title="Iniciar Sesión"/>
        <LoginForm />
      </PageContainer>
    </>
  );
}