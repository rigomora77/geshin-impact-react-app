import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Skill from './CharacterSkillTalents';
import { CharacterItem, API_BASE } from '../services/launches';
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

const Character = () => {
  const [character, setCharacter] = useState(null);

  const params = useParams();
  useEffect(() => {
    CharacterItem(params.id, setCharacter);
  }, []);

  return (
    <>
      {character != null ? (
        <Card
          size='lg'
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
          bg='gray.100'
          margin={10}
        >
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '160px' }}
            src={API_BASE + '/characters' + `/${params.id}/gacha-card`}
            alt='Dibujo del personaje de Genshin Impact'
          />

          <Stack>
            <CardBody>
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
                Vision: <strong>{character.vision}</strong>
              </Text>
              <Text marginBottom={2}>
                Arma: <strong>{character.weapon}</strong>
              </Text>
              <Text marginBottom={2}>
                Nación: <strong>{character.nation}</strong>
              </Text>
              <Text marginBottom={2}>
                Afiliación: <strong>{character.affiliation}</strong>
              </Text>
              <Text marginBottom={2}>
                Rareza: <strong>{character.rarity}</strong>
              </Text>
              <Text marginBottom={2}>
                Constelación: <strong>{character.constellation}</strong>
              </Text>
              <Card overflow='hidden' variant='none' marginTop={8}>
                <Text marginBottom={2}>
                  <strong>Descripción</strong>
                </Text>
                <Text marginBottom={2}>{character.description}</Text>
                <Skill />
              </Card>
            </CardBody>
            <CardFooter>
              <Button
                leftIcon={<ArrowBackIcon />}
                variant='ghost'
                colorScheme='blue'
              >
                <Link style={{ textDecoration: 'none' }} href={'/character'}>
                  Regresar a lista de personajes
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

export default Character;
