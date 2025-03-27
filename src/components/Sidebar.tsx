import { Box, Text, Button, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, useDisclosure, useBreakpointValue } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      {isMobile ? (
        <>
          <Button
            onClick={onOpen}
            variant="ghost"
            position="absolute"
            top={4}
            left={4}
            zIndex={10}
          >
            <FaBars />
          </Button>
          <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader>SUPPLY CHAIN</DrawerHeader>
              <DrawerBody>
                <Button variant="ghost" width="100%" justifyContent="start" mt={4}>
                  Usuários
                </Button>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      ) : (
        <Box width="250px" bg="white" p={4} boxShadow="md" minHeight="100vh">
          <Text fontSize="xl" fontWeight="bold">
            SUPPLY CHAIN
          </Text>
          <Button variant="ghost" width="100%" justifyContent="start" mt={4}>
            Usuários
          </Button>
        </Box>
      )}
    </>
  );
};

export default Sidebar;
