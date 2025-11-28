import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/routes/route";
import Logo from "@/assets/logo.png";
import CustomTextField from "@/components/input-fields";
import UseLoginForm from "./form";
import type { TLoginForm } from "./types";
import { toast } from "react-toastify";
import { useUserAuthStore } from "@/store/user-auth-store";

const LoginPage = () => {
  const { register, handleSubmit, setError, errors } = UseLoginForm();
  const { setLoginRemember } = useUserAuthStore();
  const navigate = useNavigate();

  const onSubmit = (data: TLoginForm) => {
    if (data.email === "admin@gmail.com" && data.password === "admin@123") {
      navigate(ROUTES.dashboard);
      setLoginRemember();

      toast.success("Login successfully");
    } else {
      setError("email", {
        type: "manual",
        message: "",
      });
      setError("password", {
        type: "manual",
        message: "",
      });
      toast.error("Invalid email or password");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #1C3B6F 0%, #28A745 100%)",
        px: 2,
      }}
    >
      <Card
        sx={{
          maxWidth: 480,
          width: "100%",
          borderRadius: 4,
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
        }}
      >
        <CardContent sx={{ p: 5 }}>
          <Stack spacing={3} alignItems="center">
            <Box sx={{ width: "80px", mb: 1 }}>
              <img src={Logo} alt="Logo" style={{ width: "100%" }} />
            </Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: "text.primary",
                textAlign: "center",
              }}
            >
              Welcome Back
            </Typography>
            <Typography
              variant="body2"
              color="text.primary"
              sx={{ opacity: 0.7, textAlign: "center", mb: 2 }}
            >
              Sign in to access your dealer dashboard
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              sx={{ width: "100%" }}
            >
              <Stack spacing={3}>
                <CustomTextField
                  label="Email Address"
                  type="email"
                  errors={!!errors.email}
                  helperText={errors.email?.message}
                  placeholder="you@example.com"
                  {...register("email")}
                />
                <CustomTextField
                  label="Password"
                  type="password"
                  errors={!!errors.password}
                  helperText={errors.password?.message}
                  placeholder="Enter your password"
                  {...register("password")}
                />

                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={(theme) => ({
                    [theme.breakpoints.down(425)]: {
                      flexDirection: "column",
                    },
                  })}
                >
                  <Link
                    href="#"
                    underline="hover"
                    sx={{
                      color: "primary.main",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                    }}
                  >
                    Forgot Password?
                  </Link>
                </Stack>

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  sx={{
                    py: 1.5,
                    borderRadius: 2,
                    textTransform: "none",
                    fontSize: "1rem",
                    fontWeight: 600,
                    boxShadow: "0 4px 14px rgba(28, 59, 111, 0.4)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 6px 20px rgba(28, 59, 111, 0.6)",
                    },
                  }}
                >
                  Sign In
                </Button>
              </Stack>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LoginPage;
