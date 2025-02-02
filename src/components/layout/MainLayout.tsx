import { Button, Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";

const { Header, Content } = Layout;

// const items: MenuProps["items"] = [
//   {
//     key: "Dashboard",
//     label: <NavLink to={"/admin/dashboard"}>Dashboard</NavLink>,
//   },

//   {
//     key: "User Management",
//     label: "User Management",
//     children: [
//       {
//         key: "Create Admin",
//         label: <NavLink to={"/admin/create-admin"}>Create Admin</NavLink>,
//       },
//       {
//         key: "Create Faculty",
//         label: <NavLink to={"/admin/create-faculty"}>Create faculty</NavLink>,
//       },
//       {
//         key: "Create Student",
//         label: <NavLink to={"/admin/create-student"}>Create student</NavLink>,
//       },
//     ],
//   },
// ];

const MainLayout = () => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Layout style={{ height: "100%" }}>
      <Sidebar />
      <Layout>
        <Header style={{ padding: 0 }}>
          <Button onClick={handleLogout}>Logout</Button>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
