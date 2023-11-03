"use client";

import PageContainer from "@/components/common/pageContainer";
import { RegisterForm } from "./form";

import PageTitle from "@/components/common/pageTitle";
import { useSearchParams } from "next/navigation";

export default function RegisterPageContent() {
  const params = useSearchParams();
  const email = params.get("email");

  return (
      <PageContainer>
        
        <PageTitle title="Registro de usuario"/>
        <RegisterForm email={email} />
      </PageContainer>
  );
}