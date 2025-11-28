import { Button, Stack } from "@mui/material";
import Logo from "../logo";
import { ROUTES } from "@/routes/route";
import { Link, useNavigate } from "react-router-dom";
import UserImg from "@/assets/user.png";
import { useUserAuthStore } from "@/store/user-auth-store";
const PrimaryHeaders = () => {
  const navigate = useNavigate();
  const { logout } = useUserAuthStore();

  const handleLogout = () => {
    logout();
    navigate(ROUTES.login);
  };
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      bgcolor={"primary.main"}
      px={2}
    >
      <Link to={ROUTES.dashboard}>
        <Logo />
      </Link>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        gap={2}
      >
        <Link to={ROUTES.user}>
          <img src={UserImg} alt="user" />
        </Link>
        <Button
          onClick={handleLogout}
          sx={() => ({ backgroundColor: "secondary.main" })}
        >
          Logout
        </Button>
      </Stack>
    </Stack>
  );
};

export default PrimaryHeaders;
