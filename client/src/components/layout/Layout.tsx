import { Outlet } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "./Footer";

export const Layout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
