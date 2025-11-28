import { Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/route";
import { useNavigate } from "react-router-dom";
import Logo from "../logo";
const SecondaryHeaders = () => {
  const navigate = useNavigate();
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      bgcolor={"primary.main"}
      px={2}
    >
      <Link to={ROUTES.home}>
        <Logo />
      </Link>
      <Button
        onClick={() => navigate(ROUTES.login)}
        sx={() => ({ backgroundColor: "secondary.main" })}
      >
        Login
      </Button>
    </Stack>
  );
};

export default SecondaryHeaders;
