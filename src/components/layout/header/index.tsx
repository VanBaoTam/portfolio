import { Box, Typography } from "@/components/mui";
import { COLORS } from "@/constants";
function Header() {
  return (
    <Box
      sx={{
        backgroundColor: COLORS.BACKGROUND.SECONDARY,
        color: COLORS.TYPOGRAPHY.MAIN,
        p: 1,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          border: "1px solid gray",
          py: "1px",
          textAlign: "center",
          width: "40%",
          borderRadius: 2,
        }}
      >
        <Typography> Van Bao Tam - Portfolio</Typography>
      </Box>
    </Box>
  );
}

export default Header;
