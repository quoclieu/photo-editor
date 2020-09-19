import { Button } from '@chakra-ui/core';
import React, { FunctionComponent } from 'react';

interface Props {
  name: string;
  active: boolean;
  onClick: () => void;
}

export const SidebarItem: FunctionComponent<Props> = ({
  name,
  active,
  onClick,
}) => {
  return (
    <Button
      cursor="pointer"
      padding="1rem"
      _active={{ bg: 'teal.500' }}
      _hover={{ bg: 'teal.300' }}
      bg={active ? 'teal.400' : 'gray.500'}
      color="white"
      onClick={onClick}
    >
      {name}
    </Button>
  );
};
