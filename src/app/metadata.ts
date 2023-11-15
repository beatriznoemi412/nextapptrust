import { Metadata } from "next";

export const METADATA: Metadata = {
  title: 'Evaluación de CriptoSitios',
  description: 'Ayudamos a evaluar la veracidad y confiabilidad de páginas relacionadas con criptomonedas. Descubre información precisa y fiable para tomar decisiones informadas.',
  referrer: 'origin-when-cross-origin',
  keywords: ["criptomonedas", "veracidad", "confiabilidad", "evaluación", "crypto", "seguridad"],
  robots: 'index, follow',
  manifest: `./manifest.json`, 
  openGraph: {
    title: 'Evaluación de CriptoSitios - Información Confiable de Criptomonedas',
    description: 'Ayudamos a evaluar la veracidad y confiabilidad de páginas relacionadas con criptomonedas. Descubre información precisa y fiable para tomar decisiones informadas.',
    url: 'https://bitju.app',
    type: 'website',
    images: [
      {
        url:  'https://bitju.app/logo.png', //  se majusta la URL según sea necesario
        width:40,
        height: 40,
        alt: 'Evaluación de CriptoSitios - Información Confiable de Criptomonedas',
      },
    ],
    siteName: 'Evaluación de CriptoSitios',
    locale: 'es_AR',
  },
  twitter: {
    site: '@evaluacion_cryptositios', 
    siteId: 'https://bitju.app',
    creator: '@democracia_dao',
    creatorId: `@democracia_dao`,
    description: 'Ayudamos a evaluar la veracidad y confiabilidad de páginas relacionadas con criptomonedas. Descubre información precisa y fiable para tomar decisiones informadas.',
    title: 'Evaluación de CriptoSitios',
  },
    }
