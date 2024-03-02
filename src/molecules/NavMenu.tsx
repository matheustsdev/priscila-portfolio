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
            p="1rem 2rem"
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
            <AppLink href="#">Home</AppLink>
            <AppLink href="#">About</AppLink>
            <AppLink href="#">Services</AppLink>
            <AppLink href="#">Portfolio</AppLink>
        </Flex>
    )
}