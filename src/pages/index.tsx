'use client'

import { Footer } from "@/atoms/Footer";
import { Apresentation } from "@/molecules/Apresentation";
import { NavMenu } from "@/molecules/NavMenu";
import { Cases } from "@/organisms/Cases";
import { Contacts } from "@/organisms/Contacts";
import { Hero } from "@/organisms/Hero";
import { Flex } from "@chakra-ui/react";

export default function Home() {

  return (
    <Flex align="center" justify="flex-start" direction="column" w="100vw" bg="yellow.700" overflowX="hidden"> 
      <NavMenu />
      <Hero />
      <Apresentation />
      <Cases />
      <Contacts />
      <Footer />
    </Flex>
  )
}
