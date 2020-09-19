import React, { FunctionComponent } from 'react';
import { Box } from '@chakra-ui/core';

interface Props {
  style: Record<string, string>;
  bgImage: string;
}

export const MainImage: FunctionComponent<Props> = ({ style, bgImage }) => {
  return (
    <Box
      bgImage={`${bgImage}`}
      w="100%"
      h="100%"
      bgPos="center center"
      bgSize="contain"
      backgroundRepeat="no-repeat"
      style={style}
    />
  );
};
