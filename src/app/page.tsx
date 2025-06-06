'use client';
import { styled } from '@mui/material/styles';
import Header from '@mui/material/Header';
import AppTheme from '@/theme';
import Slider from '@mui/material/Slider';

const StyledHeader = styled(Header)({
  backgroundColor: 'blue',
  color: 'white',
});

export default function Home() {
  return (
    <>
      <Header>Default blue Header</Header>
      <StyledHeader>Styled Header</StyledHeader>
      <Header sx={{  backgroundColor: 'blue', color: 'white',}}>Default blue Header</Header>
      <Slider defaultValue={30} aria-label="Default" valueLabelDisplay="auto" />
    </>
  );
}
