import { Footer } from "@/atoms/Footer";
import { NavMenu } from "@/molecules/NavMenu";
import { Flex, Heading, Text, Image } from "@chakra-ui/react";

const LogoCreation: React.FC = () => {
    return (
        <Flex align="center" justify="flex-start" direction="column" pb="1rem" w="100vw" bg="gray.800" overflowX="hidden" color="white">
            <NavMenu />
            <Flex p="8rem 0" align="center" justify="flex-start" direction="column" w="100vw">
                <Heading as="h1" size="2xl" pb="4rem">
                    Criação de logo
                </Heading>
                <Image src="/cases/logo/1.png" alt="logo" w="100vw" />
                <Flex direction="column" align="center" p="4rem 0">
                    <Heading as="h2" size="xl">
                        Sobre
                    </Heading>
                    <Text mt="2rem" w="80%" textAlign="justify">
                    Foi solicitado uma logo para ser utilizado em um concurso de dança. A cliente falou que não tinha preferência de cor, mas que o desenho da logo não poderia ser de bailarina, já que o evento não era só de ballet clássico. Para a fonte principal escolhi uma mais fluída, que remetesse algo em movimento. Além disso, utilizei da letra inicial minúscula para aproximar a marca/evento das pessoas, tirar um pouco da formalidade e humanizar mais o evento. As cores escolhidas foram preto e cinza como base, e um tom de vermelho e laranja para destacar a logo.
                    </Text>
                </Flex>
                <Flex direction="column" gap="0.5rem" align="center">
                    <Image w="100vw" src="/cases/logo/2.png" />
                    <Image w="100vw" src="/cases/logo/3.png" />
                    <Image w="100vw" src="/cases/logo/5.png" />
                </Flex>
            </Flex>
            <Footer />
        </Flex>
    )
}

export default LogoCreation;