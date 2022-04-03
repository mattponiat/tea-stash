//Components
import Header from "components/organisms/Header";
import Headroom from "react-headroom";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Headroom>
        <Header />
      </Headroom>
      {children}
    </>
  );
};

export default Layout;
