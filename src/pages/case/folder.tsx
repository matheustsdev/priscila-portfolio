import { Footer } from "@/atoms/Footer";
import { NavMenu } from "@/molecules/NavMenu";
import { Flex, Heading, Text, Image } from "@chakra-ui/react";

const Folder: React.FC = () => {
    return (
        <Flex align="center" justify="flex-start" direction="column" pb="1rem" w="100vw" h="100vh" bg="gray.800" overflowX="hidden" color="white">
            <NavMenu />
            <Flex pt="8rem" align="center" justify="flex-start" direction="column" w="100vw">
                <Heading as="h1" size="2xl">
                    Folder
                </Heading>
                <Flex direction="column" align="center" p="4rem 0">
                    <Text w="80%" textAlign="justify">
                    O intuito dessa case era a criação de um folder para ir junto na caixa de compras feito pelo cliente, agradecendo pela preferência e instigando a postagem. Este cliente possui um supermercado 100% digital, e está iniciando no mercado a pouco tempo, então essa foi uma forma de divulgação e crescimento orgânico. 
                    </Text>
                </Flex>
                <Flex direction="column" gap="0.5rem" align="center">
                    <Image h="90vh" src="/cases/folder/1.png" />
                </Flex>
            </Flex>
            <Footer />
        </Flex>
    )
}

export default Folder;