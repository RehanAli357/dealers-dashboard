import {
  Button,
  Stack,
  Typography,
  Box,
  Card,
  CardContent,
  Chip,
} from "@mui/material";
import BannerImgOne from "@/assets/banner.jpg";
import BannerImgTwo from "@/assets/banner-two.jpg";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { ROUTES } from "@/routes/route";

const HomePage = () => {
  const navigate = useNavigate();
  const featuresRef = useRef<HTMLDivElement>(null);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const features = [
    {
      icon: "📊",
      title: "Real-time Analytics",
      description: "Track dealer performance with live data and insights",
    },
    {
      icon: "🔒",
      title: "Secure & Reliable",
      description: "Enterprise-grade security to protect your data",
    },
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Optimized performance for seamless experience",
    },
    {
      icon: "🎯",
      title: "Easy Management",
      description: "Intuitive interface for effortless dealer organization",
    },
  ];

  const stats = [
    { value: "500+", label: "Active Dealers" },
    { value: "99.9%", label: "Uptime" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <Stack spacing={8} sx={{ pb: 8 }}>
      <Stack
        sx={(theme) => ({
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          gap: 46,
          minHeight: "80vh",
          [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            minHeight: "auto",
            py: 4,
            gap: 1,
          },
        })}
      >
        <Stack
          spacing={3}
          sx={(theme) => ({
            maxWidth: "600px",
            flex: 1,
            ml: 3,
            [theme.breakpoints.down("sm")]: { ml: 0, px: 2 },
          })}
        >
          <Chip
            label="🚀 New Dashboard Experience"
            sx={{
              alignSelf: "flex-start",
              bgcolor: "primary.main",
              color: "text.secondary",
              fontWeight: 600,
              px: 1,
            }}
          />
          <Typography
            variant="h1"
            sx={{
              background: "linear-gradient(135deg, #1C3B6F 0%, #28A745 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 800,
              lineHeight: 1.2,
            }}
          >
            Manage Dealers Effortlessly.
          </Typography>
          <Typography
            variant="h6"
            color="text.primary"
            sx={{ opacity: 0.8, lineHeight: 1.6 }}
          >
            A modern dashboard to track, organize, and manage dealer information
            with ease. Streamline your workflow and boost productivity.
          </Typography>

          <Stack
            direction="row"
            spacing={4}
            sx={(theme) => ({
              pt: 2,
              [theme.breakpoints.down("sm")]: {
                spacing: 2,
              },
            })}
          >
            {stats.map((stat, index) => (
              <Box key={index}>
                <Typography
                  variant="h3"
                  color="primary.main"
                  sx={{ fontWeight: 700 }}
                >
                  {stat.value}
                </Typography>
                <Typography variant="body2" color="text.primary">
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Stack>

          <Stack
            sx={(theme) => ({
              gap: 2,
              pt: 2,
              flexDirection: "row",
              [theme.breakpoints.down("sm")]: {
                flexDirection: "column",
              },
            })}
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate(ROUTES.login)}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: 2,
                textTransform: "none",
                fontSize: "1.1rem",
                fontWeight: 600,
                boxShadow: "0 4px 14px rgba(28, 59, 111, 0.4)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 20px rgba(28, 59, 111, 0.6)",
                },
              }}
            >
              Get Started
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={scrollToFeatures}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: 2,
                textTransform: "none",
                fontSize: "1.1rem",
                fontWeight: 600,
                borderWidth: 2,
                "&:hover": {
                  borderWidth: 2,
                  bgcolor: "rgba(28, 59, 111, 0.05)",
                },
              }}
            >
              Learn More
            </Button>
          </Stack>
        </Stack>

        <Stack
          my={2}
          position="relative"
          sx={() => ({
            flex: 1,
            alignItems: "center",
          })}
        >
          <Box
            sx={{
              position: "relative",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.02)",
              },
            }}
          >
            <img
              src={BannerImgOne}
              alt="Dashboard Preview"
              className="banner-img-one"
            />
            <img
              src={BannerImgTwo}
              alt="Analytics Preview"
              className="banner-img-two"
            />
          </Box>
        </Stack>
      </Stack>

      <Stack
        ref={featuresRef}
        spacing={4}
        sx={(theme) => ({
          px: theme.spacing(4),
          [theme.breakpoints.down("sm")]: { px: 0 },
        })}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: "text.primary",
            }}
          >
            Why Choose Us?
          </Typography>
          <Typography
            variant="h6"
            color="text.primary"
            sx={{ opacity: 0.7, maxWidth: "600px", mx: "auto" }}
          >
            Everything you need to manage your dealer network efficiently
          </Typography>
        </Box>

        <Stack
          direction="row"
          sx={(theme) => ({
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 3,
            [theme.breakpoints.down("sm")]: {
              flexDirection: "column",
              alignItems: "center",
            },
          })}
        >
          {features.map((feature, index) => (
            <Card
              key={index}
              sx={() => ({
                flex: "1 1 calc(25% - 24px)",
                width: "300px",
                borderRadius: 3,
                transition: "all 0.3s ease",
                border: "1px solid",
                borderColor: "divider",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)",
                  borderColor: "primary.main",
                },
              })}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography
                  variant="h2"
                  sx={{ fontSize: "3rem", mb: 2, textAlign: "center" }}
                >
                  {feature.icon}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                    textAlign: "center",
                    color: "text.primary",
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.primary"
                  sx={{ opacity: 0.7, textAlign: "center", lineHeight: 1.6 }}
                >
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HomePage;
