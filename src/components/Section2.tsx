import { Box, Typography } from "@mui/material";

const Section2 = () => {
  return (
    <Box height='100vh' position='relative'>
      <Box
        width={{ xs: "80%", md: "60%" }}
        position='absolute'
        top={{ xs: "10%", md: "10%" }}
        left={{ xs: "50%", md: "50%" }}
        sx={{
          zIndex: 11,
          transform: "translateX(-50%)",
        }}
      >
        <Typography
          color='white'
          textAlign='center'
          fontSize={{ xs: 17, md: 45, xl: 80 }}
          sx={{
            textShadow: {
              xs: `
              4px 4px 8px rgba(0, 0, 0, 0.2),
              4px 4px 4px rgba(0, 0, 0, 0.2),
              4px 4px 2px rgba(0, 0, 0, 0.2),
              4px 4px 4px rgba(0, 0, 0, 0.2)
            `,
              md: ` 12px 12px 8px rgba(0, 0, 0, 0.2),
              12px 12px 4px rgba(0, 0, 0, 0.2),
              12px 12px 2px rgba(0, 0, 0, 0.2),
              12px 12px 16px rgba(0, 0, 0, 0.2)`,
            },
            fontWeight: 400,
          }}
        >
          INSIDE THESE CAPSULES LIES THE PATH TO
          <br />
          THE MOST FUN WAVE ON SOLANA - JOIN
          <br />
          THE COMMUNITY
        </Typography>
      </Box>
      <Box
        component='a'
        href='https://x.com/PumpPlushie'
        sx={{
          img: {
            transition: "0.5s",
          },
          ":hover": {
            cursor: "pointer",
            img: {
              transform: "scale(1.2)",
            },
          },
        }}
      >
        <Box
          component='img'
          src='/button_2.png'
          position='absolute'
          height={{ xs: 70, md: 100 }}
          top={{ xs: "0%", md: "10%", xl: "0%" }}
          left={{ xs: "55%", md: "5%" }}
        />
      </Box>

      <Box
        component='img'
        src='/toy_2.png'
        position='absolute'
        height={{ xs: 60, md: 100 }}
        left={{ xs: "8%", md: "10%" }}
        bottom={{ xs: "68%", md: "40%", lg: "45%" }}
        sx={{ zIndex: 11 }}
      />
      <Box
        component='img'
        src='/tablets.png'
        position='absolute'
        height={{ xs: 170, md: 350 }}
        left='12%'
        bottom={{ xs: "60%", md: "40%", lg: "28%" }}
        sx={{ zIndex: 1 }}
      />

      <Box
        component='img'
        src='/toy_2.png'
        position='absolute'
        height={{ xs: 50, md: 120, xl: 160 }}
        right={{ xs: "5%", md: "15%", xl: "15%" }}
        bottom={{ xs: "60%", md: "40%", lg: "45%", xl: "50%" }}
        display={{ xs: "none", md: "block" }}
      />
      <Box
        component='img'
        src='/toy_2.png'
        position='absolute'
        height={{ xs: 50, md: 100 }}
        right={{ xs: "5%", md: "45%", xl: "45%" }}
        bottom={{ xs: "60%", md: "40%", lg: "45%", xl: "20%" }}
        sx={{
          transform: "rotate(150deg)",
        }}
        display={{ md: "none", xl: "block" }}
      />
      <Box
        component='a'
        href='https://t.me/PumpPlushie'
        sx={{
          img: {
            transition: "0.5s",
          },
          ":hover": {
            cursor: "pointer",
            img: {
              transform: "scale(1.2)",
            },
          },
        }}
      >
        <Box
          component='img'
          src='/button_3.png'
          position='absolute'
          height={{ xs: 70, md: 100 }}
          right={{ xs: "15%", md: "29%", xl: "28%" }}
          bottom={{ xs: "45%", md: "29%", lg: "29%", xl: "38%" }}
        />
      </Box>

      <Box
        component='img'
        src='/tab_2.png'
        position='absolute'
        height={{ xs: 50, md: "auto" }}
        right='17%'
        bottom={{ xs: "15%", md: "15%", lg: "15%" }}
        sx={{
          transform: "rotate(60deg) scale(0.8)",
        }}
      />
      <Box
        component='img'
        src='/tab_2.png'
        position='absolute'
        height={{ xs: 50, md: 70 }}
        left='22%'
        bottom={{ xs: "15%", md: "15%", lg: "28%" }}
        sx={{
          transform: "rotate(0deg)",
          zIndex: 1,
        }}
      />

      <Box
        component='img'
        src='/tab_2.png'
        position='absolute'
        height={{ xs: 50, md: "auto" }}
        right='24%'
        bottom={{ xs: "30%" }}
        display={{ xs: "block", md: "none" }}
        sx={{
          transform: "rotate(60deg) scale(0.8)",
        }}
      />

      <Box
        component='img'
        src='/toy_2.png'
        position='absolute'
        height={{ xs: 60, md: "auto" }}
        right='40%'
        bottom={{ xs: "0%" }}
        display={{ xs: "block", md: "none" }}
        sx={{
          transform: "rotate(150deg) scale(0.8)",
        }}
      />

      <Box
        component='img'
        src='/toy_2.png'
        position='absolute'
        height={{ xs: 80, md: "auto" }}
        right='70%'
        bottom={{ xs: "30%" }}
        display={{ xs: "block", md: "none" }}
        sx={{
          transform: "rotate(60deg) scale(0.8)",
        }}
      />
    </Box>
  );
};

export default Section2;
