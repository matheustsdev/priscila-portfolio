import { CaseCard } from "@/molecules/CaseCard";
import { Heading, Flex, Card, CardBody, Grid, GridItem } from "@chakra-ui/react";

export const Cases = () => {
    return (
        <Card display="flex" w="100%" bg="gray.800" color="white" direction="column" p="2rem 6rem" borderRadius="80px 80px 0 0">
            <CardBody>
                <Flex direction="column" align="center">
                    <Heading as="h1" size="2xl" mb="2rem">
                        Cases
                    </Heading>
                    <Grid templateColumns="repeat(2, 1fr)" gap="100px">
                        <GridItem>
                            <CaseCard />
                        </GridItem>
                        <GridItem>
                            <CaseCard />
                        </GridItem>
                        <GridItem>
                            <CaseCard />
                        </GridItem>
                        <GridItem>
                            <CaseCard />
                        </GridItem>
                        <GridItem>
                            <CaseCard />
                        </GridItem>
                        <GridItem>
                            <CaseCard />
                        </GridItem>
                    </Grid>
                </Flex>   
            </CardBody>
        </Card>
        
    );
};