import React, { useRef, useState } from 'react';
import { MainImage } from './MainImage';
import {
  Box,
  Button,
  Grid,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from '@chakra-ui/core';
import { DEFAULT_OPTIONS } from '../utils/options';
import { SidebarItem as MenuItem } from './MenuItem';
import { Menubar } from './Menubar';

export const Editor = () => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [options, setOptions] = useState(DEFAULT_OPTIONS);
  const [bgImage, setBgImage] = useState(
    "url('https://source.unsplash.com/random')"
  );
  const [randomKey, setRandomKey] = useState(0);
  const fileUploadBtnRef = useRef<any>(null);

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

  const handleReset = () => {
    setOptions(DEFAULT_OPTIONS);
  };

  const handleRandomiseImage = () => {
    setRandomKey(randomKey + 1);
    setBgImage(`url('https://source.unsplash.com/random/${randomKey + 1}')`);
  };

  const handleFileChange = (e: React.ChangeEvent<any>) => {
    if (e.target.files[0] !== null) {
      var selectedFile = e.target.files[0];
      var reader = new FileReader();

      reader.onload = (event: any) => {
        setBgImage(`url('${event.target.result}')`);
      };

      reader.readAsDataURL(selectedFile);
    }
  };

  const getImageStyle = () => {
    const filters = options.map((option) => {
      return `${option.property}(${option.value}${option.unit})`;
    });

    return { filter: filters.join(' ') };
  };

  return (
    <Grid
      bg="gray.800"
      templateColumns="1fr"
      templateRows="auto 1fr auto"
      templateAreas="
      'controls'
      'image'
      'user-buttons'
      "
      h="100vh"
      w="100vw"
    >
      <Box bg="gray.900" borderRadius="4px" margin="1rem">
        <Menubar>
          {options.map((option, index) => {
            return (
              <MenuItem
                key={index}
                name={option.name}
                active={index === selectedOptionIndex}
                onClick={() => setSelectedOptionIndex(index)}
              />
            );
          })}
        </Menubar>
        <Box padding="1rem">
          <Slider
            value={selectedOption.value}
            min={selectedOption.range.min}
            max={selectedOption.range.max}
            onChange={handleSliderChange}
          >
            <SliderTrack bg="gray.300" h="10px" />
            <SliderFilledTrack bg="purple.500" h="10px" />
            <SliderThumb size="4" />
          </Slider>
        </Box>
      </Box>
      <MainImage bgImage={`${bgImage}`} style={getImageStyle()} />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100px"
      >
        <input
          ref={fileUploadBtnRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        <Button
          marginRight="1rem"
          onClick={() => fileUploadBtnRef.current.click()}
        >
          Open Image
        </Button>
        <Button onClick={handleRandomiseImage} marginRight="1rem">
          Random Image
        </Button>
        <Button
          bg="gray.500"
          color="white"
          marginRight="1rem"
          _hover={{ bg: 'gray.700' }}
          onClick={handleReset}
        >
          Reset
        </Button>
        <Button variantColor="teal" bg="teal.400">
          Download
        </Button>
      </Box>
    </Grid>
  );
};
