import { Box as Flex, useBreakpointValue, Menu, MenuButton, MenuList, MenuItem, IconButton } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { AppLink } from "@/atoms/AppLink";
import { EPlatform } from "@/constants";
import { HamburgerIcon } from "@chakra-ui/icons";


export const NavMenu: React.FC = () => {
    const breakpoint = useBreakpointValue({
        base: EPlatform.MOBILE,
        md: EPlatform.DESKTOP
    });

    if (breakpoint === EPlatform.MOBILE) {
        return (
            <Menu>
                <MenuButton as={IconButton} icon={<HamburgerIcon color="yellow.700" fontSize="2rem" />} bg="transparent" position="absolute" zIndex="100" right="10px" top="10px"/>
                <MenuList>
                    <MenuItem as={AppLink} href="/#apresentation">
                       Apresentação
                    </MenuItem>
                    <MenuItem  as={AppLink} href="/#cases">
                       Cases
                    </MenuItem>
                    <MenuItem  as={AppLink} href="/#contacts">
                       Contatos
                    </MenuItem>
                </MenuList>
            </Menu>
        )
    }

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