import {
  Box,
  Text,
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Button,
  Link,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import MainPhoto from '../assets/Genshin_main.jpg';

function HomePage() {
  return (
    <>
      <Box w='100%' padding={10}>
        <strong>Genshin Impact</strong> es un videojuego de rol de acción de
        mundo abierto y gratuito, con una mecánica de monetización de gacha para
        conseguir elementos adicionales como personajes especiales y armas. Es
        el quinto videojuego desarrollado por HoYoverse (conocido como miHoYo en
        China), tras los 3 juegos principales de la serie Honkai: Houkai Gakuen
        (Zombiegal Kawaii), Houkai Gakuen 2 (Gun Girl Z) y Honkai Impact 3rd, y
        Tears of Themis. Genshin Impact fue lanzado oficialmente a nivel mundial
        el 28 de septiembre de 2020, y se encuentra disponible en las
        plataformas Android, iOS, Microsoft Windows, PlayStation 4 y PlayStation
        5. Está previsto un lanzamiento futuro en Nintendo Switch.
      </Box>

      <Wrap padding='4' spacing='60px' justify='center' h='100%'>
        <WrapItem>
          <Card w='280px' h='450px'>
            <CardHeader>
              <Heading size='md' align='center'>
                {' '}
                Personajes
              </Heading>
            </CardHeader>
            <CardBody>
              <Text align='center'>
                Genshin impact cuenta con un particular sistema de construcción
                de personajes, donde se le podrán equipar el arma
                correspondiente, y un total de 5 artefactos, que se componen en
                flor, pluma, reloj, cáliz, y corona, que aumentarán los
                atributos o estadísticas del personaje según el set que se arme
              </Text>
            </CardBody>
            <CardFooter>
              <Button
                width='240px'
                size='md'
                variant='solid'
                colorScheme='facebook'
              >
                <Text>
                  <Link href={`/character/`}>Lista personajes</Link>
                </Text>
              </Button>
            </CardFooter>
          </Card>
        </WrapItem>

        <WrapItem>
          <Card w='280px' h='450px'>
            <CardHeader>
              <Heading size='md' align='center'>
                Armas
              </Heading>
            </CardHeader>
            <CardBody>
              <Text align='center'>
                Se equipan para ayudar al jugador durante sus misiones al
                infligir daño a los enemigos. Existen 5 tipos diferentes de
                armas en Genshin Impact, y cada personaje puede usar sólo un
                tipo. Al igual que los personajes, las armas ganan experiencia e
                incrementan su nivel al consumir otras armas o usando materiales
                para mejorarlas
              </Text>
            </CardBody>
            <CardFooter>
              <Button
                width='240px'
                size='md'
                variant='solid'
                colorScheme='facebook'
              >
                <Text>
                  <Link href={`/character/`}>Lista de armas</Link>
                </Text>
              </Button>
            </CardFooter>
          </Card>
        </WrapItem>

        <WrapItem>
          <Card w='280px' h='450px'>
            <CardHeader>
              <Heading size='md' align='center'>
                {' '}
                Contacto
              </Heading>
            </CardHeader>

            <CardBody>
              <Text mt='30px' align='center'>
                Esta página es requisito para finalizar un BootCamp de React
                através de CódigoFacilito, cualquier recomendación, sugerencia o
                crítica constructiva será muy bien recibida por este medio.
                Tenga total libertad de emitir su opinión sobre este sitio.
              </Text>
            </CardBody>

            <CardFooter>
              <Button
                width='240px'
                size='md'
                variant='solid'
                colorScheme='facebook'
              >
                <Text>
                  <Link href={`/character`}>Formulario</Link>
                </Text>
              </Button>
            </CardFooter>
          </Card>
        </WrapItem>
      </Wrap>
    </>
  );
}

export default HomePage;
