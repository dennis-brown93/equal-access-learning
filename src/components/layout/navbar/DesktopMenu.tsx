
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

const DesktopMenu = () => {
  return (
    <div className="hidden lg:flex items-center space-x-8">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                to="/"
                className="text-foreground hover:text-primary-600 font-thin px-3 text-sm"
              >
                Home
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                to="/about"
                className="text-foreground hover:text-primary-600 font-thin px-3 text-sm"
              >
                About Us
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-thin text-sm">
              Our Work
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[200px] gap-1 p-2">
                <NavigationMenuLink asChild>
                  <Link
                    to="/work"
                    className="block py-2 px-2 rounded hover:bg-accent"
                  >
                    Our Projects
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    to="/impact"
                    className="block py-2 px-2 rounded hover:bg-accent"
                  >
                    Impact
                  </Link>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                to="/join"
                className="text-foreground hover:text-primary-600 font-thin px-3 text-sm"
              >
                Join Us
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Button asChild className="bg-secondary hover:bg-secondary/90">
        <Link to="/donate" className="text-xs">
          Donate Today
        </Link>
      </Button>
    </div>
  );
};

export default DesktopMenu;
