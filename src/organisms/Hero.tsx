import { WarningIcon } from "@chakra-ui/icons";
import { Card, CardBody, Flex, Heading, Text, Image } from "@chakra-ui/react";

export const Hero: React.FC = () => {
    return (
        <Card bg="gray.100" w="100%" h="90vh" p="8rem 0" color="black" borderRadius="0 0 80px 80px">
            <CardBody display="flex" w="100%" alignItems="center">
                <Flex w="100%" gap="5rem" pl="6rem" align="flex-start">
                    <Flex w="800px" direction="column">
                        <Heading size="4xl" as="h1">
                            Priscila Rocan
                        </Heading>
                        <Heading size="2xl" as="h2">
                            Social Media
                        </Heading>
                        <Text pt="2rem">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptatibus perferendis totam provident quia consequatur repellendus tempora vel earum. Saepe totam libero, molestias eum illum consectetur corporis vel autem assumenda?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, reprehenderit tempora sed deserunt natus consectetur eos labore dolor temporibus repellat. Nostrum praesentium quaerat, placeat repudiandae ipsam aliquid sunt sequi atque.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, architecto? Nihil earum vel explicabo eius rem sunt dignissimos ex harum, quaerat, deserunt, et magnam? Beatae impedit ea nulla quasi accusamus!
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste distinctio laborum aperiam natus eaque architecto reiciendis maiores dolores modi, sequi, libero possimus iure odio ipsa asperiores repudiandae. Mollitia, quae ullam?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquid labore fugit animi at. Quos doloremque quidem distinctio soluta, repellendus atque rerum earum dicta ea fugit quisquam eveniet maiores vero!
                        </Text>
                    </Flex> 
                    <Image w="450px" h="600px" src="https://placehold.co/600x800" />
                </Flex>
                <Flex align="center" w="300px" gap="0.5rem" transform="rotate(90deg)">
                    <Text whiteSpace="nowrap">Follow me on</Text>
                    <hr style={{width: "4rem"}}/>
                    <Flex gap="0.5rem">
                        <WarningIcon transform="rotate(-90deg)"/>
                        <WarningIcon transform="rotate(-90deg)"/>
                        <WarningIcon transform="rotate(-90deg)"/>
                    </Flex>
                </Flex>
            </CardBody>
        </Card>
    );
};