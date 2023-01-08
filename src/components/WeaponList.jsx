import { useEffect, useState } from 'react';
import { getAllWeapons, API_BASE } from '../services/launches';
import {
  Container,
  Center,
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

const WeaponList = () => {
  const [weapons, setWeapons] = useState(null);

  useEffect(() => {
    getAllWeapons(setWeapons);
  }, []);

  return (
    <>
      <Heading align='center' color='brand.primary' margin='20px'>
        Lista de Armas Genshin Impact
      </Heading>
      
      <SimpleGrid 
        spacing={4}
        templateColumns='repeat(auto-fill, minmax(300px, 4fr))'
      >
        {weapons != null ? (weapons.map((weapon) => (
          <Container key={weapon} maxW='300px'>
          <Card bg='gray.100' w='280px' h='600px' align='center'>
            <CardHeader>
              <Heading
                fontFamily='unset'
                align='center'
                textTransform='uppercase'
                color='gray.600'
              >
                {weapon}
              </Heading>
            </CardHeader>

            <CardBody>
              <Image
                borderRadius='lg'
                width={200}
                src={API_BASE + '/weapons' + `/${weapon}/icon`}
                alt=''
              />
            </CardBody>

            <CardFooter>
              <Button size='md' variant='solid' colorScheme='facebook'>
                <Text color='white'>
                  <Link style={{ textDecoration: 'none' }} href={`/weapon/${weapon}`}>
                    Detalles del arma
                  </Link>
                </Text>
              </Button>
            </CardFooter>
          </Card>
          </Container>
        ))
      ):(
        <Center padding='6'>
          <Text fontFamily='unset' fontSize='1.5rem' fontWeight='bold'>Cargando datos</Text>
        </Center>
      )}
      </SimpleGrid>
    </>
  );
};

export default WeaponList;