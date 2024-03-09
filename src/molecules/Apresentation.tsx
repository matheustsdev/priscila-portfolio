import { Heading, Flex, Text } from "@chakra-ui/react";

export const Apresentation = () => {
    return (
        <Flex w="100%" align="center" color="white" direction="column" gap="2rem" p={["2rem 1rem 100px 2rem", "2rem 6rem 100px 6rem"]} id="apresentation">
            <Heading as="h1" size={["md", "2xl"]}>
                Apresentação
            </Heading>
            <Text fontSize={["sm", "unset"]}>
            Para este portfólio, fiz uma cuidadosa seleção de cinco tipos distintos de serviços que são comumente encontrados na ampla gama de atividades relacionadas à publicidade e propaganda. Esses serviços representam uma parcela significativa dos projetos nos quais me envolvi ao longo da minha jornada profissional. Entre eles, destaco a criação de logos para concursos de dança, a elaboração de folders direcionados ao recebimento de encomendas, o design de criativos específicos para o Instagram de um estúdio criativo de marketing, a produção de banners para um aplicativo e a captação de conteúdo exclusivo para uma prestigiada loja de aluguel de roupas de festa. Ao decidir sobre a plataforma para hospedar meu site, optei pelo Google Cloud devido à sua oferta de um plano gratuito para sites estáticos, o que se alinhava perfeitamente com minhas necessidades iniciais. Embora tenha contado com a assistência do meu noivo na elaboração do código para colocar o site no ar, todas as decisões relacionadas à organização, produção e disposição das cases foram tomadas por mim, demonstrando minha autonomia e expertise na área. Além disso, para conferir um toque ainda mais personalizado, adquiri um domínio no Registro.br, garantindo uma identidade única para meu espaço online. Quanto ao design do site, este foi meticulosamente concebido com um estilo clean e minimalista, com o uso estratégico de um ponto de cor amarelo para destacar elementos-chave e direcionar o olhar do visitante para as produções e cases apresentadas, ressaltando sua importância e relevância no contexto do portfólio.
            </Text>
        </Flex>
    );
};