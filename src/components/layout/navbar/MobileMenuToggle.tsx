
import React from "react";
import { Menu, X } from "lucide-react";

interface MobileMenuToggleProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenuToggle = ({ isOpen, toggleMenu }: MobileMenuToggleProps) => {
  return (
    <button className="lg:hidden" onClick={toggleMenu}>
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  );
};

export default MobileMenuToggle;
