import { Metadata } from "next";

export const METADATA: Metadata = {
  title: 'Democracia DAO - Crypto por la Transparencia Electoral',
  description: 'Democracia DAO es una Organización Autónoma Descentralizada (DAO) que se forma para promover elecciones justas y transparentes en Argentina.',
  referrer: 'origin-when-cross-origin',
  keywords: ["bitju" ,"democracia" ,"elecciones" ,"dao" ,"fiscales" ,"contribuir" ,"biyu" ,"biyuya" ,"bitjuya" ,"bitjuja" ,"libertad a vanza","juntos p or el cambio","unidos p or la patria","miley" ,"massa" ,"b ullrich"
  ],
  robots: 'index, follow',
  manifest: `./manifest.json`,
  openGraph: {
    title: 'Democracia DAO - Crypto por la Transparencia Electora',
    description: 'Democracia DAO es una Organización Autónoma Descentralizada (DAO) que se forma para promover elecciones justas y transparentes en Argentina.',
    url: 'https://bitju.app',
    type: 'website',
    images: [
      {
        url: 'https://bitju.app/logo.png',
        width: 800,
        height: 600,
        alt: 'Democracia DAO - Crypto por la Transparencia Electora',
      },
    ],
    siteName: 'Democracia DAO',
    locale: 'es_AR',
  },
  twitter: {
    site: '@democracia_dao', 
    siteId: 'https://bitju.app',
    creator: '@democracia_dao',
    creatorId: `@democracia_dao`,
    description: `Democracia DAO es una Organización Autónoma Descentralizada (DAO) que se forma para promover elecciones justas y transparentes en Argentina.`,
    title: 'Democracia DAO - Crypto por la Transparencia Electora',
    images: [
      {
        url: 'https://bitju.app/logo.png',
        width: 800,
        height: 600,
        alt: 'Democracia DAO - Crypto por la Transparencia Electora',
      },
    ],
  }
}