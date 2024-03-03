import { WarningIcon } from "@chakra-ui/icons";
import { Card, CardBody, Flex, Heading, Text, Image } from "@chakra-ui/react";

export const Hero: React.FC = () => {
    return (
        <Card bg="gray.100" w="100%" h="90vh" p="8rem 0" color="black" borderRadius="0 0 80px 80px" id="hero">
            <CardBody display="flex" w="100%" alignItems="center">
                <Flex w="100%" gap="5rem" pl="6rem" align="flex-start">
                    <Flex w="60%" direction="column">
                        <Heading size="4xl" as="h1">
                            Priscila Rocan
                        </Heading>
                        <Heading size="2xl" as="h2">
                            Social Media
                        </Heading>
                        <Text pt="2rem">
                        Eu sou a Priscila, uma social media com uma paixão por contar histórias envolventes e criar conexões autênticas. Tenho atuado na área desde de 2021, ajudando marcas a brilharem online. Atualmente, estou fazendo parte do time da Daily Branding, uma agência de marketing criativo onde cada dia é uma oportunidade de transformar ideias em impacto!
                        <br/>
                        <br/>
                        Minha missão é criar conteúdos que não apenas atraem atenção, mas que também geram conversões e resultados reais. Seja construindo uma comunidade engajada ou desenvolvendo estratégias inovadoras, estou aqui para trazer um toque único ao seu mundo digital.
                        </Text>
                    </Flex> 
                    <Image h="400px" src="hero.jpeg" />
                </Flex>
            </CardBody>
        </Card>
    );
};