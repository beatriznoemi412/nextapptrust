
import Header from "@/components/common/header";
import { colors } from "@/app/theme/colors";
import { Metadata } from "next";
import { METADATA } from "./metadata";

export const metadata: Metadata =  METADATA;

export default async function Home() {
  
  return (
    <>
      <Header />
      <section style={{background: colors.primary,  minHeight: 'calc(100vh - 72px)'}} className="p-5">
        <div className="max-w-4xl mb-5 mx-auto bg-ct-dark-100 rounded-md py-5 px-8 justify-center items-center">
          <h1 className="text-xl mb-10 font-semibold">
            TITULO PRINCIPAL
          </h1>
          <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <br />
          </p>
        </div>

        

      </section>
    </>
  );
}