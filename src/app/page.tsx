'use client';
import Link from 'next/link';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const StyledSlider = styled(Slider)({
  width: 320,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    width: 20,
    height: 20,
  },
});

export default function Home() {
  return (
    <main style={{ margin: '20px' }}>
      <h1>This project is a POC for testing a version of Material UI built on top of plain CSS instead of Emotion</h1>
      <Stack spacing={3} sx={{ mt: 4, mb: 4, maxWidth: 420 }}>
        <Typography variant="h6">Slider examples</Typography>

        <div>
          <Typography variant="body2" sx={{ mb: 1 }}>
            1) Plain slider
          </Typography>
          <Slider defaultValue={30} aria-label="Plain slider" />
        </div>

        <div>
          <Typography variant="body2" sx={{ mb: 1 }}>
            2) Variant with `sx`
          </Typography>
          <Slider
            defaultValue={50}
            aria-label="SX slider"
            sx={{
              color: 'secondary.main',
              height: 10,
              '& .MuiSlider-thumb': {
                width: 18,
                height: 18,
              },
              '& .MuiSlider-track': {
                border: 'none',
              },
            }}
          />
        </div>

        <div>
          <Typography variant="body2" sx={{ mb: 1 }}>
            3) Variant with styled()
          </Typography>
          <StyledSlider defaultValue={70} aria-label="Styled slider" />
        </div>
      </Stack>
      <p>Head to the benchmark pages:</p>
      <ul>
        <li>
          - <Link href="/slider-css" style={{ color: 'blue', textDecoration: 'underlined' }}>Slider based on plain CSS</Link>
        </li>
        <li>
          - <Link href="/slider-emotion" style={{ color: 'blue', textDecoration: 'underlined' }}>Slider based on Emotion</Link>
        </li>
      </ul>
    </main>
  );
}
