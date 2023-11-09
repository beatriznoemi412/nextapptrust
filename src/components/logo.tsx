import React from 'react';
import { Image } from "@chakra-ui/react";
import { NextRouter } from 'next/router';

interface LogoProps {
  altText: string;
  router?: NextRouter;
}

const Logo: React.FC<LogoProps> = ({ altText, router }) => {
  return (
    <div>
     
      {router && (
        <p>Current Path from Logo: {router.pathname}</p>
      )}
      <Image src={"./images/logo.png"} boxSize={'40px'} alt={altText} />
    </div>
  );
};

export default Logo;
