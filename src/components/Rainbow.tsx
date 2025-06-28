import { Box } from "@mui/material";

const Rainbow = () => {
  return (
    <>
      <Box
        width='100%'
        component='img'
        src='/rainbow_1.png'
        position='absolute'
        sx={{ objectFit: "cover", zIndex: -100 }}
        top={{ xs: "calc(100vh + 100px)", md: "calc(100vh - 400px)" }}
      />
      <Box
        width='100%'
        component='img'
        src='/rainbow_2.png'
        position='absolute'
        sx={{ objectFit: "cover", zIndex: -100 }}
        bottom={{ xs: 80, md: 200, xl: 400 }}
      />
    </>
  );
};

export default Rainbow;
