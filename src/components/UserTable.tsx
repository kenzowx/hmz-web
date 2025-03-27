import { Table, Thead, Tbody, Tr, Th, Td, IconButton, useToast } from "@chakra-ui/react";
import { FaTrash, FaEdit } from "react-icons/fa";
import api from "../services/api";

const UserTable = ({ users, onEdit, onDelete }: any) => {
  const toast = useToast();

  // ✅ Função para excluir usuário
  const handleDelete = async (id: number) => {
    if (!window.confirm("Tem certeza que deseja excluir este usuário?")) return;

    try {
      await api.delete(`/users/${id}`);

      toast({
        title: "Usuário excluído!",
        description: "O usuário foi removido com sucesso.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });

      onDelete(); // ✅ Atualiza a lista de usuários após excluir
    } catch (error) {
      toast({
        title: "Erro ao excluir!",
        description: "Não foi possível remover o usuário.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Table variant="simple" size="sm">
      <Thead bg="gray.100">
        <Tr>
          <Th textAlign="center"></Th>
          <Th textAlign="center">Nome</Th>
          <Th textAlign="center">Email</Th>
          <Th textAlign="center">Ações</Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((user: any) => (
          <Tr key={user.id}>
            <Td textAlign="center">
              <IconButton
                icon={<FaEdit />}
                colorScheme="yellow"
                size="sm"
                onClick={() => onEdit(user)}
                aria-label="Editar usuário"
              />
            </Td>
            <Td textAlign="center">{user.name}</Td>
            <Td textAlign="center">{user.email}</Td>
            <Td textAlign="center">
              <IconButton
                icon={<FaTrash />}
                colorScheme="red"
                size="sm"
                onClick={() => handleDelete(user.id)} // ✅ Agora chama a função correta
                aria-label="Excluir usuário"
              />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default UserTable;
