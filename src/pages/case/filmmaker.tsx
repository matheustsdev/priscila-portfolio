import { Footer } from "@/atoms/Footer";
import { NavMenu } from "@/molecules/NavMenu";
import { Flex, Heading, Text, Image } from "@chakra-ui/react";

const Filmmmaker: React.FC = () => {
    return (
        <Flex align="center" justify="flex-start" direction="column" pb="1rem" w="100vw" bg="gray.800" overflowX="hidden" color="white">
            <NavMenu />
            <Flex p="8rem 0" align="center" justify="flex-start" direction="column" w="100vw">
                <Heading as="h1" size="2xl" pb="4rem">
                    Filmmaker
                </Heading>
                <Flex direction="row" justify="space-between" align="center" w="100%" p="0 4rem">
                    <iframe width="400" height="600" src="https://www.youtube.com/embed/98NxkkqDkp4" ></iframe>
                    <iframe width="400" height="600" src="https://www.youtube.com/embed/TVF8FU9Oo5Q" ></iframe>                
                    <iframe width="400" height="600" src="https://www.youtube.com/embed/LZDnopVbvZA" ></iframe>
                </Flex>
                <Flex direction="column" align="center" p="4rem 0">
                    <Text mt="2rem" w="80%" textAlign="justify">
                    Nessa aba podemos ver alguns vídeos de uma loja de aluguel de roupas de noivas e de vestidos de festa. A proposta é trazer vídeos dinâmicos, mas ao mesmo tempo com um ar de elegância, mostrando os detalhes dos vestidos e como ele fica no corpo, para causar interesse nas clientes. Também é utilizado em alguns vídeos a utilização de takes de vestidos diferentes, para trazer a interação com o público na postagem.
                    </Text>
                </Flex>
            </Flex>
            <Footer />
        </Flex>
    )
}

export default Filmmmaker;