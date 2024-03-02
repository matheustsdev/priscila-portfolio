import { Flex } from "@chakra-ui/react"
import { AppLink } from "./AppLink"

export const Footer: React.FC = () => {
    return (
        <Flex as="footer" w="100%" align="center" justify="center" bg="gray.800" color="white" pt="8rem">
            <AppLink href="#">
                Desenvolvido por Matheus Teixeira
            </AppLink>
        </Flex>
    )
}