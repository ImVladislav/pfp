import { Box, Typography } from "@mui/material";
import TradingViewWidget from "./Chart";

const Section3 = () => {
  return (
    <Box height='100vh' position='relative'>
      <Box
        position='absolute'
        left='50%'
        sx={{
          height: "40%",
          width: { xs: "80%", md: "50%", xl: "50%" },
          transform: "translateX(-50%)",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            width: "100%",
            border: "1px solid #fff",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <TradingViewWidget />
        </Box>
        <Box
          sx={{
            my: 3,
            width: "100%",
          }}
        >
          <Typography
            py={2}
            color='white'
            textAlign='center'
            fontSize={{ xs: 15, sm: 20, md: 35, lg: 35, xl: 45 }}
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
            CA: 5DkLaee4Ctm9v8bka1zGeuPUTbngZaznZsc1t3L4pump
          </Typography>
        </Box>
        <Box
          component='a'
          href='https://jup.ag/swap/SOL-7SiUnuZbN8pwu4H5q3KbD644VHjrGra6oGgr8ZCxpump'
          sx={{
            img: {
              transition: "0.5s",
            },
            ":hover": {
              cursor: "pointer",
              img: {
                transform: "translateX(-50%) scale(1.2)",
              },
            },
          }}
        >
          <Box
            component='img'
            src='/button_1.png'
            sx={{
              height: { xs: 80, md: 100, xl: 100 },
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
        </Box>
      </Box>

      <Box
        component='img'
        src='/tab_2.png'
        position='absolute'
        height={{ xs: 50, md: 70 }}
        left='30%'
        top={{ xs: "15%", md: "15%", lg: "10%" }}
        sx={{
          transform: "rotate(0deg)",
          zIndex: -1,
        }}
      />
      <Box
        component='img'
        src='/toy_2.png'
        position='absolute'
        height={{ xs: 50, md: 70 }}
        left='12%'
        top={{ xs: "15%", md: "15%", lg: "0%" }}
        sx={{
          transform: "rotate(200deg)",
          zIndex: -1,
        }}
      />
      <Box
        component='img'
        src='/tab_2.png'
        position='absolute'
        height={{ xs: 50, md: 70 }}
        left='12%'
        top={{ xs: "15%", md: "15%", lg: "20%" }}
        sx={{
          transform: "rotate(0deg)",
          zIndex: -1,
        }}
      />
      <Box
        component='img'
        src='/toy_2.png'
        position='absolute'
        height={{ xs: 50, md: 70 }}
        left='30%'
        top={{ xs: "15%", md: "15%", lg: "47%" }}
        sx={{
          transform: "rotate(200deg)",
          zIndex: -1,
        }}
      />
      <Box
        component='img'
        src='/toy_2.png'
        position='absolute'
        height={{ xs: 50, md: 100 }}
        right='10%'
        top={{ xs: "15%", md: "15%", lg: "25%" }}
        sx={{
          transform: "rotate(150deg)",
          zIndex: -1,
        }}
      />
      <Box
        component='img'
        src='/toy_2.png'
        position='absolute'
        height={{ xs: 50, md: 80 }}
        left={{ xs: "70%", md: "70%" }}
        top={{ xs: "60%", md: "60%", lg: "60%" }}
        sx={{
          transform: "rotate(20deg)",
          zIndex: -1,
        }}
      />
      <Box
        component='img'
        src='/tab_2.png'
        position='absolute'
        height={{ xs: 50, md: 70 }}
        left={{ xs: "35%", md: "35%" }}
        top={{ xs: "64%", md: "64%", lg: "64%" }}
        sx={{
          transform: "rotate(-100deg)",
          zIndex: -1,
        }}
        display={{ xs: "none", md: "block" }}
      />
      <Box
        component='img'
        src='/tab_2.png'
        position='absolute'
        height={{ xs: 40, md: 70 }}
        left={{ xs: "75%", md: "55%" }}
        top={{ xs: "75%", md: "68%", lg: "68%" }}
        sx={{
          transform: "rotate(-10deg)",
          zIndex: -1,
        }}
      />
      <Box
        component='img'
        src='/toy_2.png'
        position='absolute'
        height={{ xs: 50, md: 70 }}
        left={{ xs: "45%", md: "80%", xl: "45%" }}
        bottom={{ xs: "10%", md: "10%", lg: "20%", xl: "10%" }}
        sx={{
          transform: "rotate(120deg)",
          zIndex: -1,
        }}
        display={{ xs: "none", md: "block" }}
      />
      <Box
        component='img'
        src='/toy_2.png'
        position='absolute'
        height={{ xs: 50, md: 70 }}
        left={{ xs: "10%", md: "10%" }}
        top={{ xs: "85%", md: "75%", lg: "65%", xl: "75%" }}
        sx={{
          transform: "rotate(-10deg)",
          zIndex: -1,
        }}
      />
    </Box>
  );
};

export default Section3;
