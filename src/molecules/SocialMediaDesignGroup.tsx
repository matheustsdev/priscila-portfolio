import RibbonIcon from "@/atoms/RibbonIcon"
import { Flex, Grid, GridItem, Text } from "@chakra-ui/react"

interface SocialMediaDesignGroupProps {
    title: string;
    color: string;
    images: string[];
}

export const SocialMediaDesignGroup: React.FC<SocialMediaDesignGroupProps> = ({title, color, images}) => {
    return (
        <Flex color={color} display="flex" flexDir="column" align="flex-start" gap="2rem">
            <Flex p="0.5rem 1.5rem" rounded="2rem" border="1px solid white">
                <Text letterSpacing="4px" fontWeight="600">{title}</Text>
            </Flex>
            <Grid templateColumns="repeat(2, 1fr)" gap="1.5rem">
                {
                    images.map((image, index) => (
                        <GridItem key={index}>
                            <img src={image} alt={title} />
                        </GridItem>
                    ))
                }
            </Grid>
        </Flex>
    )
}