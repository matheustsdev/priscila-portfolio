import { Footer } from "@/atoms/Footer";
import { NavMenu } from "@/molecules/NavMenu";
import { Flex, Heading, Text, Image, Box } from "@chakra-ui/react";
import Slider, {Settings} from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Design: React.FC = () => {
    const settings: Settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        centerPadding: "20px",
        centerMode: true,
        
      };

    return (
        <>
            <Flex align="center" justify="flex-start" direction="column" pb="1rem" w="100vw" bg="gray.800" overflowX="hidden" color="white">
                <NavMenu />
                <Flex p="8rem 0 2rem 0" align="center" justify="flex-start" direction="column" w="100vw">
                    <Heading as="h1" size="2xl" pb="4rem">
                        Design
                    </Heading>
                    <Image src="/cases/design/hero.png" alt="logo" w="100vw" />
                    <Flex direction="column" align="center" p="4rem 0">
                        <Heading as="h2" size="xl">
                            Sobre
                        </Heading>
                        <Text mt="2rem" w="80%" textAlign="justify">
                        O objetivo dessa case é mostrar alguns criativos feitos para um estúdio criativo de marketing. Por se auto denominarem criativo, eles têm uma pegada mais colorida, cool, com a utilização de colagens e bastante intervenção na arte. Os assuntos dos criativos englobam assuntos de marketing, portfólio de clientes e interação com o público com um ar cômico e utilização de memes. 
                        </Text>
                    </Flex>
                    <Box w="100%">
                        <Slider {...settings}>
                            <div className="slideItem">
                                <Image src="https://i.imgur.com/cik2Fhb.png" alt="logo" />
                            </div>
                            <div className="slideItem">
                                <Image src="https://i.imgur.com/0y5kGBx.png" alt="logo" />
                            </div>
                            <div className="slideItem">
                                <Image src="https://i.imgur.com/snztbb3.png" alt="logo" />
                            </div>
                            <div className="slideItem">
                                <Image src="https://i.imgur.com/oD1wmjw.png" alt="logo" />
                            </div>
                            <div className="slideItem">
                                <Image src="https://i.imgur.com/wUCyGnf.png" alt="logo" />
                            </div>
                            <div className="slideItem">
                                <Image src="https://i.imgur.com/pQiJ9N1.png" alt="logo" />
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