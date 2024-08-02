import { Topnav } from "@/components/nav/top-nav";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Topnav />
      {children}
    </>
  );
};

export default AppLayout;
