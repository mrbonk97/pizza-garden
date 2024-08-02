import { Topnav } from "@/components/nav/top-nav";

interface MainLayoutProps {
  children: Readonly<{
    children: React.ReactNode;
  }>;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Topnav />
      {children}
    </>
  );
};

export default MainLayout;
