import { Card, CardFooter, Heading, LinkBox, LinkOverlay, Flex } from "@chakra-ui/react";

interface ICaseCardProps {
    title: string;
    imgSrc: string;
    src: string;
}

export const CaseCard: React.FC<ICaseCardProps> = ({ title, imgSrc, src }) => {
    return (
        <LinkBox display="flex" alignItems="center" justifyContent="center" w="100%">
            <LinkOverlay href={src}>
                <Card display="flex" justify="flex-end" w={["300px", "600px"]} h={["300px", "600px"]} p="0" backgroundImage={imgSrc} backgroundSize="cover">
                    <CardFooter p="0">
                        <Flex p="1rem" w={["300px", "600px"]} h={["300px", "600px"]}  background="rgba(0, 0, 0, 0.5)" justify="flex-start" align="flex-end">
                            <Heading as="h3" size="md" color="white"  textAlign="end" >  
                                {title}
                            </Heading>
                        </Flex>
                    </CardFooter>
                </Card>
            </LinkOverlay>
        </LinkBox>
    );
}