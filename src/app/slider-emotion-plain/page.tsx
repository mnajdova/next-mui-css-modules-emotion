'use client';
import { SliderEmotion as Slider } from '@mui/material/Slider';

const arr = Array.from({ length: 500 });

export default function Home() {
  return (
    <>
    {arr.map((_, index) => (
      <Slider key={index} defaultValue={30} aria-label="Default" valueLabelDisplay="auto" />
    ))}
    </>
  ) 
}
