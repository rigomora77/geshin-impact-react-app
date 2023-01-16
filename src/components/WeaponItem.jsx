import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { WeaponItem, API_BASE } from '../services/launches';
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
        <Card
          size='lg'
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
          bg='gray.100'
          margin={10}
          padding='6'
        >
          <Stack>
            <Heading
              fontFamily='unset'
              textTransform='uppercase'
              color='gray.600'
              marginTop={4}
              marginBottom={8}
            >
              {params.id}
            </Heading>
            <Text marginBottom={2}>
              <strong>Tipo:</strong> {weapon.type}
            </Text>
            <Text marginBottom={2}>
              <strong>Rareza:</strong> {weapon.rarity}
            </Text>
            <Text marginBottom={2}>
              <strong>Ataque base:</strong> {weapon.baseAttack}
            </Text>
            <Text marginBottom={2}>
              <strong>Habilidad pasiva:</strong> {weapon.passiveName}
            </Text>
            <Text marginBottom={2}>
              <strong>Descripción Habilidad:</strong>
              {weapon.passiveDesc}
            </Text>
            <Text marginBottom={2}>
              <strong>Obtención:</strong> {weapon.location}
            </Text>
            <CardFooter>
              <Button
                leftIcon={<ArrowBackIcon />}
                variant='ghost'
                colorScheme='blue'
              >
                <Link style={{ textDecoration: 'none' }} href={'/weapon'}>
                  Regresar a lista de armas
                </Link>
              </Button>
            </CardFooter>
          </Stack>
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
