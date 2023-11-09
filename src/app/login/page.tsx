
import PageContainer from "@/components/common/pageContainer";
import { LoginForm } from "./form";
import Header from "@/components/common/header";
import PageTitle from "@/components/common/pageTitle";
import { Metadata } from "next";
import { METADATA } from "../metadata";
import { useRouter } from 'next/navigation';
import { NextPage } from "next";

export const metadata: Metadata =  METADATA;


  const LoginPage: NextPage = () => {
    const router = useRouter();
  return (
    <>
      <Header router={router} />
      <PageContainer>
        <PageTitle title="Iniciar Sesión"/>
        <LoginForm />
      </PageContainer>
    </>
  );
}
export default LoginPage;