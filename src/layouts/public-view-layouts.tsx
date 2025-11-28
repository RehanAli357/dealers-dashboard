import { Stack } from "@mui/material";
import SecondaryHeaders from "../components/headers/secondary-headers";
import { Outlet } from "react-router-dom";

const PublicViewLayouts = () => {
  return (
    <Stack>
      <SecondaryHeaders />
      <Stack bgcolor={"secondary.main"}>
        <Outlet />
      </Stack>
    </Stack>
  );
};

export default PublicViewLayouts;
