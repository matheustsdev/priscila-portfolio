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
                <Image src="https://placehold.co/1920x200" alt="logo" w="100vw" />
                <Flex direction="column" align="center" p="4rem 0">
                    <Heading as="h2" size="xl">
                        Sobre
                    </Heading>
                    <Text mt="2rem" w="80%" textAlign="justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, augue nec lacinia tincidunt, lectus nisl facilisis turpis, in eleifend felis libero a purus
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, molestias possimus minus facere veniam autem nemo, debitis, dicta deleniti amet tenetur temporibus non necessitatibus doloremque. Inventore omnis aspernatur animi saepe.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi ipsa neque iste optio sunt provident inventore iusto distinctio consequatur voluptate, esse culpa eos ad, quo ratione. Deleniti veritatis nisi quasi.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, commodi voluptatibus quo quisquam incidunt debitis aliquid doloribus nihil doloremque sunt impedit illum aliquam dolor rem molestias nam ad eaque fugit.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis similique ad quam, doloremque possimus nulla. Id reprehenderit aliquid labore voluptatibus assumenda sunt odit, reiciendis earum excepturi consequuntur explicabo corporis doloribus?
                    </Text>
                </Flex>
                <Flex direction="column" gap="0.5rem" align="center">
                    <Image w="100vw" src="https://placehold.co/1920x200" />
                    <Image w="100vw" src="https://placehold.co/1920x200" />
                    <Image w="100vw" src="https://placehold.co/1920x200" />
                </Flex>
            </Flex>
            <Footer />
        </Flex>
    )
}

export default LogoCreation;