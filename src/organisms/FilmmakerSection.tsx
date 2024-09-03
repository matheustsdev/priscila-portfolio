import SparkleIcon from "@/atoms/SparkleIcon";
import { Flex, Heading, Button, Text } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";

export const FilmmakerSection: React.FC = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <Flex w="100%" h="100vh" bg="black" color="white" id="filmmaker" display="flex" align="center" justify="space-between" flexDir="column">
            <Flex w="100%" justify="center" align="center">
                <Heading fontSize="8.5rem" fontWeight="900" w="100%" whiteSpace="nowrap" textAlign="center" color="#C190DA">CAPTAÇÃO DE CONTEÚDO</Heading>
            </Flex>
            <Flex w="100%" h="100vh" flex="1" flexDir="column">
                <Carousel responsive={responsive} ssr={true} draggable infinite sliderClass="phone_carousel_slider" itemClass="phone_carousel_item">
                    <div className="marvel-device iphone-x">
                        <div className="notch">
                            <div className="camera"></div>
                            <div className="speaker"></div>
                        </div>
                        <div className="top-bar"></div>
                        <div className="sleep"></div>
                        <div className="bottom-bar"></div>
                        <div className="volume"></div>
                        <div className="overflow">
                            <div className="shadow shadow--tr"></div>
                            <div className="shadow shadow--tl"></div>
                            <div className="shadow shadow--br"></div>
                            <div className="shadow shadow--bl"></div>
                        </div>
                        <div className="inner-shadow"></div>
                        <div className="screen">
                            Teste
                        </div>
                    </div>
                    <div className="marvel-device iphone-x">
                        <div className="notch">
                            <div className="camera"></div>
                            <div className="speaker"></div>
                        </div>
                        <div className="top-bar"></div>
                        <div className="sleep"></div>
                        <div className="bottom-bar"></div>
                        <div className="volume"></div>
                        <div className="overflow">
                            <div className="shadow shadow--tr"></div>
                            <div className="shadow shadow--tl"></div>
                            <div className="shadow shadow--br"></div>
                            <div className="shadow shadow--bl"></div>
                        </div>
                        <div className="inner-shadow"></div>
                        <div className="screen">
                            Teste
                        </div>
                    </div>
                    <div className="marvel-device iphone-x">
                        <div className="notch">
                            <div className="camera"></div>
                            <div className="speaker"></div>
                        </div>
                        <div className="top-bar"></div>
                        <div className="sleep"></div>
                        <div className="bottom-bar"></div>
                        <div className="volume"></div>
                        <div className="overflow">
                            <div className="shadow shadow--tr"></div>
                            <div className="shadow shadow--tl"></div>
                            <div className="shadow shadow--br"></div>
                            <div className="shadow shadow--bl"></div>
                        </div>
                        <div className="inner-shadow"></div>
                        <div className="screen">
                            Teste
                        </div>
                    </div>
                </Carousel>
            </Flex>
        </Flex>
    );
}