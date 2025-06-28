import { Box } from "@mui/material";

const Section4 = () => {
  return (
    <Box
      height={{ xs: "45vh", md: "100vh" }}
      position='relative'
      overflow='hidden'
    >
      <Box
        component='img'
        src='/toy_2.png'
        position='absolute'
        height={{ xs: 50, md: 100 }}
        left={{ xs: "20%", md: "20%" }}
        top={{ xs: "45%", md: "45%", lg: "45%" }}
        sx={{
          transform: "rotate(-50deg)",
          zIndex: 1,
        }}
      />

      <Box
        component='img'
        src='/toy_2.png'
        position='absolute'
        height={{ xs: 50, md: 100 }}
        left='40%'
        top={{ xs: "75%", md: "60%", lg: "60%" }}
        sx={{
          transform: "rotate(150deg)",
          zIndex: 1,
        }}
        display={{ xs: "none", xl: "block" }}
      />
      <Box position='absolute' bottom={-5} width='100%'>
        <Box component='img' src='/tab_down.png' width='100%' height='100%' />
        <Box position='absolute' width='100%' top={{ xs: 0, md: 70, xl: 100 }}>
          <Box display='flex' justifyContent='center'>
            <Box
              component='a'
              href='https://www.dextools.io/app/en/solana/pair-explorer/8qmcsnVsyTJpgfraZeg2NeVYwr8314a7Xwsj6zrPoAVx?t=1751080103532'
              sx={{
                img: {
                  transition: "0.5s",
                },
                ":hover": {
                  cursor: "pointer",
                  img: {
                    transform: "translateY(-30%) scale(1.2)",
                  },
                },
              }}
            >
              <Box
                component='img'
                src='/button_4.png'
                sx={{ width: { xs: 80, md: 200, xl: "auto" } }}
              />
            </Box>
            <Box
              component='a'
              href='https://dexscreener.com/solana/7SiUnuZbN8pwu4H5q3KbD644VHjrGra6oGgr8ZCxpump'
              sx={{
                img: {
                  transition: "0.5s",
                },
                ":hover": {
                  cursor: "pointer",
                  img: {
                    transform: "translateY(-30%) scale(1.2)",
                  },
                },
              }}
            >
              <Box
                component='img'
                src='/button_5.png'
                sx={{ width: { xs: 80, md: 200, xl: "auto" } }}
              />
            </Box>
            <Box
              component='a'
              href='https://t.me/PumpPlushies'
              sx={{
                img: {
                  transition: "0.5s",
                },
                ":hover": {
                  cursor: "pointer",
                  img: {
                    transform: "translateY(-30%) scale(1.2)",
                  },
                },
              }}
            >
              <Box
                component='img'
                src='/button_6.png'
                sx={{ width: { xs: 80, md: 200, xl: "auto" } }}
              />
            </Box>
            <Box
              component='a'
              href='https://x.com/PumpPlushies'
              sx={{
                img: {
                  transition: "0.5s",
                },
                ":hover": {
                  cursor: "pointer",
                  img: {
                    transform: "translateY(-30%) scale(1.2)",
                  },
                },
              }}
            >
              <Box
                component='img'
                src='/button_7.png'
                sx={{ width: { xs: 80, md: 200, xl: "auto" } }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        component='img'
        src='/toy_2.png'
        position='absolute'
        height={{ xs: 50, md: 50 }}
        left={{ xs: "10%", md: "10%" }}
        top={{ xs: "0%", md: "15%", lg: "15%" }}
        sx={{
          transform: "rotate(-50deg)",
          zIndex: 1,
        }}
      />
      <Box
        component='img'
        src='/tab_2.png'
        position='absolute'
        height={{ xs: 40, md: 60 }}
        left={{ xs: "5%", md: "5%" }}
        top={{ xs: "28%", md: "45%", lg: "45%" }}
        sx={{
          transform: "rotate(-100deg)",
          zIndex: 1,
        }}
        display={{ xs: "none", md: "block" }}
      />
      <Box
        component='img'
        src='/tab_2.png'
        position='absolute'
        height={{ xs: 30, md: 90 }}
        left={{ xs: "30%", md: "28%", xl: "65%" }}
        top={{ xs: "20%", md: "20%", lg: "20%", xl: "2%" }}
        sx={{
          transform: "rotate(-250deg)",
          zIndex: 1,
        }}
      />
      <Box
        component='img'
        src='/toy_2.png'
        position='absolute'
        height={{ xs: 50, md: 90 }}
        left={{ xs: "28%", md: "28%" }}
        top={{ xs: "25%", md: "15%", lg: "15%" }}
        sx={{
          transform: "rotate(-150deg)",
          zIndex: 1,
        }}
        display={{ xs: "none", xl: "block" }}
      />
      <Box
        component='img'
        src='/toy_2.png'
        position='absolute'
        height={{ xs: 50, md: 90 }}
        left={{ xs: "50%", md: "50%" }}
        top={{ xs: "5%", md: "30%", lg: "30%", xl: "15%" }}
        sx={{
          transform: "rotate(150deg)",
          zIndex: -1,
        }}
      />
      <Box
        component='img'
        src='/tab_2.png'
        position='absolute'
        height={{ xs: 50, md: 50 }}
        left={{ xs: "45%", md: "45%" }}
        top={{ xs: "35%", md: "50%", lg: "55%", xl: "35%" }}
        sx={{
          transform: "rotate(30deg)",
          zIndex: 1,
        }}
        display={{ xs: "none", md: "block" }}
      />
      <Box
        component='img'
        src='/tab_2.png'
        position='absolute'
        height={{ xs: 50, md: 70 }}
        left={{ xs: "75%", md: "65%" }}
        top={{ xs: "32%", md: "32%", lg: "32%" }}
        sx={{
          transform: "rotate(70deg)",
          zIndex: 1,
        }}
      />
      <Box
        component='img'
        src='/toy_2.png'
        position='absolute'
        height={{ xs: 50, md: 50 }}
        left={{ xs: "80%", md: "85%" }}
        top={{ xs: "7%", md: "12%", lg: "12%" }}
        sx={{
          transform: "rotate(-80deg)",
          zIndex: 1,
        }}
      />
      <Box
        component='img'
        src='/tab_2.png'
        position='absolute'
        height={{ xs: 50, md: 70 }}
        left={{ xs: "80%", md: "80%" }}
        top={{ xs: "52%", md: "52%", lg: "52%" }}
        sx={{
          transform: "rotate(-10deg)",
          zIndex: 1,
        }}
        display={{ xs: "none", md: "block" }}
      />
      <Box
        component='img'
        src='/toy_2.png'
        position='absolute'
        height={{ xs: 70, md: 70 }}
        left={{ xs: "60%", md: "60%" }}
        top={{ xs: "54%", md: "54%", lg: "54%" }}
        sx={{
          transform: "rotate(-120deg)",
          zIndex: 1,
        }}
      />
    </Box>
  );
};

export default Section4;
