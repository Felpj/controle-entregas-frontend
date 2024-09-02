import {
  Flex,
  Heading,
  Input,
  Button,
  Image,
  FormControl,
  FormLabel,
  Text,
  HStack,
  Box,
  Link,
} from "@chakra-ui/react";

const LoginScreen = () => {
  return (
    <Flex color={"#ffff"} flexDirection="column" minHeight="100vh">
      {" "}
      {/* Container principal */}
      {/* Cabeçalho */}
      <Flex
        bg={"#262626"}
        as="header"
        p={4}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box left={"80px"} top={"22px"} className="logo-container">
          <Image src="./public/logo.svg" alt="COD+ Solutions" />
        </Box>
        <Flex alignItems="center" justifyContent="center" as="nav">
          <HStack spacing={4}>
            <Link
              display={"flex"}
              alignItems="center"
              justifyContent="center"
              textColor={"#ffff"}
              h={"45px"}
              w={"80px"}
              borderRadius={"5px"}
              bg={"#262626"}
              href="/"
            >
              Home
            </Link>
            <Link textColor={"#ffff"} href="/servicos">
              Serviços
            </Link>
            <Link textColor={"#ffff"} href="/portfolio">
              Portfólio
            </Link>
            <Link textColor={"#ffff"} href="/quem-somos">
              Quem Somos
            </Link>
          </HStack>
        </Flex>
        <Button bg={"#9EFF00"} colorScheme="teal">
          Contate-nos
        </Button>
      </Flex>
      {/* Seção do Herói */}
      <Flex
        bg={"#191919"}
        backgroundImage={`url('./HeroSection.svg')`}
        backgroundPosition="center"
        as="main"
        flex="1"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          className="hero"
          p={6}
          borderWidth="1px"
          borderRadius="lg"
          boxShadow="lg"
        >
          <Heading as="h1" size="xl" mb={4}>
            Uma solução personalizada para seu problema
          </Heading>
          <Text
            color={"#9EFF00"}
            justifyContent="center"
            alignItems="center"
            display={"flex"}
            mb={6}
          >
            Logging here...
          </Text>{" "}
          {/* Corrigir o erro de digitação */}
          <form>
            <FormControl mb={4}>
              <FormLabel htmlFor="email">Email:</FormLabel>
              <Input id="email" type="email" placeholder="Digite seu email" />
            </FormControl>
            <FormControl mb={6}>
              <FormLabel htmlFor="password">Senha:</FormLabel>
              <Input
                id="password"
                type="password"
                placeholder="Digite sua senha"
              />
            </FormControl>

            <Flex className="form-actions" justifyContent="space-between">
              <Link href="/registro">Cadastre-se</Link>
              <Button bg={"#9EFF00"} type="submit" colorScheme="teal">
                Entre aqui
              </Button>
            </Flex>
          </form>
        </Box>
      </Flex>
      {/* Rodapé */}
      <Flex
        bg={"#262626"}
        as="footer"
        p={4}
        justifyContent="center"
        alignItems="center"
      >
        <HStack className="logos-container" spacing={4}>
          <Image src="/caminho/para/zapier.png" alt="Zapier" boxSize="30px" />
          <Image src="/caminho/para/spotify.png" alt="Spotify" boxSize="30px" />
          <Image src="/caminho/para/zoom.png" alt="Zoom" boxSize="30px" />
          <Image src="/caminho/para/slack.png" alt="Slack" boxSize="30px" />
          <Image src="/caminho/para/amazon.png" alt="Amazon" boxSize="30px" />
          <Image src="/caminho/para/adobe.png" alt="Adobe" boxSize="30px" />
        </HStack>
      </Flex>
    </Flex>
  );
};

export default LoginScreen;
