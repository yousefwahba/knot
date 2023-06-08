import { Button, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';

const HeadNavbar = () => {
  return (
    <div>
      <Navbar rounded className="bg-gray-100">
        <Navbar.Brand>
          <img
            alt="Flowbite React Logo"
            className="mr-3 h-6 sm:h-9"
            src="/logo.svg"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            <Link to="/">Knot</Link>
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button className="bg-third text-white">
            <Link to="register">Get started</Link>
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="space-y-3">
          <Link
            className="nav-link hover:text-primary mb-1"
            activeClassName="text-primary"
            to="/"
          >
            Home
          </Link>
          <Link className="nav-link mb-1" activeClassName="text-primary ">
            <Link to="/dashboard">Dashboard</Link>
          </Link>
          <Link
            className="nav-link mb-1"
            activeClassName="text-primary"
            to="/about"
          >
            About
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default HeadNavbar;
