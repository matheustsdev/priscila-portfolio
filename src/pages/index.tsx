import { useState, useEffect } from "react";
import Styled from "@/styles/pages";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {console.log(isOpen)}, [isOpen]);

  return (
   <Styled.HomeContainer>
     <h1>Hello world!!</h1>
   </Styled.HomeContainer>
  )
}
