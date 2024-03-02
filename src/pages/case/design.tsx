import { Footer } from "@/atoms/Footer";
import { NavMenu } from "@/molecules/NavMenu";
import { Flex, Heading, Text, Image, Box } from "@chakra-ui/react";
import Slider, {Settings} from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Design: React.FC = () => {
    const settings: Settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        adaptiveHeight: true
      };

    return (
        <>
            <Flex align="center" justify="flex-start" direction="column" pb="1rem" w="100vw" bg="gray.800" overflowX="hidden" color="white">
                <NavMenu />
                <Flex p="8rem 0" align="center" justify="flex-start" direction="column" w="100vw">
                    <Heading as="h1" size="2xl" pb="4rem">
                        Design
                    </Heading>
                    <Image src="https://placehold.co/1920x200" alt="logo" w="100vw" />
                    <Flex direction="column" align="center" p="4rem 0">
                        <Heading as="h2" size="xl">
                            Sobre
                        </Heading>
                        <Text mt="2rem" w="80%" textAlign="justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, augue nec lacinia tincidunt, lectus nisl facilisis turpis, in eleifend felis libero a purus
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, molestias possimus minus facere veniam autem nemo, debitis, dicta deleniti amet tenetur temporibus non necessitatibus doloremque. Inventore omnis aspernatur animi saepe.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi ipsa neque iste optio sunt provident inventore iusto distinctio consequatur voluptate, esse culpa eos ad, quo ratione. Deleniti veritatis nisi quasi.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, commodi voluptatibus quo quisquam incidunt debitis aliquid doloribus nihil doloremque sunt impedit illum aliquam dolor rem molestias nam ad eaque fugit.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis similique ad quam, doloremque possimus nulla. Id reprehenderit aliquid labore voluptatibus assumenda sunt odit, reiciendis earum excepturi consequuntur explicabo corporis doloribus?
                        </Text>
                    </Flex>
                    <Box w="100%">
                        <Slider {...settings}>
                            <div className="slideItem">
                                <Image src="https://placehold.co/500x500" alt="logo" />
                            </div>
                            <div className="slideItem">
                                <Image src="https://placehold.co/500x500" alt="logo" />
                            </div>
                            <div className="slideItem">
                                <Image src="https://placehold.co/500x500" alt="logo" />
                            </div>
                            <div className="slideItem">
                                <Image src="https://placehold.co/500x500" alt="logo" />
                            </div>
                            <div className="slideItem">
                                <Image src="https://placehold.co/500x500" alt="logo" />
                            </div>
                            <div className="slideItem">
                                <Image src="https://placehold.co/500x500" alt="logo" />
                            </div>
                        </Slider>
                    </Box>
                </Flex>
                <Footer />
            </Flex>
                
        </>
    )
}

export default Design;