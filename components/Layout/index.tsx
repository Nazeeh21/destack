import { Box } from "@chakra-ui/react";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <Box p={5}>
    {children}
  </Box>
}

export default Layout;