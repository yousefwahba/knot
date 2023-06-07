import MainFooter from './Footer';
import HeadNavbar from './Navbar';

const Layout = (props) => {
  return (
    <div>
      <HeadNavbar />
      <div className="min-h-[40vh] container mx-auto">{props.children}</div>
      <MainFooter />
    </div>
  );
};

export default Layout;
