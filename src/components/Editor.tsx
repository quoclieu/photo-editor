import React, { useState } from 'react';
import { MainImage } from './MainImage';
import {
  Box,
  Grid,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from '@chakra-ui/core';
import { DEFAULT_OPTIONS } from '../utils/options';
import { SidebarItem } from './SidebarItem';

export const Editor = () => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [options, setOptions] = useState(DEFAULT_OPTIONS);
  const selectedOption = options[selectedOptionIndex];

  const handleSliderChange = (newValue: number) => {
    setOptions((prevOptions) => {
      return prevOptions.map((option, index) => {
        if (index !== selectedOptionIndex) return option;
        return {
          ...option,
          value: newValue,
        };
      });
    });
  };

  const getImageStyle = () => {
    const filters = options.map((option) => {
      return `${option.property}(${option.value}${option.unit})`;
    });

    return { filter: filters.join(' ') };
  };

  return (
    <Grid
      bg="gray.100"
      templateColumns="auto 1fr"
      templateRows="1fr auto"
      templateAreas="
      'sidebar image'
      'sidebar slider'
      "
      h="100vh"
      w="100vw"
    >
      <MainImage style={getImageStyle()} />
      <Box
        gridArea="sidebar"
        bg="gray.100"
        display="flex"
        flexDir="column"
        padding="1rem"
        width="200px"
        alignItems="flex-start"
      >
        {options.map((option, index) => {
          return (
            <SidebarItem
              key={index}
              name={option.name}
              active={index === selectedOptionIndex}
              onClick={() => setSelectedOptionIndex(index)}
            />
          );
        })}
      </Box>
      <Box gridArea="slider" padding="2rem" bg="blue.100" mt="2rem">
        <Slider
          value={selectedOption.value}
          min={selectedOption.range.min}
          max={selectedOption.range.max}
          onChange={handleSliderChange}
        >
          <SliderTrack bg="red.100" h="10px" />
          <SliderFilledTrack bg="tomato" h="10px" />
          <SliderThumb size="6" />
        </Slider>
      </Box>
    </Grid>
  );
};
