import PrimaryHeaders from "@/components/headers/primary-headers";
import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

const DashboardViewLayout = () => {
  return (
    <Stack>
      <PrimaryHeaders />
      <Stack>
        <Outlet />
      </Stack>
    </Stack>
  );
};

export default DashboardViewLayout;
