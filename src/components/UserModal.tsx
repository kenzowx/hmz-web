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
  import { useState } from "react";
  import api from "../services/api";
  
  interface UserModalProps {
    isOpen: boolean;
    onClose: () => void;
    reloadUsers: () => void;
  }
  
  const UserModal = ({ isOpen, onClose, reloadUsers }: UserModalProps) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const toast = useToast();
  
    const handleAddUser = async () => {
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
  
      try {
        await api.post("/users", { name, email });
  
        toast({
          title: "Usuário cadastrado!",
          description: "O novo usuário foi adicionado com sucesso.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
  
        setName("");
        setEmail("");
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
  
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Adicionar Usuário</ModalHeader>
          <ModalBody>
            <FormControl mb={4}>
              <FormLabel>Nome</FormLabel>
              <Input value={name} onChange={(e) => setName(e.target.value)} />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Email</FormLabel>
              <Input value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleAddUser}>
              Adicionar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };
  
  export default UserModal;
  