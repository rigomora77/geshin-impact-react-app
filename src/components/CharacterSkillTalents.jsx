import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { SkillTalents } from '../services/launches';
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
  Stack,
  StackDivider,
  Box,
  Badge,
} from '@chakra-ui/react';

const Skill = () => {
  const [skills, setSkill] = useState([]);
  const params = useParams();

  useEffect(() => {
    SkillTalents(params.id, setSkill);
  }, []);

  return (
    <>
      <Card size='sm' bg='blue.100' marginTop={2}>
        
        <CardHeader>
          <Heading size='md' align='center'>
            Talentos
          </Heading>
        </CardHeader>
        
        {skills.map((skill, index) => {
          return (
            <CardBody key={index}>
              
              <Box>
                <Heading
                  size='sm'
                  fontSize='mg'
                  mb='2'
                  textTransform='uppercase'
                >
                  {skill.name}
                </Heading>
                <Text ml='1' mb='2'>{skill.description}</Text>
                <Badge ml='1' marginBottom={2} as='b'>
                  {skill.unlock}
                </Badge>
              </Box>
            </CardBody>
          );
        })}
      </Card>
    </>
  );
};

export default Skill;
