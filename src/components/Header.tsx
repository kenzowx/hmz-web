import { Flex, Text, Button, IconButton } from "@chakra-ui/react";
import { FaSignOutAlt, FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = ({ onOpen }: { onOpen: () => void }) => {
  const navigate = useNavigate();
  
  return (
    <Flex bg="gray.200" p={4} align="center" justify="space-between" boxShadow="md">
      <IconButton icon={<FaBars />} onClick={onOpen} aria-label="Menu" />
      <Text fontSize="lg" fontWeight="bold">PROTÓTIPO - TELA DE USUÁRIOS</Text>
      <Button leftIcon={<FaSignOutAlt />} colorScheme="red" onClick={() => navigate("/")}>
        Sair
      </Button>
    </Flex>
  );
};

export default Header;
