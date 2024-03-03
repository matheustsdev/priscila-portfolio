import { Box as Flex } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { AppLink } from "@/atoms/AppLink";

interface INavMenuProps {
    
}

export const NavMenu: React.FC<INavMenuProps> = (props) => {
    return (
        <Flex 
            bg="yellow.700" 
            borderRadius="2rem" 
            w="60%" 
            mt="1rem"
            p="1rem 8rem"
            as="nav"
            flexDirection="row"
            display="flex"
            justifyContent="space-between"
            listStyleType="none"
            color="white"
            fontWeight="bold"
            position="absolute"
            zIndex="100"
        >
            <AppLink href="/#apresentation">Apresentação</AppLink>
            <AppLink href="/#cases">Cases</AppLink>
            <AppLink href="/#contacts">Contatos</AppLink>
        </Flex>
    )
}