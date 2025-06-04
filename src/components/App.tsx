import { useRef } from "react";
import { MyDrawer } from "./common";
import { MyDrawerHandle } from "./common/Drawer";
import { menuItems } from "../config/menu";
import { Outlet } from "react-router";

const App = () => {
  const drawerRef = useRef<MyDrawerHandle>(null);

  return (
    <MyDrawer
      ref={drawerRef}
      title={"My React App"}
      list={menuItems}
    >
      <Outlet />
    </MyDrawer>
  );
};

export default App;
