import { Flex, Button, Text } from "@chakra-ui/react";

const Pagination = ({ currentPage, totalPages, onPrev, onNext }: any) => {
  return (
    <Flex justify="center" mt={4} align="center">
      <Button onClick={onPrev} isDisabled={currentPage === 1} colorScheme="blue" mr={2}>
        Anterior
      </Button>
      <Text fontSize="md" fontWeight="bold">
        Página {currentPage} de {totalPages}
      </Text>
      <Button onClick={onNext} isDisabled={currentPage === totalPages} colorScheme="blue" ml={2}>
        Próximo
      </Button>
    </Flex>
  );
};

export default Pagination;
