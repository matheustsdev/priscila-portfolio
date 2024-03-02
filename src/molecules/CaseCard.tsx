import { Card, CardFooter, Heading, LinkBox, LinkOverlay } from "@chakra-ui/react";

interface ICaseCardProps {
    title: string;
    imgSrc: string;
    src: string;
}

export const CaseCard: React.FC<ICaseCardProps> = ({ title, imgSrc, src }) => {
    return (
        <LinkBox>
            <LinkOverlay href={src}>
                <Card display="flex" justify="flex-end" w="600px" h="600px" backgroundImage={imgSrc} backgroundSize="cover">
                    <CardFooter>
                        <Heading as="h3" size="md">
                            {title}
                        </Heading>
                    </CardFooter>
                </Card>
            </LinkOverlay>
        </LinkBox>
    );
}