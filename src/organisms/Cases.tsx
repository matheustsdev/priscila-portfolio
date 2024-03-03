import { CaseCard } from "@/molecules/CaseCard";
import { Heading, Flex, Card, CardBody, Grid, GridItem } from "@chakra-ui/react";

export const Cases = () => {

    const caseCards = [{
        id: "1",
        title: "Design",
        imgSrc: "/cases/design/hero.png",
        src: "/case/design"
    },
    {   
        id: "2",
        title: "Banner",
        imgSrc: "/cases/banner/hero.png",
        src: "/case/banner"
    },
    {
        id: "3",
        title: "Folder",
        imgSrc: "/cases/folder/hero.png",
        src: "/case/folder"
    },
    {
        id: "4",
        title: "Criação de logo",
        imgSrc: "/cases/logo/hero.png",
        src: "/case/logo-creation"
    },
    {
        id: "5",
        title: "Filmmaker",
        imgSrc: "/cases/filmmaker/hero.png",
        src: "/case/logo-creation"
    }];

    return (
        <Card display="flex" w="100%" bg="gray.800" color="white" direction="column" p="2rem 6rem" borderRadius="80px 80px 0 0" border="none" id="cases">
            <CardBody>
                <Flex direction="column" align="center">
                    <Heading as="h1" size="2xl" mb="2rem">
                        Cases
                    </Heading>
                    <Grid templateColumns="repeat(2, 1fr)" gap="100px">
                        {
                            caseCards.map((card) => (
                                <GridItem key={card.id}>
                                    <CaseCard title={card.title} imgSrc={card.imgSrc} src={card.src} />
                                </GridItem>
                            ))
                        }
                    </Grid>
                </Flex>   
            </CardBody>
        </Card>
        
    );
};