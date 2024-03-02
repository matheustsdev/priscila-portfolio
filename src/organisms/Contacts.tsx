import { Heading, Text, Flex } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

export const Contacts: React.FC = () => {

    return (
        <Flex direction="column" align="center" bg="gray.800" w="100%" color="white" p="0 6rem">
            <Heading m="2rem 0">
                Contatos
            </Heading>
            <Flex direction="column" gap="1rem" w="100%">
                <Text>
                    <AddIcon />
                    Email: adslmdkmfkgm@gmail.com
                </Text>
                <Text>
                    <AddIcon />
                    Email: adslmdkmfkgm@gmail.com
                </Text>
                <Text>
                    <AddIcon />
                    Email: adslmdkmfkgm@gmail.com
                </Text>
                <Text>
                    <AddIcon />
                    Email: adslmdkmfkgm@gmail.com
                </Text>
            </Flex>
        </Flex>
    )
}