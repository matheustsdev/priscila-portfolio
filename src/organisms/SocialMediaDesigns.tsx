import RibbonIcon from "@/atoms/RibbonIcon"
import { SocialMediaDesignGroup } from "@/molecules/SocialMediaDesignGroup"
import { Flex, Heading } from "@chakra-ui/react"

export const SocialMediaDesigns: React.FC = () => {
    return (
        <Flex w="100%" h="100vh" bg="black" color="white" id="social-media-designs" display="flex" align="center" justify="space-between">
            <Flex flexDir="column" textAlign="center" justify="center" className="verticalText">
                <Heading fontSize="4.5rem" color="#F55FC0">DESIGN PARA REDES SOCIAIS</Heading>
                <Heading fontSize="4.5rem" color="#F55FC0">DESIGN PARA REDES SOCIAIS</Heading>
            </Flex>
            <Flex w="100%" h="100%" p="6rem" align="center" justify="center">
                <Flex bg="black" w="100%" h="100%" align="flex-start" justify="space-between">
                    <SocialMediaDesignGroup title="ESTÚDIO DE MARKETING CRIATIVO" color="#F55FC0" images={["https://placehold.co/350", "https://placehold.co/350", "https://placehold.co/350", "https://placehold.co/350"]} />
                    <SocialMediaDesignGroup title="PAPELARIA CRIATIVA" color="#F55FC0" images={["https://placehold.co/350", "https://placehold.co/350", "https://placehold.co/350", "https://placehold.co/350"]} />
                </Flex>
            </Flex>
            <Flex pos="absolute" right="0" align="flex-end" h="100%">
                <RibbonIcon width={282} height={211} fill="#f55fc0" style={{ transform: "rotate(-4deg)" }}/>
            </Flex>
        </Flex>
    )
}