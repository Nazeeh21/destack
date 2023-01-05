import { Box, Flex, Spacer } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";
import LeftComp from "../LeftComp";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      p={5}
      height="100vh"
      width="100vw"
      color="black"
      background="brand.yellow"
    >
      <div className="flex align-center w-full h-full">
        <div className="w-2/12">
          <LeftComp />
        </div>
        <div className="w-7/12 bg-white rounded-md overflow-y-scroll">{children}</div>
        <div className="w-3/12"></div>
      </div>
    </Box>
  );
};

export default Layout;
