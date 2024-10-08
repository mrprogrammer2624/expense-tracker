import { Footer, Header } from "@/components";
import { Outlet } from "react-router-dom";

export const HomeLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
