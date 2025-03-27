import { useEffect, useState } from "react";
import { Box, Flex, Button, useToast, useDisclosure } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import api from "../../services/api";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import UserTable from "../../components/UserTable";
import Pagination from "../../components/Pagination";
import UserModal from "../../components/UserModal";
import EditUserModal from "../../components/EditUserModal";

// ✅ Interface do usuário
interface User {
  id: number;
  name: string;
  email: string;
}

const Dashboard = () => {
  const toast = useToast();
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;
  const totalPages = Math.ceil(users.length / usersPerPage);

  // ✅ Estado e funções para os modais
  const { isOpen, onOpen, onClose } = useDisclosure(); // Modal de adicionar usuário
  const { isOpen: isEditOpen, onOpen: onEditOpen, onClose: onEditClose } = useDisclosure(); // Modal de edição
  const [editingUser, setEditingUser] = useState<User | null>(null);

  useEffect(() => {
    loadUsers();
  }, []);

  // ✅ Função para carregar usuários
  const loadUsers = async () => {
    try {
      const response = await api.get<User[]>("/users");
      setUsers(response.data);
    } catch (error) {
      toast({ title: "Erro ao carregar usuários!", status: "error" });
    }
  };

  // ✅ Função para abrir modal de edição
  const openEditModal = (user: User) => {
    setEditingUser(user);
    onEditOpen();
  };

  return (
    <Flex height="100vh" width="100vw" bg="gray.100">
      <Sidebar />
      <Flex flex="1" direction="column">
        <Header />

        <Box p={6} bg="white" m={4} borderRadius="md" boxShadow="md" overflowX="auto">
          {/* ✅ Botão para adicionar novo usuário */}
          <Flex justify="space-between" align="center" mb={4}>
            <Button leftIcon={<FaPlus />} colorScheme="green" onClick={onOpen}>
              Novo
            </Button>
          </Flex>

          {/* ✅ Tabela de usuários */}
          <UserTable users={users} onEdit={openEditModal} onDelete={loadUsers} />

          {/* ✅ Paginação */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPrev={() => setCurrentPage(currentPage - 1)}
            onNext={() => setCurrentPage(currentPage + 1)}
          />
        </Box>
      </Flex>

      {/* ✅ Modais */}
      <UserModal isOpen={isOpen} onClose={onClose} reloadUsers={loadUsers} />
      <EditUserModal isOpen={isEditOpen} onClose={onEditClose} reloadUsers={loadUsers} user={editingUser} />
    </Flex>
  );
};

export default Dashboard;
