import { Box } from "@mui/material";

const Section1 = () => {
  return (
    <Box height='100vh' position='relative'>
      <Box
        component='img'
        src='/pfp.png'
        position='absolute'
        height={{ xs: 200, md: 300, xl: "auto" }}
        top={{ xs: "50%", md: "50%" }}
        left={{ xs: "50%", md: "50%" }}
        sx={{
          transform: "translate(-50%, -50%)",
        }}
      />

      <Box
        component='img'
        src='/tab_2.png'
        position='absolute'
        height={{ xs: 50, md: 80, xl: "auto" }}
        top={{ xs: "20%", md: "10%" }}
        left={{ xs: "10%", md: "10%" }}
        sx={
          {
            //   transform: "translate(-50%, -50%)",
          }
        }
      />
      <Box
        component='img'
        src='/tab_2.png'
        position='absolute'
        height={{ xs: 50, md: 80, xl: "auto" }}
        top={{ xs: "30%", md: "35%" }}
        left='20%'
        sx={{
          transform: "rotate(70deg) scale(0.7)",
        }}
      />
      <Box
        component='img'
        src='/tab_2.png'
        position='absolute'
        height={{ xs: 50, md: 60, xl: "auto" }}
        bottom={{ xs: "10%", md: "15%" }}
        left='10%'
        sx={{
          transform: "rotate(10deg) scale(0.7)",
        }}
      />
      <Box
        component='img'
        src='/tab_2.png'
        position='absolute'
        height={{ xs: 50, md: 80, xl: "auto" }}
        bottom={{ xs: "4%", md: "18%" }}
        left='35%'
        sx={{
          transform: "rotate(-115deg)",
        }}
      />

      <Box
        component='img'
        src='/tab_2.png'
        position='absolute'
        height={{ xs: 50, md: 80, xl: "auto" }}
        top={{ xs: "20%", md: "10%" }}
        left='50%'
        sx={{
          transform: "rotate(5deg) scale(0.7)",
        }}
      />

      <Box
        component='img'
        src='/tab_2.png'
        position='absolute'
        height={{ xs: 50, md: 80, xl: "auto" }}
        bottom={{ xs: "15%", md: "10%" }}
        right={{ xs: "15%", md: "35%" }}
        sx={{
          zIndex: 1,
          transform: "rotate(-130deg) scale(0.7)",
        }}
      />

      <Box
        component='img'
        src='/tab_2.png'
        position='absolute'
        height={{ xs: 50, md: 80, xl: "auto" }}
        top={{ xs: "30%", md: "25%" }}
        right={{ xs: "15%", md: "20%" }}
        sx={{
          zIndex: 1,
          //   transform: "translate(-50%, -50%)",
        }}
      />

      <Box
        component='img'
        src='/tab_2.png'
        position='absolute'
        height={{ xs: 50, md: 80, xl: "auto" }}
        top='45%'
        right='10%'
        sx={{
          transform: "rotate(-100deg) scale(0.7)",
          zIndex: 1,
        }}
      />

      <Box
        component='img'
        src='/toy_2.png'
        position='absolute'
        height={{ xs: 60, md: 100, xl: 150 }}
        top={{ xs: "65%", md: "60%" }}
        left='20%'
        sx={{
          transform: "rotate(-30deg)",
          zIndex: 1,
        }}
      />
      <Box
        component='img'
        src='/toy_2.png'
        position='absolute'
        height={{ xs: 70, md: 100, xl: 150 }}
        top={{ xs: "5%", md: "10%" }}
        left={{ xs: "32%", md: "30%" }}
        sx={{
          transform: "rotate(30deg)",
          zIndex: 1,
        }}
      />
      <Box
        component='img'
        src='/toy_2.png'
        position='absolute'
        height={{ xs: 40, md: 60, xl: 80 }}
        top={{ xs: "15%", md: "15%" }}
        right={{ xs: "10%", md: "32%" }}
        sx={{
          transform: "rotate(45deg)",
          zIndex: 1,
        }}
      />
      <Box
        component='img'
        src='/toy_2.png'
        position='absolute'
        height={{ xs: 50, md: 80, xl: 120 }}
        bottom='25%'
        right='10%'
        sx={{
          transform: "rotate(140deg)",
          zIndex: 1,
        }}
      />
    </Box>
  );
};

export default Section1;
