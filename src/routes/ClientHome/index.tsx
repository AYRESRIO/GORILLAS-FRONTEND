import { Outlet } from "react-router-dom";
import HeaderClient from "../../components/HeaderClient";

export default function CLientHome() {
  return (
    <>
      <HeaderClient />
      <Outlet />
    </>
  );
}
