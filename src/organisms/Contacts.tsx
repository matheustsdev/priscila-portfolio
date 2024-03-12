import { Heading, Text, Flex } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import PhoneIcon from "@/assets/phone.svg";
import { Icon } from "@chakra-ui/react";
import { ReactSVG } from "react-svg";
import { AppLink } from "@/atoms/AppLink";

export const Contacts: React.FC = () => {

    return (
        <Flex direction="column" align="center" bg="gray.800" w="100%" color="white" p="0 6rem" id="contacts">
            <Heading as="h1" size="2xl" m="2rem 0">
                Contatos
            </Heading>
            <Flex direction="column" gap="1rem" w="100%" fontSize={["sm", "unset"]}>
                <AppLink href="https://api.whatsapp.com/send?phone=558598235163">
                    Telefone: (85) 98235-1632
                </AppLink>
                <AppLink href="https://www.linkedin.com/in/priscilacandido/">
                    Linkedin: priscilacandido
                </AppLink>
                <AppLink href="https://www.instagram.com/priscilarocan/">
                    Instagram: @priscilarocan
                </AppLink>
            </Flex>
        </Flex>
    )
}