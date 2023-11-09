'use client'
import Header from "@/components/common/header";
import { colors } from "@/app/theme/colors";
//import { Metadata } from "next";
//import { METADATA } from "./metadata";
import { useRouter } from 'next/navigation';
import { NextPage } from "next";

//export const metadata: Metadata = METADATA;

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Header router={router} />
      <section style={{ background: colors.primary, minHeight: 'calc(100vh - 72px)' }} className="p-5">
        <div className="max-w-4xl mb-5 mx-auto bg-ct-dark-100 rounded-md py-5 px-8 justify-center items-center">
          <h1 className="text-xl mb-10 font-semibold">
            TITULO PRINCIPAL
          </h1>
          <p className="text-base">
            Somos un equipo apasionado y entusiastas de la tecnología, amantes de la innovación, que creemos en el
            poder del blockchain y la revolución que está impulsando en la actualidad. Nuestra misión es brindar información precisa,
            imparcial y actualizada sobre las diversas plataformas.
            Comenzamos nuestra tarvesía con el objetivo de convertirnos en una fuente confiable del espacio Blockchain.

          </p>
          <br />
          Nuestra Misión:
          <ul>
            <li>Proporcionar reseñas objetivas y detalladas de plataformas blockchain, para que puedas tomar decisiones acertadas.</li>
            <li>Mantenerte al tanto de las úlimas plataformas.</li>
            <li>Darte la oportunidad de que nos cuentes tu experiencia como usuario de dichos sitios.</li>
          </ul>
          </div>
          </section>
    </>
  );
}
export default Home;