import { Box } from '@chakra-ui/core';
import React, { FunctionComponent } from 'react';

export const Menubar: FunctionComponent = ({ children }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      padding="1rem"
      alignItems="flex-start"
    >
      {children}
    </Box>
  );
};
