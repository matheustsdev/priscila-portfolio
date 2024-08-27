import { poppins } from "@/app/fonts";
import SparkleIcon from "@/atoms/SparkleIcon";
import { WarningIcon } from "@chakra-ui/icons";
import { Button, Card, CardBody, Flex, Heading, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { ReactSVG } from "react-svg";

export const Hero: React.FC = () => {
    return (
        <Flex bg="black" w="100%" h="100vh" color="white" id="hero" display="flex" align="center" justify="space-between">
            <Flex w="100%" h="100%" fontSize="xl" flexDir="column" justify="flex-start" align="flex-start" backdropFilter="auto" backdropBrightness="25%">
                <Text p="4rem">Portfólio Social Media</Text>
            </Flex>
            <Flex align="center" justify="center" flexDir="column" w="100%" h="100%" backdropFilter="auto" backdropBrightness="25%">
                <Heading as="h1" fontWeight="900" fontSize="12rem" textAlign="center" lineHeight="10rem">PRISCILA<br/>ROCAN</Heading>
                <Text fontSize="xl" color="#ffd230" as="i" mt="2rem">Criação, gerenciamento & direção criativa</Text>
                <Button bg="white" color="black" size="lg" mt="4rem" _hover={{ bg: "gray.800", color: "white" }}>Ver mais</Button>
            </Flex>
            <Flex w="100%" h="100%" flexDir="column" justify="flex-end" align="flex-end" backdropFilter="auto" backdropBrightness="25%">
                <Flex p="8rem">
                    <SparkleIcon width="120px" height="120px" />
                </Flex>
            </Flex>
        </Flex>
    );
};