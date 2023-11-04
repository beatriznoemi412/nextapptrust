import { Metadata } from "next";

const siteUrl = "https://localhost:3000";

export const METADATA: Metadata = {
  title: 'Evaluación de CriptoSitios',
  description: 'Ayudamos a evaluar la veracidad y confiabilidad de páginas relacionadas con criptomonedas. Descubre información precisa y fiable para tomar decisiones informadas.',
  referrer: 'origin-when-cross-origin',
  keywords: ["criptomonedas", "veracidad", "confiabilidad", "evaluación", "crypto", "seguridad"],
  robots: 'index, follow',
  manifest: `${siteUrl}/manifest.json`, // ajusta la ruta del manifest según sea necesario
  openGraph: {
    title: 'Evaluación de CriptoSitios - Información Confiable de Criptomonedas',
    description: 'Ayudamos a evaluar la veracidad y confiabilidad de páginas relacionadas con criptomonedas. Descubre información precisa y fiable para tomar decisiones informadas.',
    url: siteUrl,
    type: 'website',
    images: [
      {
        url: `${siteUrl}/logo.png`, // ajusta la URL según sea necesario
        width: 40,
        height: 40,
        alt: 'Evaluación de CriptoSitios - Información Confiable de Criptomonedas',
      },
    ],
    siteName: 'Evaluación de CriptoSitios',
    locale: 'es_AR',
  },
};
