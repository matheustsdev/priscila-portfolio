import { Footer } from "@/atoms/Footer";
import { NavMenu } from "@/molecules/NavMenu";
import { Flex, Heading, Text, Image } from "@chakra-ui/react";

const Banner: React.FC = () => {
    return (
        <Flex align="center" justify="flex-start" direction="column" pb="1rem" h="100vh" bg="gray.800" overflowX="hidden" color="white">
            <NavMenu />
            <Flex pt="8rem"  align="center" justify="flex-start" direction="column" w="100vw">
                <Heading as="h1" size="2xl">
                    Banner
                </Heading>
                <Flex direction="column" align="center" p="4rem 0">
                    <Text w="80%" textAlign="justify">
                        Foi solicitado a criação de banners interativos para o aplicativo de um supermercado digital, para que ao clicar no banner fosse direto para uma aba com produtos selecionados de acordo com a categoria da arte. Como o aplicativo pode ser aberto tanto no computador quanto no celular, precisei fazer 2 formatos com dimensões diferentes, para ficar bem alinhado.
                    </Text>
                </Flex>
                <Flex direction="column" gap="0.5rem" align="center">
                    <Image src="/cases/banner/1.png" />
                    <Image src="/cases/banner/2.png" />
                    <Image src="/cases/banner/3.png" />
                </Flex>
            </Flex>
            <Footer />
        </Flex>
    )
}

export default Banner;