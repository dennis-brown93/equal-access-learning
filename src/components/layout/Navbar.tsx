
import { useState } from "react";
import TopBar from "./navbar/TopBar";
import NavbarLogo from "./navbar/NavbarLogo";
import DesktopMenu from "./navbar/DesktopMenu";
import MobileMenuToggle from "./navbar/MobileMenuToggle";
import MobileMenu from "./navbar/MobileMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <TopBar />
      
      {/* Main Bar */}
      <div className="container py-4 flex justify-between items-center">
        <NavbarLogo />
        <DesktopMenu />
        <MobileMenuToggle isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Navbar;
