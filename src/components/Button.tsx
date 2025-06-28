import { Button as MuiButton, type ButtonProps } from "@mui/material";
import type { FC } from "react";

const Button: FC<ButtonProps & { children: string }> = ({
  children,
  sx,
  ...rest
}) => {
  return (
    <MuiButton
      sx={{
        backgroundColor: "rgb(201, 238, 106)",
        borderRadius: 0,
        padding: "4px 40px",
        border: 4,
        borderColor: "rgb(48, 71, 0)",
        "&:hover": {
          backgroundColor: "#C4E86B",
        },
        ...sx,
      }}
      {...rest}
    ></MuiButton>
  );
};

export default Button;
