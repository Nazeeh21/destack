import { Box, Flex, Spacer } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box p={5} color='black'>
      <div className="flex w-full align-middle justify-between">
        <div />
        <ConnectButton />
      </div>
      {children}
    </Box>
  );
};

export default Layout;
