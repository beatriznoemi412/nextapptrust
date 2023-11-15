
import Header from "@/components/common/Header/header";
import RegisterPageContent from "./content";
import { Metadata } from "next";
import { METADATA } from "../metadata";

export const metadata: Metadata =  METADATA;

export default function RegisterPage() {

  return (
    <>
      <Header />
      <RegisterPageContent/>
    </>
  );
}