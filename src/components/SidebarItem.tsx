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
      marginBottom="1rem"
      _active={{ bg: 'gray.400' }}
      bg={active ? 'gray.300' : ''}
      onClick={onClick}
    >
      {name}
    </Button>
  );
};
