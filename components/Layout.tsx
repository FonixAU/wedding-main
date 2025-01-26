import Navbar from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">{children}</main>
    </div>
  );
};

export default Layout;
