import { useEffect, useState } from 'react';
import { getAllCharacters, API_BASE } from '../services/launches';
import {
  Container,
  Card,
  SimpleGrid,
  CardHeader,
  Image,
  Link,
  CardBody,
  Heading,
  Text,
  Button,
  CardFooter,
} from '@chakra-ui/react';

const Home = () => {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    getAllCharacters(setCharacters);
  }, []);

  return (
    <>
      <Heading align='center' color='brand.primary' margin='20px'>
        Lista de Personajes Genshin Impact
      </Heading>
      
      <SimpleGrid 
        spacing={4}
        templateColumns='repeat(auto-fill, minmax(300px, 4fr))'
      >
        {characters != null ? (characters.map((character) => (
          <Container key={character} maxW='300px'>
          <Card bg='gray.100' w='280px' h='600px' align='center'>
            <CardHeader>
              <Heading
                fontFamily='unset'
                align='center'
                textTransform='uppercase'
                color='gray.600'
              >
                {character}
              </Heading>
            </CardHeader>

            <CardBody>
              <Image
                borderRadius='lg'
                width={200}
                src={API_BASE + `/${character}/card`}
                alt=''
              />
            </CardBody>

            <CardFooter>
              <Button size='md' variant='solid' colorScheme='facebook'>
                <Text color='white'>
                  <Link style={{ textDecoration: 'none' }} href={`/character/${character}`}>
                    Detalles del personaje
                  </Link>
                </Text>
              </Button>
            </CardFooter>
          </Card>
          </Container>
        ))
      ):('No data')}
      </SimpleGrid>
    </>
  );
};

export default Home;
