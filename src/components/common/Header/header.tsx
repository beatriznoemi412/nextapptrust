"use client"
import { HamburgerIcon  } from "@chakra-ui/icons";
import { Button, HStack, Image, Menu, MenuButton, MenuItem, MenuList, Text, useDisclosure} from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from 'next/navigation';

const Header = () => {
  const { data: session } = useSession();
  const user = session?.user;
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleMenuClick = (path: string) => {
    router.push(path);
    onClose();// Cierra el menú después de hacer clic en un enlace
  };

  return (
    <header className="bg-white sm:px-4 sm:py-4 shadow-md">
      <nav className="flex justify-between container items-center">
        <Link href="/" className="text-ct-dark-600 sm:text-xl md:text-2xl font-semibold">
          <HStack>
            <Image src={"/images/logo.png"} boxSize={'40px'} alt="Logo" />
            <Text>Trust</Text>
          </HStack>
        </Link>

        {/* Menú para pantallas más grandes */}
        <HStack spacing={4} display={{ base: "none", md: "flex" }}>
          <Link href="/" className="text-ct-dark-600 transition duration-300 ease-in-out border border-transparent rounded-md p-2 hover:border-blue-400 hover:text-blue-400">
            Inicio
          </Link>
          {!user ? (
            <>
              <Link href="/login" className="text-ct-dark-600 transition duration-300 ease-in-out border border-transparent rounded-md p-2 hover:border-blue-400 hover:text-blue-400">
                Iniciar Sesión
              </Link>
              <Link href="/register" className="text-ct-dark-600 transition duration-300 ease-in-out border border-transparent rounded-md p-2 hover:border-blue-400 hover:text-blue-400">
                Regístrate
              </Link>
            </>
          ) : (
            <>
              <Link href="/" className="text-ct-dark-600 _hover={{color: 'blue.500'}}">
                Inicio
              </Link>
              <span className="cursor-pointer" onClick={() => signOut()}>
                Desconectar
              </span>
            </>
          )}
        </HStack>

          {/* Icono de hamburguesa para pantallas más pequeñas */}
         
          <Menu>
          <MenuButton variant={'outlined'} as={Button} onClick={isOpen ? onClose : onOpen} display={{ base: "flex", md: "none" }}>
            <HamburgerIcon fontSize={'1.4rem'} />
          </MenuButton>
          <MenuList>
          <MenuItem onClick={() => handleMenuClick('/')}>Inicio</MenuItem>
            {!user && (
              <>
                <MenuItem onClick={() => handleMenuClick('/login')}>Login</MenuItem>
                <MenuItem onClick={() =>  handleMenuClick('/register')}>Regístrate</MenuItem>
              </>
            )}
            {user && (
              <>
                <MenuItem onClick={() =>  handleMenuClick('/profile')}>Perfil</MenuItem>
                <MenuItem onClick={() => signOut()}>Desconectar</MenuItem>
              </>
            )}
          </MenuList>
        </Menu>
      </nav>
    </header>
  );
};

export default Header;