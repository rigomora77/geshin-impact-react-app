import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { WeaponItem } from '../services/launches';
import {
  Card,
  Center,
  Image,
  Link,
  CardBody,
  Heading,
  Text,
  Button,
  Stack,
  CardFooter,
} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import PaimonBuild from '../assets/paimon_build.png';

const Weapon = () => {
  const [weapon, setWeapon] = useState(null);

  const params = useParams();
  useEffect(() => {
    WeaponItem(params.id, setWeapon);
  }, []);

  return (
    <>
      {weapon != null ? (
        
        <Card>
          <Text>{params.id}</Text>
          <Text>{weapon.type}</Text>
          <Text>{weapon.rarity}</Text>
          <Text>{weapon.baseAttack}</Text>
          <Text>{weapon.passiveName}</Text>
          <Text>{weapon.passiveDesc}</Text>
          <Text>{weapon.location}</Text>
        </Card>
        
      ) : (
        <Card>
          <Center padding='6'>
            <Text fontFamily='unset' fontSize='2rem' fontWeight='bold'>
              Página en construcción
            </Text>
          </Center>

          <Center padding='6'>
            <Text fontFamily='unset' fontSize='1.5rem'>
              Estamos trabajando para que tu experiencia sea la mejor
            </Text>
          </Center>

          <Center>
            <Image
              maxW={{ base: '100%', sm: '250px' }}
              src={PaimonBuild}
              alt='Imagen de Paimon pidiendo un abrazo'
            ></Image>
          </Center>

          <Center padding='6'>
            <Text fontFamily='unset' fontSize='1.5rem' fontWeight='bold'>
              Este recurso aún no está disponible
            </Text>
          </Center>

          <Center>
            <Button
              leftIcon={<ArrowBackIcon />}
              variant='ghost'
              colorScheme='blue'
            >
              <Link style={{ textDecoration: 'none' }} href={'/character'}>
                Regresar a lista de personajes
              </Link>
            </Button>
          </Center>
        </Card>
      )}
    </>
  );
};

export default Weapon;
