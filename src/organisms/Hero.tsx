import { poppins } from "@/app/fonts";
import SparkleIcon from "@/atoms/SparkleIcon";
import { WarningIcon } from "@chakra-ui/icons";
import { Card, CardBody, Flex, Heading, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { ReactSVG } from "react-svg";

export const Hero: React.FC = () => {
    return (
        <Card bg="black" w="100%" h="100vh" color="white" id="hero" display="flex" dir="column" align="center" justify="space-between">
            <Flex align="center" justify="center" w="110%" mt="-2rem" gap="1.25rem">
                <Heading as="h1" fontWeight="900" fontSize="300px" lineHeight="160px" textAlign="center" whiteSpace="nowrap">P</Heading>
                <SparkleIcon />
                <Heading as="h1" fontWeight="900" fontSize="300px" lineHeight="160px" textAlign="center" whiteSpace="nowrap">RTFOLIO</Heading>
            </Flex>
            <Flex w="100%" dir="row" align="center" justify="space-between" p="0 6rem">   
                <Text w="15rem" fontSize="1.75rem">Criação, gerenciamento & direção criativa</Text>
                <Text w="15rem" fontSize="1.75rem">Priscila Rocan</Text>
            </Flex>
            <Flex align="center" justify="center" w="110%" gap="1.25rem">
                <Heading as="h1" fontWeight="900" fontSize="300px" lineHeight="160px" textAlign="center" whiteSpace="nowrap">P</Heading>
                <SparkleIcon />
                <Heading as="h1" fontWeight="900" fontSize="300px" lineHeight="160px" textAlign="center" whiteSpace="nowrap">RTFOLIO</Heading>
            </Flex>
        </Card>
    );
};