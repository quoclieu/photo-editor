import React, { FunctionComponent } from 'react';
import { Box } from '@chakra-ui/core';

interface Props {
  style: Record<string, string>;
}

export const MainImage: FunctionComponent<Props> = ({ style }) => {
  return (
    <Box
      gridArea="image"
      bgImage="url('https://source.unsplash.com/EwKXn5CapA4')"
      w="100%"
      h="100%"
      bgPos="top center"
      bgSize="contain"
      backgroundRepeat="no-repeat"
      style={style}
    />
  );
};
