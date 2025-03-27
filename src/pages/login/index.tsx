import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Text,
  VStack,
  useToast,
  Link,
  Image,
} from "@chakra-ui/react";
import api from "../../services/api";
import logo from "../../assets/logo_2.png";

// Interface para a resposta da API
interface LoginResponse {
  token: string;
  message?: string;
}

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      toast({
        title: "Erro!",
        description: "Preencha todos os campos.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      const response = await api.post<LoginResponse>("/admins/login", {
        email,
        password,
      });

      if (response.status === 200 && response.data?.token) {
        toast({
          title: "Login realizado!",
          description: "Redirecionando para o painel...",
          status: "success",
          duration: 2000,
          isClosable: true,
        });

        localStorage.setItem("token", response.data.token);
        setTimeout(() => navigate("/dashboard"), 2000);
      } else {
        toast({
          title: "Erro!",
          description: response.data?.message || "Credenciais inválidas!",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Erro ao conectar!",
        description: "Não foi possível conectar ao servidor.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex
      height="100vh"
      width="100vw"
      direction={{ base: "column", md: "row" }}
    >
      {/* Lado Esquerdo - Texto */}
      <Box
        flex="1"
        bg="gray.100"
        display="flex"
        alignItems="center"
        justifyContent="center"
        p={8}
        textAlign="center"
      >
        <VStack spacing={4}>
          <Text
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="bold"
            color="gray.600"
          >
            Simplificamos juntos
          </Text>
          <Text fontSize="sm" color="gray.500">
            Supply Chain | Industrial | Systems
          </Text>
        </VStack>
      </Box>

      {/* Lado Direito - Formulário */}
      <Box
        flex="1"
        bg="gray.50"
        display="flex"
        alignItems="center"
        justifyContent="center"
        p={8}
        width={{ base: "100%", md: "50%" }}
      >
        <Box
          p={8}
          width="100%"
          maxW="400px"
          bg="white"
          borderRadius="md"
          boxShadow="lg"
        >
          {/* Logo da empresa */}
          <Flex justify="center" mb={6}>
            <Image
              src={logo} // Caminho da imagem
              alt="Logo da empresa"
              width="150px"
              height="auto"
            />
          </Flex>

          <Text fontSize="lg" fontWeight="bold" textAlign="center" mb={6}>
            LOGIN
          </Text>

          <form onSubmit={handleLogin}>
            <FormControl mb={4}>
              <FormLabel fontSize="sm" fontWeight="bold" color="gray.600">
                Usuário
              </FormLabel>
              <Input
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                size="lg"
                borderRadius="full"
              />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel fontSize="sm" fontWeight="bold" color="gray.600">
                Senha
              </FormLabel>
              <Input
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                size="lg"
                borderRadius="full"
              />
            </FormControl>

            <Button
              type="submit"
              colorScheme="blue"
              width="full"
              size="lg"
              borderRadius="full"
              mt={4}
            >
              Logar
            </Button>

            {/* Links para "Esqueci minha senha" e "Cadastrar-se" */}
            <Flex justify="space-between" mt={4}>
              <Link color="blue.500" fontSize="sm" href="#">
                Esqueci minha senha
              </Link>
              <Link color="blue.500" fontSize="sm" href="#">
                Cadastrar-se
              </Link>
            </Flex>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default Login;
