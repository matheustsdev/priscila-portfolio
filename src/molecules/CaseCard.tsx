import { Card, CardFooter, Heading } from "@chakra-ui/react";

export const CaseCard: React.FC = () => {
    return (
        <Card display="flex" justify="flex-end" w="600px" h="600px" backgroundImage="https://placehold.co/1000x1000" backgroundSize="cover">
            <CardFooter>
                <Heading as="h3" size="md">
                    Título
                </Heading>
            </CardFooter>
        </Card>
    );
}