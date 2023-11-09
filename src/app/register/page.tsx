

import Header from "@/components/common/header";
import RegisterPageContent from "./content";
import { Metadata } from "next";
import { METADATA } from "../metadata";
import { useRouter } from 'next/navigation';
import { NextPage } from "next";

export const metadata: Metadata =  METADATA;

const RegisterPage: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Header router={router}/>
      <RegisterPageContent/>
    </>
  );
}
export default RegisterPage;