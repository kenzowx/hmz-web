import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormControl,
    FormLabel,
    Input,
    Button,
    useToast
  } from "@chakra-ui/react";
  import { useState, useEffect } from "react";
  import api from "../services/api";
  
  interface EditUserModalProps {
    isOpen: boolean;
    onClose: () => void;
    reloadUsers: () => void;
    user: { id: number; name: string; email: string } | null;
  }
  
  const EditUserModal = ({ isOpen, onClose, reloadUsers, user }: EditUserModalProps) => {
    const [name, setName] = useState(user?.name || "");
    const [email, setEmail] = useState(user?.email || "");
    const toast = useToast();
  
    useEffect(() => {
      if (user) {
        setName(user.name);
        setEmail(user.email);
      }
    }, [user]);
  
    const handleEditUser = async () => {
      if (!user) return;
      if (!name.trim() || !email.trim()) {
        toast({
          title: "Erro!",
          description: "Preencha todos os campos.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        return;
      }
      if (!isValidEmail(email)) {
        toast({
          title: "Formato de e-mail inválido.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        return;
      }
  
      try {
        await api.put(`/users/${user.id}`, { name, email });
  
        toast({
          title: "Usuário atualizado!",
          description: "As informações foram salvas com sucesso.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
  
        onClose();
        reloadUsers();
      } catch (error) {
        toast({
          title: "Erro de conexão!",
          description: "Falha ao conectar com o servidor.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    };

    const isValidEmail = (email: string) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar Usuário</ModalHeader>
          <ModalBody>
            <FormControl mb={4}>
              <FormLabel>Nome</FormLabel>
              <Input type="email" value={name} onChange={(e) => setName(e.target.value)} />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Email</FormLabel>
              <Input value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="yellow" onClick={handleEditUser}>
              Salvar Alterações
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };
  
  export default EditUserModal;
  