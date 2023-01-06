import {
  Image,
  Box,
  Text,
  BreadcrumbItem,
  BreadcrumbLink,
  SimpleGrid,
  GridItem,
} from '@chakra-ui/react';
import Logo from '../assets/logo.png';

export default function NavBar() {
  return (
    <Box
      textAlign='center'
      padding='10px'
      bg='brand.primary'
      height='74px'
      color='white'
      fontSize='1.5rem'
      columns={1}
      spacing={2}
    >
      <Image src={Logo} w={140} h={50} alt='Logo de Genshin Impact'></Image>
      
    </Box>
  );
}
