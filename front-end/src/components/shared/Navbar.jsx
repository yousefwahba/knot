import { Button, Navbar } from 'flowbite-react';

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
            Knot
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button className="bg-third text-white">Get started</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="">
          <Navbar.Link className="nav-link hover:text-primary" href="#">
            Home
          </Navbar.Link>
          <Navbar.Link className="nav-link" href="#">
            Dashboard
          </Navbar.Link>
          <Navbar.Link className="nav-link" href="#">
            About
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default HeadNavbar;
