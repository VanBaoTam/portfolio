import { COLORS } from "@/constants";
import { Box, Typography } from "@/components/mui";
import React from "react";

function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        py: 1,
        backgroundColor: COLORS.BACKGROUND.MAIN,
        color: COLORS.TYPOGRAPHY.MAIN,
      }}
    >
      <Typography textAlign={"center"}>From Vietnam with ❣️</Typography>
    </Box>
  );
}

export default Footer;
