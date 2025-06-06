import { Outlet } from "react-router";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";

const Layout = () => {
  const title = "Hehe";

  return (
    <DashboardLayout
      branding={{
        logo: "",
        title,
      }}
      defaultSidebarCollapsed={false}
      
    >
      <PageContainer>
        <Outlet />
      </PageContainer>
    </DashboardLayout>
  );
};

export default Layout;
