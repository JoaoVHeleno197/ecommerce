import AsideMenu from "../components/header/AsideMenu";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <AsideMenu />

      <main style={{ padding: "20px", flex: 1 }}>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
