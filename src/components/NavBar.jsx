import {
  Image,
  Text,
  Link,
  Wrap,
  WrapItem,
  Flex,
  Container,
} from '@chakra-ui/react';
import Logo from '../assets/logo.png';

export default function NavBar() {
  return (
    <>
      <Wrap
        bg='brand.primary'
        position='relative'     
        height='74px'
        width='100%'
        align='center'
        justify='left'
      >
        <WrapItem padding='10px'>
          <Image src={Logo} w={140} h={50} alt='Logo de Genshin Impact'></Image>
        </WrapItem>

        <WrapItem>
          <Link style={{ textDecoration: 'none' }} href='/'>
            <Text color='white' fontSize='1.5rem' fontFamily='unset' ml='15px'>
              Inicio
            </Text>
          </Link>
        </WrapItem>
      </Wrap>
    </>
  );
}
