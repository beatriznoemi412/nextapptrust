import Header from "@/components/common/Header/header";
import ProfilePageContent from "./content";
import { Metadata } from "next";
import { METADATA } from "../metadata";

export const metadata: Metadata =  METADATA;

export default function ProfilePage() {
 
  return (
    <>
      <Header/>
       <ProfilePageContent/>
    </>
  );
}