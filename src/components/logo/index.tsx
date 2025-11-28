import { Box, Stack, Typography } from "@mui/material";
import LogoImg from "@/assets/logo.png";

const Logo = () => {
  return (
    <Stack direction="row" alignItems="center" justifyContent={"flex-start"}>
      <Box sx={() => ({ width: "60px" })}>
        <img src={LogoImg} alt="Logo" style={{ width: "100%" }} />
      </Box>
      <Typography
        variant="h6"
        sx={(theme) => ({
          color: "white",
          mb: 1,
          fontWeight: 600,
          [theme.breakpoints.down("sm")]: { display: "none" },
        })}
      >
        Dealer Dashboard
      </Typography>
    </Stack>
  );
};

export default Logo;
